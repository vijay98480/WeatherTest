let request = require('request');

let apiKey = 'e9c5bf834390e3e42fdafb6b30b53ab5';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
  //  console.log('body:', body);
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
    console.log(message);

  }
});