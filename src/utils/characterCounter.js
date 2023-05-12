const characterCounter = (word) => {
    const lettersArray = word.split('');
    let count = {
        number: 0,
        letter: 0,
        symbols: 0
    }

    lettersArray.map((character) => {
        const charCode = character.charCodeAt()

        if (charCode >= 48 && charCode <= 57) {
            count.number++
        } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            count.letter++
        } else {
            count.symbols++
        }
    })

    return count
}

module.exports = characterCounter