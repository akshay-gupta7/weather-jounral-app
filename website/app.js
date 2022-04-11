/* Global Variables */

/*const { application } = require("express");
const res = require("express/lib/response");
const { json } = require("express/lib/response");*/

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Personal API key for OpenWeatherMap API
let baseurl = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '2645f1a4225683c9072ea51c68f2bae0&units=imperial';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    const zipcode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getTemperature(baseurl, apiKey, zipcode, feelings);
}

const getTemperature = async (baseurl, apiKey, zipcode, feelings)=>{
    const finalurl = baseurl + zipcode + ",us&appid=" + apiKey;
    console.log('Date is ', newDate);

    const res = await fetch(finalurl)
    try{
        const data = await res.json();
        console.log("The following is the response of data: ", data);
        const temp_in_far = data.main.temp;
        console.log("Temperature in Degrees farhenheit is:", temp_in_far);
        console.log("Feelings is", feelings);
        return temp_in_far;
    }   
    catch(error) {
        console.log("error", error);
    }
    
}

const postData = async (url = '', data = {})=>{
    console.log("This is Data in Post Function body:", data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try{
        const newData = await response.json();
        console.log("Try", newData);
        return newData;
    }catch(error) {
        console.log("error is ", error);
    }
}

postData('/temperature', {temperature: '66', feelings: 'Dense'} );