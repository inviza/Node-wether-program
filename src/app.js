const path = require('path');

const express = require('express');

const app = express();
const port = process.env.PORT || 3000

const publiciractoryPath = path.join(__dirname, '../public')
app.use(express.static(publiciractoryPath))

// app.get('', (req, res) => {
//     res.send('hello express!')
// })

// app.get('/help', (req, res) => {
//     res.send('help page express!')
// })

// app.get('/about', (req,res) => {
//     res.send('About')
// })

app.get('/weather', (req,res) => {
    res.send('weather')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})