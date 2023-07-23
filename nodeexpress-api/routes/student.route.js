const express=require('express');
const app=express();
const studentExpressRoute=express.Router();
let StudentSchema= require('../model/student.model');

studentExpressRoute.route('/').get((req,res)=>{

    StudentSchema.find()
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        return next(err);
    });

});

studentExpressRoute.route('/student/:id').get(async (req,res)=>{
    try {
        const studentFound = await StudentSchema.findById(req.params.id);
        res.json(studentFound);
      } catch (err) {
        return next(err);
    }
});

studentExpressRoute.route('/add-student').post(async (req,res,next)=>{
    try{
        console.log(res.body);
        const data= await StudentSchema.create(req.body) 
        res.json(data);
    }catch (error){
        return next(error);
    }
});

studentExpressRoute.route('/delete-student/:id').delete(async (req,res)=>{
    try {
        await StudentSchema.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg:"successfully deleted"
        });
      } catch (err) {
        return next(err);
    }
});

studentExpressRoute.route('/update-student/:id').put(async (req,res)=>{
    try {
        await StudentSchema.findByIdAndUpdate(req.params.id,{
            $set:req.body
        });
        res.status(200).json({
            msg:"successfully updated"
        });
      } catch (err) {
        return next(err);
    }
    
});

studentExpressRoute.route('/student-search').get(async (req,res)=>{
    const {name,roll_number}= req.query;
    try {
        const studentFound = await StudentSchema.findOne({ name, roll_number });
        if (studentFound) {
            res.json(studentFound);
          } else {
            res.status(404).json({ message: 'Student not found' });
          }
      } catch (err) {
        res.status(500).json({ message: 'Internal server error' });    }
});







module.exports=studentExpressRoute;