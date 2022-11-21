const sum = (a, b) => {
    return a+b
}

const getData = async (a, b) => {
    return sum(a, b)
}

module.exports = { sum, getData }
