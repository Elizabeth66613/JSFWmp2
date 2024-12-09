import express from 'express';

// Import Lipstick model (Mongoose model defined in models/Lipstick.js)
import Lipstick from '../models/Lipstick.js';

const router = express.Router()




router.post('/', (req, res) => {
    try{

    console.log(req.body);

       const {brand, price, color, format, country} = req.body;

       const newLipstick = new Lipstick({
        brand,
        price, 
        color, 
        format,
        country
    });


       const savedLipstick = newLipstick.save();

       res.status(201).json(savedLipstick);
    } catch (error){
        res.status(400).json({ message: error.message });
    }
});

// ES6 module "export": To export the router so it can be used in the main app
export default router;