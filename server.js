const express = require("express")
const app = express()

const PORT = 4000;
let total = 0;

app.use(express.json())

app.get("/calculator", (req, res) => {
    res.status(200).json({total})
})

app.post("/calculator", (req, res) => {
    const number = req.body.number
    const operation = req.body.operation

    if(operation === 'add'){
        total += number
    }else if(operation === 'subtract') {
        total -= number
    }else if (operation === 'multiply') {
        total *= number
    }else if(operation === 'divide') {
        total /= number
    }else{
        return res.status(400).json({error: 'Invalid operation'})
    }
    res.status(200).json({total})
})


app.delete("/calculator", (rep, res) => {
    total = 0
    res.status(204).json({})
})



app.listen(PORT, () => {           
    console.log("Listening on port: 4000")
})

// ALSO CAN USE app.listen(4000, () => {console.log("Listen on port:4000")})

