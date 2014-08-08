var bus = require("../index");

bus("642", function(error, data) {
  if (error != null) { /* if error */
    console.log(error);
    console.log(data);
    return;
  }

  console.log(data);
});