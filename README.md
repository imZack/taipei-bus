taipei-bus
==========

:exclamation::exclamation::exclamation: WARNING :exclamation::exclamation::exclamation:

This is just for **prototyping** or **personal use**, if you want to use in `production` you have to [APPLY for OFFICIAL API](http://www.dot.taipei.gov.tw/ct.asp?xItem=3167481&CtNode=44829&mp=117001)

Installation
------------

```sh
npm install taipei-bus
```


Usage
-----

**bus(busNo, callback(data))**

```
var bus = require("taipei-bus");

bus("642", function(data) {
  console.log(data);
  /*
  Check out sample.json for complete data.
  {
    "go": [
      {
        "name": "調度站青潭站",
        "direction": 0,
        "buses": [],
        "status": "末班已過"
      },
      {
        "name": "青潭(新烏)",
        "direction": 0,
        "buses": [],
        "status": "末班已過"
      },
      {
        "name": "青潭(北宜)",
        "direction": 0,
        "buses": [],
        "status": "末班已過"
      },
      
      ......................
      
      {
        "name": "下埤里",
        "direction": 0,
        "buses": [],
        "status": "末班已過"
      },
      {
        "name": "復興北村",
        "direction": 0,
        "buses": [],
        "status": "末班已過"
      }
    ],
    "back": [
      {
        "name": "五常街口",
        "direction": 1,
        "buses": [],
        "status": "末班已過"
      },
      {
        "name": "捷運景美站",
        "direction": 1,
        "buses": [],
        "status": "7分"
      },
      {
        "name": "滬江中學",
        "direction": 1,
        "buses": [
          "151-FU",
          "153-FU"
        ],
        "status": "進站中"
      },
      .....................
    ]
  }
  */
});

```


License
-------
MIT: http://yulun.mit-license.org
