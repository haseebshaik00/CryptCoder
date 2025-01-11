const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use("/public", express.static(__dirname + "/public"));
// app.use("/x", xRoute);

app.get('/', (req, res) => {
    res.send("Homepage!");
});

app.listen('8081', () => {
    console.log("Server started at http://localhost:8081");
});