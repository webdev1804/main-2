var map;
function initMap() 
{
    //Uploadingggg Gooole map into the website
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 }, // Set the initial map center
      zoom: 12, // Set the initial map zoom level
      disableDefaultUI:true
    });
    //Uploading the Google map into the website



    //search bar 
    //search bar
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    

    
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });
    
    autocomplete.addListener('place_changed', function() {
      marker.setVisible(false);
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
      
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
      
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
    });
    //search bar
    //search bar
}

var Wy = 
  [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c8d7d4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
  
];
var vintage_old_golden_brown =
[
  {
    "featureType": "all",
    "elementType": "all",
    "stylers": [
        {
            "color": "#ff7000"
        },
        {
            "lightness": "69"
        },
        {
            "saturation": "100"
        },
        {
            "weight": "1.17"
        },
        {
            "gamma": "2.04"
        }
    ]
},
{
    "featureType": "all",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#cb8536"
        }
    ]
},
{
    "featureType": "all",
    "elementType": "labels",
    "stylers": [
        {
            "color": "#ffb471"
        },
        {
            "lightness": "66"
        },
        {
            "saturation": "100"
        }
    ]
},
{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "gamma": 0.01
        },
        {
            "lightness": 20
        }
    ]
},
{
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
        {
            "saturation": -31
        },
        {
            "lightness": -33
        },
        {
            "weight": 2
        },
        {
            "gamma": 0.8
        }
    ]
},
{
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
        {
            "lightness": "-8"
        },
        {
            "gamma": "0.98"
        },
        {
            "weight": "2.45"
        },
        {
            "saturation": "26"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
        {
            "lightness": 30
        },
        {
            "saturation": 30
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
        {
            "saturation": 20
        }
    ]
},
{
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
        {
            "lightness": 20
        },
        {
            "saturation": -20
        }
    ]
},
{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
        {
            "lightness": 10
        },
        {
            "saturation": -30
        }
    ]
},
{
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "saturation": 25
        },
        {
            "lightness": 25
        }
    ]
},
{
    "featureType": "water",
    "elementType": "all",
    "stylers": [
        {
            "lightness": -20
        },
        {
            "color": "#ecc080"
        }
    ]
}
];
var google_vintage =
[
  {
    "featureType": "all",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#ebe3cd"
        }
    ]
},
{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#523735"
        }
    ]
},
{
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
        {
            "color": "#f5f1e6"
        }
    ]
},
{
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#c9b2a6"
        }
    ]
},
{
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#dcd2be"
        }
    ]
},
{
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#ae9e90"
        }
    ]
},
{
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#dfd2ae"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#dfd2ae"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#93817c"
        }
    ]
},
{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#a5b076"
        }
    ]
},
{
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#447530"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#f5f1e6"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#f8c967"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#e9bc62"
        }
    ]
},
{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#e98d58"
        }
    ]
},
{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#db8555"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#fdfcf8"
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#806b63"
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#dfd2ae"
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#8f7d77"
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
        {
            "color": "#ebe3cd"
        }
    ]
},
{
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#dfd2ae"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#b9d3c2"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#92998d"
        }
    ]
}
];
var vintage =
[
  {
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "administrative.locality",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#ece2d9"
        }
    ]
},
{
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#b8cb93"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "poi.business",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "poi.medical",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "poi.park",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#ccdca1"
        }
    ]
},
{
    "featureType": "poi.sports_complex",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "hue": "#ff0000"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 99
        }
    ]
},
{
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#808080"
        },
        {
            "lightness": 54
        }
    ]
},
{
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#767676"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
        {
            "color": "#ffffff"
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "weight": "1.44"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "all",
    "stylers": [
        {
            "saturation": 43
        },
        {
            "lightness": -11
        },
        {
            "hue": "#0088ff"
        }
    ]
}
];
var darkStyle = [
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "weight": 1
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "weight": 0.8
          }
      ]
  },
  {
      "featureType": "landscape",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "water",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  }
];

var json;

function setMapStyle(style) {
  var styleButtons = document.getElementById("block-2").getElementsByTagName("button");
  for (var i = 0; i < styleButtons.length; i++) {
    styleButtons[i].classList.remove("active");
  }
  switch (style) {
    case "vintage-old-golden-brown":
      map.setOptions({ styles: vintage_old_golden_brown });
      document.getElementById("vintage-old-golden-brown").classList.add("active");
      json = vintage_old_golden_brown;
      break;
    case "Wy":
      map.setOptions({ styles: Wy });
      document.getElementById("Wy").classList.add("active");
      break;
    case "google-vintage":
      map.setOptions({ styles: google_vintage });
      document.getElementById("google-vintage").classList.add("active");
      break;
    case "vintage":
      map.setOptions({ styles: vintage });
      document.getElementById("vintage").classList.add("active");
      break;
    case "darkstyle":
      map.setOptions({ styles: darkStyle });
      document.getElementById("darkstyle").classList.add("active");
      break;
    default:
      map.setOptions({ styles: defaultStyle });
      document.getElementById("default-style").classList.add("active");
      break;
  }
}



