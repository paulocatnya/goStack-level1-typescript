import express from 'express';
import {hello} from './routes'
const app = express();

app.get('/', (req,res) => {
    return res.json({message:'Eae TS'})
});




app.listen(3000)