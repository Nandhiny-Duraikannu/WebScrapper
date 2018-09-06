const rp = require('request-promise');
const cheerio = require('cheerio');
/* GET home page. */

const options = {
    uri: 'https://www.theverge.com/',
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(($) => {
        console.log($('.c-entry-box--compact__title').text());
    })
    .catch((err) => {
        console.log(err);
    });

