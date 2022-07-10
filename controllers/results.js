// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')

// Create POST controller
router.post ('/', async (req, res) => {
    let results= await Results.find({
        title: { $regex: req.body.searchterm, $options: 'i' }
    })

    console.log(req.body.searchterm)
    res.render ('results', {results})
})



// Export module
module.exports = router