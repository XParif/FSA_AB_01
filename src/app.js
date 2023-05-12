const express = require("express")
const app = express()
const randomizer = require("./utils/randomizer")
const getfakePerson = require("./utils/getFakePerson")
const characterCounter = require("./utils/characterCounter")

const PORT = 5000

// Home API endpoint
app.get("/", (req, res) => {
    res.status(200).send("This is home route. nothing here")
})

// Random number endpoint
app.get("/rand", (req, res) => {
    const start = parseInt(req.query.start)
    const end = parseInt(req.query.end)

    const randomNumber = randomizer(start, end)

    res.status(200).send("The random number between " + start + " to " + end + " is : " + randomNumber)
})

// Random Fake Profile endpoint
app.get("/fake", (req, res) => {
    const specs = req.query.specs.split(',')
    const person = getfakePerson(specs)
    res.status(200).json(person)
})

// Word Letter Counter endpoint 
app.get("/counter", (req, res) => {
    const word = req.query.word
    const count = characterCounter(word)
    res.status(200).json(count)
})

app.listen(PORT, () => {
    console.log("Server is running on port number", PORT);
})