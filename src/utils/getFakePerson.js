const fakeList = require("../database")

const getfakePerson = (specs) => {
    const person = {}

    specs.map((data) => {
        person[data] = fakeList[data][Math.floor(Math.random() * fakeList[data].length)]
    })

    return person
}


module.exports = getfakePerson