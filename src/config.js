/* eslint-disable */
export default {
	"creative": {
		"type": "image",
		"url": "./img/{{adSize}}-{{weather}}-bg.png"
	},
	"copy": {
		"adSize": {
			"300x250": {
				"text": "dum",
				"style": "top: 45px;left: 12px;"
			},
			"400x250": {
				"text": "dum",
				"style": "top: 45px;left: 22px;"
			},
            "970x250": {
                "text": "dum",
                "style": "top: 75px;left: 25px;"
            }
		}
	},
	"headline": {
		"weather": {
			"sunny": "Beat the head damage!",
			"rainy": "Stay fresh on rainy day!",
			"cloudy": {
                "adSize": {
                    "970x250": "Going to rain soon, there's nothing to worry about!",
                    "Other": "Going to rain soon, there's <br>nothing to worry about!"
                }
            },
			"hazy": "The haze dries our your skin.",
			"cold": {
                "adSize": {
                    "970x250": "Cold Air Conditioning can dry out your skin!",
                    "Other": "Cold Air Conditioning <br>can dry out your skin!"
                }
            } 
		}
	},
	"headlineStyle": {
		"adSize": {
			"300x250": {
				"text": "dum",
				"style": "font-size:14px;margin-bottom:4px;"
			},
			"400x250": {
				"text": "dum",
				"style": "font-size:14px;margin-bottom:4px;"
			},
            "970x250": {
                "text": "dum",
                "style": "font-size:23px;margin-bottom:6px;"
            }
		}
	},
	"description": {
		"weather": {
			"sunny": {
                "adSize": {
                    "970x250": "Quench your skin's thirst and locks it deep within your skin all day.",
                    "Other": "Quench your skin's thirst and <br>locks it deep within your skin all day."
                }
            },
			"rainy": {
                "adSize": {
                    "970x250": "Boost your skin hydration and locks it deep within your skin all day.",
                    "Other": "Boost your skin hydration and <br>locks it deep within your skin all day.",
                }
            },
            "cloudy": {
                "adSize": {
                    "970x250": "Hydates, protects and repairs your skin to lock that moisture in.",
                    "Other": "Hydates, protects and repairs <br>your skin to lock that moisture in.",
                }
            },
			"hazy": "Unlock skin's ability to replenish moistures.",
			"cold": {
                "adSize": {
                    "970x250": "Protects and repairs your skin barrier to lock that moisture in.",
                    "Other": "Protects and repairs your skin <br>barrier to lock that moisture in."
                }
            }
		}
    },
    "descriptionStyle": {
    	"adSize": {
    		"300x250": {
    			"text": "dum",
    			"style": "font-size:14px;"
    		},
    		"400x250": {
    			"text": "dum",
    			"style": "font-size:14px;"
    		},
            "970x250": {
                "text": "dum",
                "style": "font-size:18px;"
            }
    	}
    },
    "data": {
    	"adSize": {
    		"300x250": {
    			"weather": {
    				"hazy": {
    					"text": "{{api}}<span style=\"font-size: 32px;\">API</span>",
			    		"style": "font-size: 76px;"
    				},
    				"Other": {
    					"text": "{{temp}}<span style=\"font-size: 42px;vertical-align: top;\">0</span><span style=\"font-size:32px\">c<span>",
			    		"style": "font-size: 76px;"
    				}
    			}
    		},
    		"400x250": {
    			"weather": {
    				"hazy": {
    					"text": "{{api}}<span style=\"font-size: 32px;\">API</span>",
			    		"style": "font-size: 76px;"
    				},
    				"Other": {
    					"text": "{{temp}}<span style=\"font-size: 42px;vertical-align: top;\">0</span><span style=\"font-size:32px\">c<span>",
			    		"style": "font-size: 76px;"
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
				"style": "top: 200px;left: 10px;font-size: 16px;width: 115px;height: 34px;"
    		},
    		"400x250": {
    			"text": "dum",
				"style": "top: 200px;left: 20px;font-size: 16px;width: 115px;height: 34px;"
    		},
            "970x250": {
                "text": "dum",
                "style": "top: 180px;left: 26px;font-size: 20px;width: 160px;height: 45px;"
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
            "970x250": {
                "type": "image",
                "url": "./img/{{adSize}}-bottle.png",
                "style": "right: 0px;bottom: 2px;right: 1px;"
            }
    	}
    },
    "logo": {
    	"adSize": {
    		"300x250": {
    			"type": "image",
				"url": "./img/{{adSize}}-logo.png",
				"style": "top: 0px;left:0px;"
    		},
    		"400x250": {
    			"type": "image",
				"url": "./img/{{adSize}}-logo.png",
				"style": "top: 0px;left:10px;"
    		},
            "970x250": {
                "type": "image",
                "url": "./img/{{adSize}}-logo.png",
                "style": "top: 0px;left:0px;"
            }
    	}
    }

}