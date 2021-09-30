// requires
let express = require('express');
let app = express();

app.use(express.json())

// uses
app.use(express.static('server/public'));

// globals
const port = 5001;

let answer;
let history = []

// routes
app.get('/answer', (req, res) => {
    res.send({answer: answer});
})

app.get('/history', (req, res) => {
    res.send(history)
})

//symbols and calculations
app.post('/calculate', (req, res) => {
    let { symbol, lastNum, firstNum } = req.body
    if (symbol === "-") {
        answer = firstNum - lastNum
    } else if (symbol === "+") {
        answer = firstNum + lastNum
    } else if (symbol === "/") {
        answer = firstNum / lastnum
    } else if (symbol === "*") {
        answer = firstNum * lastnum
    } else {
        answer = "invalid symbol"
    }
    const historyData = {
        firstNum,
        symbol,
        lastNum,
        answer
    }
    history.push(historyData)
    res.send("OK")

})


// spin up server
app.listen(port, () => {
    console.log('server is up on', port);
})


