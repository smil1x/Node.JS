const http = require("http");

const options = {
  host: "localhost",
  path: "/?name=Sasha",
  port: "8080",
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