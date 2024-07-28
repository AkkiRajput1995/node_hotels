const express=require('express');
const app=express();
const db=require('./db.js');
const bodyParser=require('body-parser');

app.use(bodyParser.json());// req.body

const Person=require('./person.js');
const menu=require('./menu.js');

app.get('/', function(req,res){
    res.send('Hello world!!!!!!!!!!!!!')
})

app.post('/Person', async (req,res)=>{
    try{
    const data=req.body
    const newPerson= new Person(data);

    const person1 = await newPerson.save();
    console.log('data saved');
    res.status(200).json(person1);

}
catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'})}
})
//GET method
app.get('/person',async (req,res)=>{
    try{
        const data=await Person.find();
        console.log('data fetched');
    res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

/// post menuitem
app.post('/Menu', async (req,res)=>{
    try{
    const data=req.body
    const newMenu= new menu(data);

    const menu1 = await newMenu.save();
    console.log('data saved');
    res.status(200).json(menu1);

}
catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'})}
})

app.get('/person/:workType',async (req,res)=>{
    try{
    const workType=req.params.workType;
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const response=await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);

    }else{
        res.status(500).json({error:'Invalid work type'});
    }

}

catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'})}
}

)


app.put('/:id',async (req,res)=>{
    try{
         const personId=req.params.id;
         const updatedPersonData=req.body;

         const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true
         })
if(!response){
    return res.sendStatus(500).json({'not found':error});
}

         console.log('data updated');
         res.status(500).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})}
})

app.delete('/:id',async (req,res)=>{
    try{
    const personId=req.params.id;


const response=await Person.findByIdAndDelete(personId)
if(!response){
return res.sendStatus(500).json({'not found':error});
}

console.log('data deleted');
res.status(200).json({message:'person data deleted'});

}catch(err){
console.log(err);
res.status(500).json({error: 'Internal Server Error'})}
})

app.listen(3000, ()=>{
    console.log('listening port on 3000')
})


//comment added