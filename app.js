const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use("/public", express.static(__dirname + "/public"));
// app.use("/x", xRoute);

let decryptedText = "";

let decryptCode = (req, res, next) => {
    let result = '';
    for (let i = 0; i < req.body.inpCryptCode.length; i++) {
        let charac = req.body.inpCryptCode[i];
        char = charac.charCodeAt(0);
        if (char >= 65 && char <= 90)
            result += charac.toLowerCase();
        else if (char >= 97 && char <= 122)
            result += charac.toUpperCase();
        else result += charac;
    }
    req.body.inpCryptCode = result;
    next();
};

let decodeCode = (req, res, next) => {
    let data = Buffer.from(req.body.inpCryptCode, "base64").toString("utf-8");
    req.body.inpCryptCode = data;
    next();
};

app.post('/eval', decryptCode, decodeCode, (req, res) => {
    decryptedText = req.body.inpCryptCode;
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.render('index', {decryptedText});
});

app.listen('8081', () => {
    console.log("Server started at http://localhost:8081");
});