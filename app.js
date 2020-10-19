
const input=document.getElementById('input');
const result=document.getElementById('result');
const result2=document.getElementById('result2');
const btn=document.getElementById('btn');
var CAPITAL;
var CURRENCY;
var EXRATE=0;
const WEATHER_APIKEY =config.weather_apikey;
const CURRENCY_APIKEY= config.currency_apikey;
btn.addEventListener('click',()=>{
  cnt_name=input.value;
  const country_api=`https://restcountries.eu/rest/v2/name/${cnt_name}`;
  fetch(country_api)
    .then(response=>{
      return response.json();

    })
    .then(data=>{
      var{name,capital}=data[0];
      CAPITAL=capital;
      const{code}=data[0].currencies[0];
      CURRENCY=code;
      const curr_name=data[0].currencies[0].name;
      console.log(name);
      console.log(capital);
      console.log(code);
      console.log(curr_name);
    })

    .then(data=>{
     const api=`https://api.openweathermap.org/data/2.5/weather?q=${CAPITAL}&appid=${WEATHER_APIKEY}`
     fetch(api)
       .then(response=>{
         return response.json();
       })
       .then(data=>{
         const {id,main,description,icon}=data.weather[0];
         const {temp,pressure,humidity}=data.main;
         console.log(temp,pressure,humidity);
         console.log(description);
         result.innerHTML=`
         <h4> ${main} ${description} </h4>
         <p> Current temp:${temp/10} degree celcius, Current pressure: ${pressure} mb, Current humidity: ${humidity}%</p>
         <img src="http://openweathermap.org/img/wn/${icon}@2x.png"/>
         `;
       });
     })
     .then(data=>{
       const cur_api=`http://data.fixer.io/api/latest?access_key=${CURRENCY_APIKEY}&base=EUR&symbols=${CURRENCY}`
       fetch(cur_api)
       .then(response=>{
         return response.json();
       })
       .then(data=>{
         const rate=data['rates'][CURRENCY];
         EXRATE=rate;
         console.log(rate);
         console.log(EXRATE);
         result2.innerHTML=`<p> Current exchange rate 1 EUR = ${EXRATE} ${CURRENCY} </p>`
       });
     })
});
