const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const messages = [
    {
        text:`Ali Bomaye! Ali Bomaye! Thank God, that my n***** lived another day!`,
        owner: 'The Game'
},
    {
        text:`I'm so happy, cause today I've found my friends!`, 
        owner: 'Kurt Cobain'
}]

const api = express.Router();

api.get('/messages',(req,res)=> {
    res.json(messages);
});

api.post('/messages',(req,res)=> {
    messages.push(req.body);
    console.log(req.body);
    res.sendStatus(200);
});


app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    res.header("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept");
    next();
})



app.use('/api', api);

app.listen(9400)