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
      w == 730 ? 728 : w;
      w == 470 ? 468 : w; 
      document.getElementById('rma-widget').style.width = w.toString() + 'px';
      document.getElementById('rma-widget').style.height = h.toString() + 'px';
      if ((w.toString() + 'x' + h.toString()) == '730x90') {
        return '728x90';
      }
      if ((w.toString() + 'x' + h.toString()) == '470x60') {
        return '468x60'
      }
      console.log(w.toString() + 'x' + h.toString());
      return w.toString() + 'x' + h.toString();
    }
    else {
      document.getElementById('rma-widget').style.width = '300px';
      document.getElementById('rma-widget').style.height = '250px';
      return '300x250';
    }
  }

  getData(adSize) {
    // get latitude and longitude
    // axios.get('http://ip-api.com/json').then((response) => {
    axios.get('https://geoip.nekudo.com/api').then((response) => {
    // axios.get('https://ipapi.co/json/').then((response) => {
      console.log(response.data);

      // get weather
      var apikeys = ['e8d27050f5101eead5d03a04e03d0e30',
      'ac6f574b2e0e75e42a3ec17e145d2731', 
      'd503554c1185201323f45d8e76c7c757', 
      'afcc0bd7d2c28fe04b2fab997c704d4c', 
      '292ad821cf63b45321dc1d6f2b84d30b',
      '7841e0367adc2d932fc764d3f0ecff00',
      '889d3769a4beea334df3300e4fce3558',
      '100c4e3f37582a48fdd7c5c3e90a3c56',
      '0e398b03958ba3592fee9a1d1c53530f',
      '3315232aac35762b1a6c6734d506a69f'];

      var randomNo = Math.floor(Math.random() * apikeys.length );
      var apikey = apikeys[randomNo];
      axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          // lat: response.data.latitude.toFixed(2).toString(),
          // lon: response.data.longitude.toFixed(2).toString(),
          lat: response.data.location.latitude.toFixed(2).toString(),
          lon: response.data.location.longitude.toFixed(2).toString(),
          // lat: 3.09,
          // lon: 101.61,
          appid: apikey
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
        // weather = 'hazy';
        // check if it's hazy
        if (weather == 'hazy') {
          console.log('hazy');

            // get aqi
            axios.get(`https://api.waqi.info/feed/geo:${response.data.latitude};${response.data.longitude}/?token=367864ec788156f6ff0b984252e4405d6072b071`).then((r) => { 
              console.log(r);
              this.doInit({
                weather: weather,
                api: r.data.data.aqi.toString(),
                temp: (res.data.main.temp - 273.16).toFixed(0).toString(),
                adSize: adSize
              });
            }).catch((e) => {
              console.log(e);
               // for some reason the api will return error the first time
                axios.get(`https://api.waqi.info/feed/geo:${response.data.latitude};${response.data.longitude}/?token=367864ec788156f6ff0b984252e4405d6072b071`).then((re) => { 
                console.log(re);
                this.doInit({
                  weather: weather,
                  api: re.data.data.aqi.toString(),
                  temp: (res.data.main.temp - 273.16).toFixed(0).toString(),
                  adSize: adSize
                });
              }).catch((er) => {
                console.log(er);
                this.defaultCondition(adSize);
              });
            });
        }
        else {
          // check for cold weather
          /*if (weather != 'rainy') {

            if (res.data.main.temp - 273.15 < 25) {
              weather = 'cold';
            }
          }*/
          if (weather == 'rainy' || weather == 'cloudy') {
            if (res.data.main.temp - 273.15 < 30) {
              weather = 'cold';
            }
            else {
              weather = 'sunny';
            }
          }
          else {
            weather = 'sunny';
          }
          console.log(weather);
          this.doInit({
            weather: weather,
            api: '30',
            temp: (res.data.main.temp - 273.16).toFixed(0).toString(),
            adSize: adSize
          });
        }
      }).catch((err) => {
        console.log(err);
        this.defaultCondition(adSize);
      });
    }).catch((error) => {
      console.log(error);
      this.defaultCondition(adSize);
    });
  }

  defaultCondition(adSize) {
    var hr = (new Date()).getHours();
    if (hr >= 6 && hr < 20) {
      this.doInit({
        weather: 'sunny',
        api: '30',
        temp: '30',
        adSize: adSize
      });
    }
    else {
      this.doInit({
        weather: 'cold',
        api: '30',
        temp: '24',
        adSize: adSize
      });
    }
  }

  doInit(conditions) {
    this.conditions = conditions;
    console.log(this.conditions);
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
    var adSize = this.fixAdSize();
    if (window.params.weather) {
      setTimeout(() => {
        this.doInit({
          weather: window.params.weather,
          api: '30',
          temp: '24',
          adSize: adSize
        });    
      }, 500);

    }
    else {
      this.getData(adSize);
    }

    return `<div id="ad-container"></div>`;
  }
  
