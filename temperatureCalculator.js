const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function convertTemperature(event) {
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case "celcius":
            kelvin.value = (currentValue + 273.15).toFixed(2);
            fahrenheit.value =  (currentValue * 9/5 + 32 ).toFixed(2);
            break;
        case "fahrenheit":
            celcius.value = ((currentValue - 32) * 5/9).toFixed(2);
            kelvin.value = ((currentValue - 32) * 5/9 + 273.15).toFixed(2);
            break;
        case "kelvin":
            celcius.value = (currentValue - 273.15).toFixed(2);
            fahrenheit.value = ((currentValue - 273.15) * 9/5 + 32).toFixed(2);
            break;
        default:
            break;
    }
}
