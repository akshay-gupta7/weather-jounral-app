/* Global Variables */

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
    getTemperatue(baseurl, apiKey, zipcode, feelings);
}

const getTemperatue = async (baseurl, apiKey, zipcode, feelings)=>{
    const finalurl = baseurl + zipcode + ",us&appid=" + apiKey;
    const res = await fetch(finalurl)
    try{

        const data = await res.json();
        console.log("The following is the response of data: ", data);
        return data;
    }   catch(error) {
        console.log("error", error);
    }
    
}