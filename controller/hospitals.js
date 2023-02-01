//@desc     Get all hospitals
//@routes   GET /api/v1/hospitals
//@access   Public
exports.getHospitals=(req,res,next)=>{
    res.status(200).json({success:true, message:"Get all hospitals"});
}

//@desc     Get single hospitals
//@routes   GET /api/v1/hospitals/:id
//@access   Public
exports.getHospital=(req,res,next)=>{
    res.status(200).json({success:true, message:`Get hospital ${req.params.id}`});
}

//@desc     Create all hospitals
//@routes   POST /api/v1/hospitals
//@access   Private
exports.createHospitals=(req,res,next)=>{
    res.status(200).json({success:true, message:"Create new hospitals"});
}

//@desc     Update single hospitals
//@routes   PUT /api/v1/hospitals/:id
//@access   Private
exports.updateHospital=(req,res,next)=>{
    res.status(200).json({success:true, message:`Update hospital ${req.params.id}`});
}

//@desc     Delete single hospitals
//@routes   DELETE /api/v1/hospitals/:id
//@access   Private
exports.deleteHospital=(req,res,next)=>{
    res.status(200).json({success:true, message:`Delete hospital ${req.params.id}`});
}