const resObj=
[
  // 20250129165324
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4543771&lng=78.3815201&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null

{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
      "nextOffset": "CJpqEJtYKICQlKeHn/y5bjDIDjgD",
      "widgetOffset": {
        "restaurantCountWidget": "",
        "inlineFacetFilter": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food": "8",
        "collectionV5MastheadWidget": ""
      }
    },
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            "collectionId": "83639",
            "title": "Biryani",
            "description": "Taste these delectable classics, delectable biryanis to make your day.",
            "imageId": "COLLECTIONS/IMAGES/MERCH/2025/1/3/a956d6fd-5fa1-4ab7-b734-05424a92c0cb_Biriyani.png",
            "aspectRatio": "3.44",
            "cta": {
              "link": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
              "type": "collectionv2"
            },
            "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
            "count": "212 restaurants"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            "sortConfigs": [
              {
                "key": "relevance",
                "title": "Relevance (Default)",
                "selected": true,
                "defaultSelection": true
              },
              {
                "key": "deliveryTimeAsc",
                "title": "Delivery Time"
              },
              {
                "key": "modelBasedRatingDesc",
                "title": "Rating"
              },
              {
                "key": "costForTwoAsc",
                "title": "Cost: Low to High"
              },
              {
                "key": "costForTwoDesc",
                "title": "Cost: High to Low"
              }
            ],
            "restaurantCount": 212,
            "facetList": [
              {
                "label": "10 Mins Delivery",
                "id": "isRestaurantBolt",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "10 Mins Delivery",
                    "id": "isRestaurantBoltfacetquery0",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Filterby",
                "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
                "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
              },
              {
                "label": "Veg/Non-Veg",
                "id": "isVeg",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Non Veg",
                    "id": "isVegfacetquery0",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Pure Veg",
                    "id": "isVegfacetquery1",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Ratings",
                "id": "rating",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Ratings",
                    "id": "ratingfacetquery0",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.0+",
                    "id": "ratingfacetquery1",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.5+",
                    "id": "ratingfacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Delivery Time",
                "id": "deliveryTime",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than 30 mins",
                    "id": "deliveryTimefacetquery0",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Less than 45 mins",
                    "id": "deliveryTimefacetquery1",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Cost For Two",
                "id": "costForTwo",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than Rs. 300",
                    "id": "costForTwofacetquery0",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Rs.300 - Rs.600",
                    "id": "costForTwofacetquery1",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Greater than Rs. 600",
                    "id": "costForTwofacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "widgetPadding": {
                "left": 16,
                "right": 16
              },
              "scrollBar": {
                
              },
              "widgetTheme": {
                "defaultMode": {
                  "backgroundColour": "#FFFFFF",
                  "theme": "THEME_TYPE_LIGHT"
                },
                "darkMode": {
                  "backgroundColour": "#1B3028",
                  "theme": "THEME_TYPE_DARK"
                }
              }
            },
            "id": "restaurantCountWidget",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                "text": "212 Restaurants to explore",
                "headerStyling": {
                  "textSize": 15,
                  "textColor": "text_color_highest_emphasis",
                  "textFontName": "FONT_NAME_HEADER_H5",
                  "maxLines": 1
                }
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "27447",
              "name": "Pista House",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/30/ad09bd63-48fa-420c-9d14-ebdf930e8f3c_8d144167-47d0-41b7-996f-6b5ffefeb3b1.jpeg",
              "locality": "Kondapur",
              "areaName": "Kondapur",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Chinese",
                "Kebabs",
                "Mughlai",
                "Tandoor"
              ],
              "avgRating": 4.3,
              "parentId": "1732",
              "avgRatingString": "4.3",
              "totalRatingsString": "289K+",
              "promoted": true,
              "adTrackingId": "cid=24495238~p=0~adgrpid=24495238#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=27447~eid=c4a8c58b-cabf-4ebb-a3b6-8a65be1e6841~srvts=1738149803997~collid=83639",
              "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "3.8",
                  "ratingCount": "224"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "24495238"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=27447&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "120129",
              "name": "Shah Ghouse Hotel & Restaurant",
              "cloudinaryImageId": "bzzboei5q647sr0zgz2g",
              "locality": "Kothaguda",
              "areaName": "Kondapur",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Biryani",
                "Chinese",
                "Mughlai",
                "Tandoor"
              ],
              "avgRating": 4.2,
              "parentId": "19271",
              "avgRatingString": "4.2",
              "totalRatingsString": "99K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
                  },
                  {
                    "imageId": "Rxawards/_CATEGORY-Mughlai.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Biryani.png",
                          "description": "Delivery!"
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Mughlai.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "3.4",
                  "ratingCount": "8.6K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=120129&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "762480",
              "name": "Rayalaseema Spice",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/22/66281653-2bbe-4edc-b04a-6d684113521b_f2cbfa55-9b1d-4a33-937c-a3ef4596fbbc.jpg",
              "locality": "Serlingampally Circle No 20",
              "areaName": "Madhapur",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani",
                "Chinese"
              ],
              "avgRating": 3.9,
              "parentId": "22389",
              "avgRatingString": "3.9",
              "totalRatingsString": "2.0K+",
              "promoted": true,
              "adTrackingId": "cid=24505118~p=1~adgrpid=24505118#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=762480~eid=15efb883-902b-4b03-bd55-edced8399e5c~srvts=1738149803997~collid=83639",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:55:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "24505118"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=762480&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "248771",
              "name": "Raju Gari Biryani",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/17/a4da2e16-26c7-4ed6-80aa-610d27c1f8bf_0b45da44-4dcb-4f34-8a22-e4ee79874cf2.jpg",
              "locality": "AYYAPA SOCIETY, MADHAPUR.",
              "areaName": "Madhapur",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Biryani",
                "Snacks",
                "Chinese",
                "Mughlai"
              ],
              "avgRating": 3.8,
              "parentId": "165947",
              "avgRatingString": "3.8",
              "totalRatingsString": "48K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-02-05 00:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=248771&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "362111",
              "name": "Potful - Claypot Biryanis",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/46f33ceb-1924-4d56-b4e8-79875cf90e75_362111.JPG",
              "locality": "Madhapur",
              "areaName": "Kavuri Hills",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Mughlai",
                "Kebabs",
                "Haleem",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.4,
              "parentId": "160121",
              "avgRatingString": "4.4",
              "totalRatingsString": "7.0K+",
              "promoted": true,
              "adTrackingId": "cid=24219355~p=2~adgrpid=24219355#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=362111~eid=55779f8c-3eb3-4086-994e-4a5ef76a3fe0~srvts=1738149803997~collid=83639",
              "sla": {
                "deliveryTime": 58,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:45:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "description": "",
                          "shortDescription": "brand",
                          "fontColor": "#7E808C"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹325",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "24219355"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=362111&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "34633",
              "name": "Srikanya",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/7/4e98fc76-53aa-4ab3-b99b-a74d55214dca_b2db7e6f-ff48-4fa4-8170-5adebe2af74c.jpg",
              "locality": "Kothaguda",
              "areaName": "Kondapur",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian"
              ],
              "avgRating": 4.2,
              "parentId": "7317",
              "avgRatingString": "4.2",
              "totalRatingsString": "110K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 22:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "3.9",
                  "ratingCount": "7.9K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=34633&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "672962",
              "name": "Tadipatri Biryani",
              "cloudinaryImageId": "8b085c075fbfd7a1b330a0d5cb21a6ec",
              "locality": "Kothaguda X Roads",
              "areaName": "Kondapur",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Snacks"
              ],
              "avgRating": 4.1,
              "parentId": "402773",
              "avgRatingString": "4.1",
              "totalRatingsString": "634",
              "promoted": true,
              "adTrackingId": "cid=24505033~p=3~adgrpid=24505033#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=672962~eid=3db2801d-5240-4669-9a09-73717dc7b8bc~srvts=1738149803997~collid=83639",
              "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹148",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "24505033"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=672962&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 3
  },
  "tid": "02282896-5967-4dd5-967f-43035ab76546",
  "sid": "in472626-3555-4b6a-ae27-a71edfdee050",
  "deviceId": "6ba34c5c-cd76-7cf9-0bbe-fe9014434469",
  "csrfToken": "QgeBGjnjeAXa-QcDKXd6n-p0W5NL2M7zWO47LblU"
}
    
];
  
export default resObj;