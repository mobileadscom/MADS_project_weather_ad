/* eslint-disable */
/* global window */
import Mads from 'mads-custom';
import {getParamsFromJson, processMacrosInParams} from './js/getPropsFromJson';
import axios from 'axios';

import './main.css';
import json from './config.js';
class AdUnit extends Mads {
  constructor() {
    super();
  }
  
  idToWeather(id) {
    var weatherType = id.toString().charAt(0);
    var rainCondition = ['2', '3', '5'];
    if (weatherType == '7') {
      return 'hazy';
    }
    else if (weatherType == '8') {
      if (id == 800) {
        return 'sunny';
      }
      else {
        return 'cloudy';
      }
    }
    else if (rainCondition.indexOf(weatherType) > -1) {
      return 'rainy';
    }
    else {
      return 'sunny';
    }
  }

  fixAdSize() {
    if (window.ad.custTracker.length > 0) {
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      w = Math.round(w / 10) * 10;
      h = Math.round(h / 10) * 10;
      document.getElementById('rma-widget').style.width = w.toString() + 'px';
      document.getElementById('rma-widget').style.height = h.toString() + 'px';
    }
    else {
      document.getElementById('rma-widget').style.width = '300px';
      document.getElementById('rma-widget').style.height = '250px';
    }
    

  }

  getData() {
    // get latitude and longitude
    axios.get('https://api.waqi.info/feed/here/?token=367864ec788156f6ff0b984252e4405d6072b071').then((r) => { 
      console.log(r);
      if (r.data.data.city) {
        // get weather
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            lat: r.data.data.city.geo[0].toFixed(2).toString(),
            lon: r.data.data.city.geo[1].toFixed(2).toString(),
            appid: 'ac6f574b2e0e75e42a3ec17e145d2731'
          }
        }).then((res) => {
          console.log(res);

          // weather type
          // 2xx - thunderstorm
          // 3xx - drizzle
          // 5xx - rainy
          // 6xx - snow
          // 7xx - hazy
          // 800 - sunny
          // 8xx - cloudy
          
          var weather = this.idToWeather(res.data.weather[0].id);

          // check for cold weather
          if (weather != 'rainy') {
            // console.log(res.data.main.temp - 273.15);
            if (res.data.main.temp - 273.15 < 25) {
              weather = 'cold';
            }
          }

          if (weather == 'hazy') {

          }
          console.log(weather);
          this.doInit({
            weather: weather,
            api: r.data.data.aqi.toString(),
            temp: (res.data.main.temp - 273.16).toFixed(0).toString()
          });
        }).catch((err) => {
          console.log(err);
          this.doInit({
            weather: 'sunny',
            api: '0',
            temp: '28'
          });
        })
      }
      else {
        this.doInit({
          weather: 'sunny',
          api: '0',
          temp: '28'
        });
      }
    }).catch((error) => {
      console.log(error);
        this.doInit({
          weather: 'sunny',
          api: '0',
          temp: '28'
        });
    });
  }

  doInit(conditions) {
    console.log(conditions);
    const conditionsLowerCase = {};
    for (let i in conditions) {
      conditionsLowerCase[i] = conditions[i].toLowerCase();
    }
    this.params = getParamsFromJson(json, conditionsLowerCase);
    this.params = processMacrosInParams(this.params, conditions);
    this.finalRender();
  }

  render() {
    console.log('data', this.data);
    this.fixAdSize();
    this.getData();

    /*return `
      <div class="container" id="ad-container">
        <div class="jumbotron">
          <h1>${this.data.title}</h1>
          <p>${this.data.sample}</p>
          <p><a class="btn btn-primary btn-lg button" href="#">Learn More</a></p>
        </div>
      </div>
    `;*/

    return `
      <div id="ad-container"></div>
    `;
  }

  finalRender() {
    const ad = this.params;
    /*const backgroundNode = 
      `<img id="ad-background" src="${ad.creative.url}" alt=""${ad.creative.style}>`;

    document.getElementById('ad-container').innerHTML = `
      ${backgroundNode}
      <!--<h1 id="ad-headline"${ad.headline.style}>${ad.headline.text}</h1>-->
      <p id="ad-description"${ad.description.style}>${ad.description.text}</p>
      <a id="ad-cta"${ad.cta.style} onclick="alert('${ad.cta.url}')">${ad.cta.text}</a>
    `;*/
    console.log(this.params);
    const backgroundNode = `<img id="ad-background" src="${ad.creative.url}" alt="">`;
    document.getElementById('ad-container').innerHTML = `${ad.description.text}${backgroundNode}`;
  }
  

  style() {
    console.log('elements', this.elems);
    return [
      `
      body {
        margin: 0px;
      }
      `];
  }

  events() {
    console.log('load events');
  }
}

window.ad = new AdUnit();
