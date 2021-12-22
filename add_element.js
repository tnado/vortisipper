const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'http://localhost:8000'
},  (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let ulEl = $('ul');

    ulEl.append('<li>Living Life</li>');

    let lis = $('ul').html();
    let items = lis.split('\n');

    items.forEach((e) => {
        if (e) { 
            console.log(e.replace(/\s+/g, '')); //this is a condensed version however it still has white space between orginigal and appended li
        }
    });
});