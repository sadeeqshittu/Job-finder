const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const async = require('express-async-await');



router.get('/', async(req, res, next) => {
	const data = await fetch('https://jobs.github.com/positions.json');
    const dataJson =  await data.json();
   res.send(dataJson);
})

router.get('/:description/:location', async(req, res, next) => {
    
    const terms = {
    	description: req.params.description,
    	location: req.params.location
    }
	    const data = await fetch(`https://jobs.github.com/positions.json?description=${terms.description}&location=${terms.location}`);
	    const dataJson =  await data.json();
	    res.json(dataJson);
	
	
})

router.get('/:id', async(req, res, next) => {
	const id = req.params.id;
	const data = await fetch(`https://jobs.github.com/positions/${id}.json`);
	const dataJson = await data.json();
	res.send(dataJson);
})




module.exports = router;
