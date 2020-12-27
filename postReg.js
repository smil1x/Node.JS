const http = require("http");

const options = {
  host: "localhost",
  path: "/",
  port: "8080",
  method: "POST",
};

var req = http.request(options, res => {
  let msg = "";
res.on("data", data => {
  msg += data;
});
res.on("end",  () => {
  console.log(msg);
});
});


req.end();