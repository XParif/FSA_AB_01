const randomizer = (start, end) => {
    return (Math.floor(Math.random() * (end - start)) + 1) + start
}

module.exports = randomizer