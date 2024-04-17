const connectToMongo = require('./db');
const express = require('express')
// var cors = require('cors')


connectToMongo();


const app = express()
const port = 5000

var userRoute = require('./routes/userRoute');
app.use('/user-route',userRoute);

const cors=require("cors");
const corsOptions ={
  origin:'*', 
  credentials:true, 
             
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/Candidate_info',require('./routes/Candidate_info'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})