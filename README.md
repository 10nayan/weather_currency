# weather_currency
This front end side web application consist of index.html, app.js , config.js(ignored by git ignore) file. Three API used for this application, https://restcountries.eu/ for getting all the list of countries( though India is listed as British India till now), then we used 
https://weatherstack.com/product API for getting current weather information and https://reqbin.com/lib/fixer/nn1vh8zr/latest-foreign-exchange-rates-via-rest-api for getting currency exchange rate by API call and show the results over the main page of our application.
## Usage
### Clone/Modify application
1.Create an account in openweather and fixer.io and get your API key.

2.Create a file config.js or .env to store your api key and later access it to your main app.js

3.You can add a backend server like too to run this application with some other features added. 
## Areas of improvement/Limitation to current application
1. Style of this website can be improved to a great extend as I have written very less CSS in this application.
2. As mentioned earlier India is not mentioned properly in Country list API, It gives some irrelevent data while searching India in the searchbox.
3. Fixer.io  doesnot provide API call over https (for free version), so it can not be hosted over github pages or other similar platform because it restricts it. 
4. Fixer.io doesnot provide changing base currency to any other currency from Euro (for free version).
