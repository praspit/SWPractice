const express = require('express')
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).json({success:true, message:"Show all hospitals"});
})

router.get('/:id', (req,res) => {
    res.status(200).json({success:true, message:`Show hospital ${req.params.id}`});
})

router.post('/', (req,res) => {
    res.status(200).json({success:true, message:"Create new hospitals"});
})

router.put('/:id', (req,res) => {
    res.status(200).json({success:true, message:`Update hospital ${req.params.id}`});
})

router.delete('/:id', (req,res) => {
    res.status(200).json({success:true, message:`Delete hospital ${req.params.id}`});
})

module.exports = router;