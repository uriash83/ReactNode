const express = require('express')
const router = new express.Router()

require('./../db/mongoose') // not import but only invoking function in mongoose.js
const routeClimb = require('./../models/modelClimbRoute')

router.get('/getdata', async (req,res) => {
    console.log('/getdata from server' )
   
    
    try {
        const listRoute = await routeClimb.find({})
        console.log(listRoute);
        
        res.setHeader("Content-Type", "text/html")
        res.status(201)
        res.json({data: listRoute})
        //res.send(listRoute)
        res.end()
        
    } catch (err) { 
        console.log(err);
        res.setHeader("Content-Type", "text/html")
        res.statusCode(500)
        res.send(err)
        res.end()
    }
})
        

router.post('/postdata' ,(req,res) => {
    const newRoute = new routeClimb({
        typeRoute: "Indoor",
        locationRoute: "Murall",
        difficulty: "6a+"
      })
      
      
      newRoute.save().then((item) => console.log('getClick '+item));
})

 module.exports = router