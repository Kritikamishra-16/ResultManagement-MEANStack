let express=require('express'); //api req,res
let path=require('path');    //routing
let mongoose=require('mongoose'); //mongodb
let cors=require('cors');   //corsorigin
let bodyParser=require('body-parser');
let dbConfig=require('./db/database');
const createError=require('http-errors');

//database connection 
mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log('Database Connected');
},error=>{
    console.log('database cannot be connected'+ error);
});

//middlewares
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cors());

//routing
const userRoute=require('./routes/student.route');
app.use('/endpoint',userRoute);

//server
const PORT=process.env.PORT|| 8080;
const server=app.listen(PORT,()=>{
    console.log('Server is listening on :'+ PORT);
});


app.use((req,res,next)=>{
    next(createError(404));
});

app.use(function(err,req,res,next){
    if(!err.statusCode) 
        err.statusCode=500;
    res.status(err.statusCode).send(err.message);
})

app.get('/',(req,res)=>{
    res.send('invalid endpoint');
});