const cors = require('cors');
 

 

 



var express=require("express");
const connectDB=require('./config/db');
var app=express();

//connect Database

connectDB();

//init middleware
app.use(express.json({extended:false}));
app.use(cors({origin: 'http://localhost:3000'}))

const PORT=process.env.PORT || 5000;
// app.get("/",
//    (req,res)=> res.send("Node js is single threaded")
// )
//Define Routes
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/posts',require('./routes/api/posts'))
app.use('/api/profile',require('./routes/api/profile'))
app.listen(PORT,
    ()=>console.log(`Server started on port ${PORT}`)
)