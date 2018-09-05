/* eslint-disable */
export default {
	"creative": {
		"type": "image",
        "url": "./img/{{adSize}}-{{weather}}-animated-bg.gif"
		// "url": "./img/{{adSize}}-{{weather}}-bg.png"
	},
	"headline": {
		"weather": {
			"sunny": {
                "adSize": {
                    "300x250": "Douse <br>the sun!",
                    "Other": "Douse the sun!"
                }
            },
			"rainy": "Stay fresh on rainy day!",
			"cloudy": {
                "adSize": {
                    "970x250": "Going to rain soon, there's nothing to worry about!",
                    "728x90": "Going to rain soon, there's nothing to worry about!",
                    "468x60": "Going to rain soon, there's nothing to worry about!",
                    "Other": "Going to rain soon, there's <br>nothing to worry about!"
                }
            },
			"hazy": {
                "adSize": {
                    "300x250": "The haze dries out <br> your skin",
                    "Other": "The haze dries out <br>your skin"
                }
            },
			"cold": {
                "adSize": {
                    "300x250": "Cold air <br>has a dry bite",
                    "970x250": "Cold Air Conditioning can dry out your skin!",
                    "468x60": "Cold Air Conditioning can dry out your skin!",
                    "728x90": "Cold Air Conditioning can dry out your skin!",
                    "Other": "Cold air has a dry bite"
                }
            } 
		}
	},
	"headlineStyle": {
		"adSize": {
			"300x250": {
				"text": "dum",
				"style": "top:105px;left:14px;font-size:16px;"
			},
			"400x250": {
				"text": "dum",
				"style": "top:96px;left:25px;font-size:16px;"
			},
            "728x90": {
                "text": "dum",
                "style": "font-size:16px;margin-bottom:9px;"
            },
            "970x250": {
                "text": "dum",
                "style": "font-size:23px;margin-bottom:6px;"
            },
             "468x60": {
                "weather": {
                    "cloudy": {
                        "text": "dum",
                        "style": "font-size:11px;margin-bottom:2px;"
                    },
                    "Other": {
                        "text": "dum",
                        "style": "font-size:12px;margin-bottom:2px;"
                    }
                }
            }
		}
	},
    "description": {
        "weather": {
            "cold": {
                "adSize": {
                    "300x250": "Boost skin's ability to <br>regulate and retain <br>moisture",
                    "Other": "Boost skin's ability to regulate <br>and retain moisture"
                }
            },
            "hazy": {
                "adSize": {
                    "300x250": "Unlock skin's ability to <br>replenish moisture",
                    "Other": "Unlock skin's ability to <br>replenish moisture"
                }
            },
            "sunny": {
                "adSize": {
                    "300x250": "Replenish lost moisture <br>from deep within",
                    "Other": "Replenish lost moisture <br>from deep within"
                }
            }
        }
    },
    "descriptionStyle": {
        "adSize": {
            "300x250": {
                "text": "dum",
                "style": "top:102px;left:14px;font-size:16px;"
            },
            "400x250": {
                "text": "dum",
                "style": "top:88px;left:25px;font-size:16px;"
            }
        }
    },
    "promoStyle": {
        "adSize": {
            "300x250": {
                "text": "20% off <span style=\"font-size:13px;\">with</span> JOHNN20FF <span style=\"font-size:13px;\">promo code</span>",
                "style": "font-size:19px;top: 225px;left: 10px;line-height: 12px;"
            },
             "400x250": {
                "text": "20% off <span style=\"font-size:13px;\">with</span> JOHNN20FF <span style=\"font-size:13px;\">promo code</span>",
                "style": "font-size:19px;top: 225px;left: 25px;line-height: 12px;"
            }
        }
    },
    "data": {
    	"adSize": {
    		"300x250": {
    			"weather": {
    				"hazy": {
    					"text": "{{api}}<span style=\"font-size: 22px;\">API</span>",
			    		"style": "font-size: 52px;position: absolute; top: 35px;left: 12px;"
    				},
    				"Other": {
    					"text": "{{temp}}<span style=\"font-size: 20px;vertical-align: 27px;\">o</span><span style=\"font-size:44px;\">c<span>",
			    		"style": "font-size: 52px;position: absolute; top: 35px;left: 12px;"
    				}
    			}
    		},
    		"400x250": {
    			"weather": {
    				"hazy": {
                        "text": "{{api}}<span style=\"font-size: 22px;\">API</span>",
                        "style": "font-size: 52px;position: absolute; top: 20px;left: 25px;"
                    },
                    "Other": {
                        "text": "{{temp}}<span style=\"font-size: 20px;vertical-align: 27px;\">o</span><span style=\"font-size:44px;\">c<span>",
                        "style": "font-size: 52px;position: absolute; top: 20px;left: 25px;"
                    }
    			}
    		},
            "468x60": {
                "weather": {
                    "hazy": {
                        "text": "{{api}}<span style=\"font-size: 18px;\">API</span>",
                        "style": "font-size: 45px;position: absolute;top: -2px;right: -135px;"
                    },
                    "Other": {
                        "text": "{{temp}}<span style=\"font-size: 14px;vertical-align: 18px;\">0</span><span style=\"font-size:18px\">c<span>",
                        "style": "font-size: 34px;position: absolute;top: 7px;left: 253px;"
                    }
                }
            },
            "728x90": {
                "weather": {
                    "hazy": {
                        "text": "{{api}}<span style=\"font-size: 24px;\">API</span>",
                        "style": "font-size: 66px;position: absolute;top: -2px;right:-225px;"
                    },
                    "Other": {
                        "text": "{{temp}}<span style=\"font-size: 28px;vertical-align: 32px;\">0</span><span style=\"font-size:28px\">c<span>",
                        "style": "font-size: 66px;position: absolute;top: -2px;left: 386px;"
                    }
                }
            },
            "970x250": {
                "weather": {
                    "hazy": {
                        "text": "{{api}}<span style=\"font-size: 34px;\">API</span>",
                        "style": "font-size: 100px;position: absolute;top: -5px;right:-375px;"
                    },
                    "Other": {
                        "text": "{{temp}}<span style=\"font-size: 42px;vertical-align: 45px;\">0</span><span style=\"font-size:34px\">c<span>",
                        "style": "font-size: 100px;position: absolute;top: -5px;left: 580px;"
                    }
                }
            }
    	}
    },
    "btnStyle": {
    	"adSize": {
    		"300x250": {
    			"text": "dum",
				"style": "top: 170px;left: 10px;font-size: 16px;width: 115px;height: 34px;"
    		},
    		"400x250": {
    			"text": "dum",
				"style": "top: 170px;left: 25px;font-size: 16px;width: 115px;height: 34px;"
    		},
            "728x90": {
                "text": "dum",
                "style": "top: 44px;left: 15px;font-size: 16px;width: 106px;height: 32px;"
            },
            "970x250": {
                "text": "dum",
                "style": "top: 180px;left: 26px;font-size: 20px;width: 160px;height: 45px;"
            },
            "468x60": {
                "text": "dum",
                "style": "top: 28px;left: 7px;font-size: 11px;width: 75px;height: 22px;line-height: 10px;padding: 4px 6px;"
            }
    	}
    },
    "bottle": {
    	"adSize": {
    		"300x250": {
    			"type": "image",
				"url": "./img/{{adSize}}-bottle.png",
				"style": "right: 0px;bottom: 2px;right: 1px;"
    		},
    		"400x250": {
    			"type": "image",
				"url": "./img/{{adSize}}-bottle.png",
				"style": "right: 0px;bottom: 2px;right: 1px;"
    		},
            "728x90": {
                "type": "image",
                "url": "./img/{{adSize}}-bottle.png",
                "style": "right: 0px;bottom: 2px;right: 1px;"
            },
            "970x250": {
                "type": "image",
                "url": "./img/{{adSize}}-bottle.png",
                "style": "right: 0px;bottom: 2px;right: 1px;"
            },
            "468x60": {
                "type": "image",
                "url": "./img/{{adSize}}-bottle.png",
                "style": "right: 0px;bottom: 2px;right: 1px;"
            },
    	}
    }

}