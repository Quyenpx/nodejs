const express = require('express');

const app = express()

// gọi đến ToanHoc
const ToanHoc = require('./ToanHoc');

//gọi body parser
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//req : request
//res : response

//trang chủ
app.get('/',(req,res)=>{
    res.send('hello');
});

app.get('/toanhoc',(req,res)=>{
    res.send('hello toán học')
});

app.get('/admin',(req,res)=>{
    res.send('hello admin')
});

app.get('/giai_PTB1/:a/:b',(req,res)=>{
    const kq =new ToanHoc();
    res.send(kq.giai_PTB1(req.params.a,req.params.b));
});

//_dirname : lấy đường dẫn gốc thư mục hiện tại
app.get('/view-form-PTB1',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.post('/giai_PTB1',(req,res)=>{
    const kq =new ToanHoc();

    res.send(kq.giai_PTB1(req.body.a,req.body.b));
});


app.listen(3000, ()=>{
    console.log('Server Opened');
});