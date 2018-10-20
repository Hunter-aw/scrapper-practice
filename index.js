const request = require('request');
const requestPromise = require('request-promise')
const cheerio = require('cheerio')

const options = {
    uri: 'https://codeburst.io/an-introduction-to-web-scraping-with-node-js-1045b55c63f7',
    transform: (body) => {
        return cheerio.load(body);
    }
};

requestPromise(options)
    .then(($) => {
        console.log($('#e644').text())
        console.log($('#7ab5').text())
        
    })
    .catch((err) => {
        console.log(err)
    });

// requestPromise(options)
//     .then(($) => {
//         console.log($('#e644').text())
//         $('.tags').each(function(i, elem) {
//             elem[i] = console.log($('li').text())
//         })
        
//     })
//     .catch((err) => {
//         console.log(err)
//     });
    