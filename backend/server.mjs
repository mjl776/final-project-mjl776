import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

// initialize express app 
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const connectDBUrl = ``;

app.listen(process.env.PORT || 3000, () => {
    console.log("port 3000 listen...");
});

mongoose.connect(connectDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((db)=>{
    console.log("DB connected")
  }).catch((err) => { 
      console.log(err.message);
  });



