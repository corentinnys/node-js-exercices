// creation server


const express = require('express')
const app = express();
app.use(express.json())


const persons =[
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/person/:id',(request,response)=>
{
    const id = Number(request.params.id)
    const person = persons.find(person=> person.id===id)
    console.table(person)
  
    if (person  == undefined)
    {
      response.status(404).end()
    }else{
      console.log(id);

      console.log(person);
       response.send('<h1>'+person.name +'</h1>')
       response.status(204).end()
    }
  
  })



const PORT = 3000;
app.listen(PORT,()=>{
   console.log('server run');
})



