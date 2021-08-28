$.ajax({
    url:`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e7bc839c5f9eb592eeb0e79bcd1a6a16&units=imperial`
}).then(
    function(data){
        // console.log(data)


    },
    function(error){
        console.log('make sure you typed in a real city', error);
    }
);



let weatherData;



const $weatherfor = $('#weatherfor');
const $temperature = $('#temperature');
const $feelslike = $('#feelslike');
const $weather = $('#weather');

const $input = $('input[type="text"]');






function handleGetData
(event){
event.preventDefault();
$.ajax({
    url:`http://api.openweathermap.org/data/2.5/weather?q=${$input.val()}&APPID=e7bc839c5f9eb592eeb0e79bcd1a6a16&units=imperial`
}).then(
function(data) {
        console.log(data);
        weatherData = data;
        successmessage = 'Data was succesfully captured';
        render($input.val(""));
            $weatherfor.text(data.name);
            $temperature.text(data.main.temp);
            $feelslike.text(data.main.feels_like);
            $weather.text(data.weather[0].description);


    },
function(error) {
        console.log('make sure you typed in a real city', error);
    });
}


function render() {
    $weatherfor.text(weatherData.name)    
    $temperature.text(weatherData.main.temp)
    $feelslike.text(weatherData.main.feels_like)
    $weather.text(weatherData.weather[0].description)

}

$('form').on('submit', handleGetData)
