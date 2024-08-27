const express = require("express")
const app = express()

const PORT = 4000;

app.listen(PORT, () => {           
    console.log("Listening on port: 4000")
})

// ALSO CAN USE app.listen(4000, () => {console.log("Listen on port:4000")})