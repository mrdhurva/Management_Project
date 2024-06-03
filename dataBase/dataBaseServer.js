const express=require('express');

const mysql=require('mysql2');

const cors=require('cors');

const app=express();

const port=8000;

app.use(cors());

app.use(express.json());

const database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Blueriders@1',
    database:'management'
});


database.connect((error)=>{
    if(error){
        console.error('error connecting to database',error);
        return;
    }
    console.log('connected');
});

app.get('/',(req,res)=>{
    const sqlQuery='show tables';
    database.query(sqlQuery,(error,result)=>{
        if(error){
            return res.status(500).send(error);
        }
        res.json(result);
    });
});

app.get('/employees',(req,res)=>{
    const sqlQuery='select * from employees';
    database.query(sqlQuery,(error,result)=>{
        if(error){
            return res.status(500).send(error);
        }
        res.json(result);
    });
});

app.get('/login',(req,res)=>{
    const sqlQuery='select * from login';
    database.query(sqlQuery,(error,result)=>{
        if(error){
            return res.status(500).send(error);
        }
        res.json(result);
    });
});

app.post('/login',(req,res)=>{
    const {loginId,Name} = req.body;
    console.log(loginId,Name)
    const insertQuery = `insert into login (LoginId,Name,DAY,DATE,TIME) values (?,?,dayName(CURRENT_DATE),current_date(),current_time())`;
    database.query(insertQuery,[loginId,Name],(error,results)=>{
        if(error){
            console.log('error : ',error)
            return res.status(500).send('submit failed');
        }else{
            res.status(200).send('submitted');
        }
    })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});