const lengthUnit={
    "millimeter" : 0.001,
    "centimeter" : 0.01,
    "meter" : 1,
    "kilometer" : 1000,
    "inch" : 0.0254,
    "foot" : 0.3048,
    "yard" : 0.9144,
    "mile" : 1609.34
}

function convertLength(value, from, to){
    const n1 = value* lengthUnit[from]
    const n2 = n1/lengthUnit[to]
    return n2
}

const weightUnit = {
    "milligram" : 0.001,
    "gram" : 1,
    "kilogram" : 1000,
    "ounce" : 28.3498,
    "pound" : 453.592
}

function convertWeight(value, from, to){
    const n1 = value* weightUnit[from]
    const n2 = n1/weightUnit[to]
    return n2
}

function convertTemperature(value, from, to){
    let C,ans
    switch(from){
        case "Fahrenheit":
            C = (value - 32) * 5/9
            break
        case "Kelvin":
            C = value - 273.15
            break
        case "Celsius":
            C = value
            break
    }
    switch(to){
        case "Fahrenheit":
            ans = C * 9/5 + 32
            break
        case "Kelvin":
            ans = C + 273.15
            break
        case "Celsius":
            ans = C
            break
    }
    return ans
}

module.exports = {convertLength, convertWeight, convertTemperature};