//creating the json code
function generateJsonCode() 
{
  var code = JSON.stringify(json, null, 2);
  document.getElementById("jsoncode").innerHTML = "<pre>" + code + "</pre>";
  
}


/*// get the button and the pop-up box
var button = document.getElementById("stylearray");
var popup = document.createElement("div");
popup.id = "popup-box";

// create the content of the pop-up box
var output = document.createTextNode("Output goes here.");
popup.appendChild(output);

// create the close button
var closeButton = document.createElement("span");
closeButton.id = "close-button";
closeButton.innerHTML = "&times;"; // the x symbol
popup.appendChild(closeButton);

// append the pop-up box to the body
document.body.appendChild(popup);

// show the pop-up box when the button is clicked
button.addEventListener("click", function() {
  popup.style.display = "block";
});

// hide the pop-up box when the close button is clicked
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
}); */


/*// get the button and the pop-up box
var button = document.getElementById("stylearray");
var popup = document.createElement("div");
popup.id = "popup-box";

// create the content of the pop-up box
var output = document.createTextNode("Output goes here.");
popup.appendChild(output);

// create the copy button
var copyButton = document.createElement("button");
copyButton.innerHTML = "Copy";
popup.appendChild(copyButton);

// create the close button
var closeButton = document.createElement("span");
closeButton.id = "close-button";
closeButton.innerHTML = "&times;"; // the x symbol
popup.appendChild(closeButton);

// append the pop-up box to the body
document.body.appendChild(popup);

// show the pop-up box when the button is clicked
button.addEventListener("click", function() {
  popup.style.display = "block";
});

// hide the pop-up box when the close button is clicked
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});

// copy the content of the pop-up box when the copy button is clicked
copyButton.addEventListener("click", function() {
  var range = document.createRange();
  range.selectNodeContents(popup);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  alert("Text copied to clipboard.");
});*/

/*// get the button and the pop-up box
var button = document.getElementById("stylearray");
var popup = document.createElement("div");
popup.id = "popup-box";

// create the content of the pop-up box
var output = document.createTextNode("Output goes here.");
popup.appendChild(output);

// create the copy button
var copyButton = document.createElement("button");
copyButton.id = "copy-button";
copyButton.innerHTML = "Copy";
popup.appendChild(copyButton);

// create the close button
var closeButton = document.createElement("span");
closeButton.id = "close-button";
closeButton.innerHTML = "&times;"; // the x symbol
popup.appendChild(closeButton);

// append the pop-up box to the body
document.body.appendChild(popup);

// show the pop-up box when the button is clicked
button.addEventListener("click", function() {
  popup.style.display = "block";
});

// hide the pop-up box when the close button is clicked
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});

// copy the content of the pop-up box when the copy button is clicked
copyButton.addEventListener("click", function() {
  var range = document.createRange();
  range.selectNodeContents(popup);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  alert("Text copied to clipboard.");
});*/
// get the button and the pop-up box
var button = document.getElementById("stylearray");
var popup = document.getElementById("popup-box");

// get the copy button and the close button
var copyButton = document.getElementById("copy-button");
var closeButton = document.getElementById("close-button");

// show the pop-up box when the button is clicked
button.addEventListener("click", function() {
  popup.style.display = "block";
});

// hide the pop-up box when the close button is clicked
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});

// copy the content of the pop-up box when the copy button is clicked
copyButton.addEventListener("click", function() {
  // get the output element
  var output = document.getElementById("popup-content").textContent;

  // create a temporary textarea to hold the text to be copied
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = output;
  document.body.appendChild(tempTextArea);

  // select and copy the text
  tempTextArea.select();
  document.execCommand("copy");

  // remove the temporary textarea
  document.body.removeChild(tempTextArea);

  // show a message to indicate that the text has been copied
  alert("Text copied to clipboard.");
});






























/*function initMap() 
      
      {
       
        
        var input = document.getElementById('pac-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);
        

        
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });
        
        autocomplete.addListener('place_changed', function() {
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }
          
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
          }
          
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);
        });
      }*/
  
  