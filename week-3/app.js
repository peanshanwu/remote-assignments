// require the exprees module
const express = require('express');
// call the express function
const app = express();


// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static file
app.use(express.static('public'));


// set the engine
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.send('express server runs!!');
});

app.get('/getData', (req, res) => {
    const { number } = req.query;
    let message = '';
    
    // console.log(number);
    let total = 0;
    const r = /^[0-9]*[1-9][0-9]*$/; // 正規式：正整數
    const integer = r.test(number);  // 回傳true false
    if (integer) {
        for (let i = 1; i <= number; i++) {
            total += i;
        };
    } else {
        message = 'Wrong Parameter';
    }
    res.render('getData', { total, message});
});


// set up the express server
// app.listen(3000);
const port = 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});




// -------------------- TO DO -------------------- 
// 1. 修正數字填入0時的bug
// 2. 自動填入算式（如輸入3，自動填入 1+2+3=6