/*  trackVariation(weather) {
    console.log(weather);
     if (window.ad.custTracker.length > 0) {
      var trackingUrl =  window.ad.custTracker[0].replace('{{rmatype}}', weather).replace('{{rmatt}}', 'E').replace('{{rmavalue}}', '');
      trackingUrl += window.ad.tags;
      console.log(trackingUrl);
      var pixel = document.createElement('img');
      pixel.src = trackingUrl;
      document.body.appendChild(pixel);
    }
  }*/

  finalRender() {
    const ad = this.params;
    console.log(this.params);
    const backgroundNode = `<img id="ad-background" src="" alt="">`;
    document.getElementById('ad-container').innerHTML = `${backgroundNode}
      <div class="headline" id="headline" ${ad.headlineStyle.style}>${ad.headline.text}</div>
      <div class="description" id="description" ${ad.descriptionStyle.style}>${ad.description.text}</div>
    <div class="variableData" ${ad.data.style}>${ad.data.text}</div>
    <div id="coupon">
      <div class="promo" ${ad.promoStyle.style}>
        ${ad.promoStyle.text}
      </div>
      <button class="ct-btn" ${ad.btnStyle.style} id="ctBTN">SHOP NOW</button>
    </div>
    <img src="${ad.bottle.url}" ${ad.bottle.style} class="bottle"/>`;

    let bg = new Image();
    bg.onload = (e) => {
      document.getElementById('ad-background').src = bg.src;
      if (this.conditions.adSize == '320x50') {
        document.getElementById('coupon').style.opacity = 0;
        document.getElementById('coupon').style.transform = 'translateX(100%)';
        setTimeout(() => {
          document.getElementById('headline').style.opacity = '0';
          document.getElementById('headline').style.transform = 'translateX(-100%)';
          document.getElementById('description').style.opacity = '1';
          document.getElementById('description').style.transform = 'translateX(0)';
          document.getElementById('coupon').style.transition = 'all 0.5s';
        }, 3000);
        setTimeout(() => {
          document.getElementById('description').style.opacity = '0';
          document.getElementById('description').style.transform = 'translateX(-100%)';
          document.getElementById('coupon').style.opacity = 1;
          document.getElementById('coupon').style.transform = 'translateX(0)';
        }, 6000);
      }
      else {
        setTimeout(() => {
          document.getElementById('headline').style.opacity = '0';
          document.getElementById('headline').style.transform = 'translateX(-100%)';
          document.getElementById('description').style.opacity = '1';
          document.getElementById('description').style.transform = 'translateX(0)';
        }, 4000);
      }
      
    }
    bg.src = ad.creative.url;
    this.tracker('', 'v_' + this.conditions.weather);
  }
  

  style() {
    console.log('elements', this.elems);
  }

  events() {
    console.log(window.ad);
    document.getElementById('ad-container').addEventListener('click', () => {
      this.linkOpener('https://shopee.com.my/Neutrogena-Hydro-Boost-Water-Gel-(50g)-i.62781995.1078001132');
      this.tracker('CTR', 'link', 'link', 'v_' + this.conditions.weather);
    });
  }
}

function getParams() {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = pair[1];
      // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
          var arr = [ query_string[pair[0]], pair[1] ];
          query_string[pair[0]] = arr;
      // If third or later entry with this name
      } else {
          query_string[pair[0]].push(pair[1]);
      }
  } 
  return query_string;
}

window.params = getParams();

window.ad = new AdUnit();

