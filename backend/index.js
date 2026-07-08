const express = require('express')
const cors = require('cors')

const { convertLength, convertWeight, convertTemperature } = require('./converter.js')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req ,res)=>{
    res.send("Unit Converter API is running")
});

app.post('/api/convert', (req,res)=>{
    const{category, value, from, to} = req.body

    if(category === "length"){
        const result = convertLength(value, from,to)
        return res.json({
            success:true,
            message : 'Length is converted',
            result
        })
    }

    else if(category === "weight"){
        const result =convertWeight(value, from,to)
        return res.json({
            success:true,
            message : 'Weight is converted',
            result
        })
    }

    else if(category === "temperature"){
        const result =convertTemperature(value, from,to)
        return res.json({
            success:true,
            message : 'Temperature is converted',
            result
        })
    }

    else{
        return res.json({
            success:false,
            message:'Invalid category'
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})
