// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.post ('/', (req, res) => {
    let results = [{
        title: 'JS tutorials',
        description: 'The best JavaScript tutorials in the galaxy!',
        url: 'https://www.w3schools.com',
        links: [
            {
            title: 'JS for Beginners',
            url: 'https://www.w3schools.com/js'
            }, {
            title: 'JS for the Web',
            url: 'https://www.w3schools.com/js'
            }
        ]
    }, {
        title: 'JavaScript | MDN',
        description: 'JavaScript (JS) is a lightweight' ,
        url: 'https://www.w3schools.org',
        links: [
            {
            title: 'JS 1',
            url: 'https://www.w3schools.org/js'
            }, {
            title: 'JS 2',
            url: 'https://www.w3schools.org/js'
            }
        ]
    }, {
        title: 'JavaScript - Wikipedia',
        description: 'The best JavaScript tutorials in the galaxy!',
        url: 'https://www.w3schools.net',
        links: [
            {
            title: 'JavaScript Online',
            url: 'https://www.w3schools.com/js'
            }, {
            title: 'JavaScript Definition',
            url: 'https://www.w3schools.com/js'
            }
        ]
    }]

    console.log(req.body.searchterm)
    results = results.filter(e=> e.title.includes(req.body.searchterm))
    res.render ('results', {results})
})



// Export module
module.exports = router