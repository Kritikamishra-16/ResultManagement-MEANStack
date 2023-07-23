const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let studentSchema=new Schema({
    roll_number:{
        type: String
    },
    name:{
        type: String
    },
    dob:{
        type: String
    },
    score:{
        type: String
    }
},{
    collection: 'students'
});

module.exports=mongoose.model('StudentSchema',studentSchema);

