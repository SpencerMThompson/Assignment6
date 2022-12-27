const express = require('express')
const path = require('path');

const app = express()
const port = 3000
app.use(express.json());


//When base URL is requested send them the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

//get all the people
app.get('/people', (req, res) => {
    res.json(people);
})

//post a new person
app.post('/people', (req, res) => {
    //retrieve the JSON from the post request
    let postedJSON = req.body;
    let highestId = 0;
    people.forEach((person) => {
        if(person.id > highestId){
            highestId = person.id;
        }
    });
    postedJSON.id = highestId + 1;
    people.push(postedJSON);
    //output the data to the terminal for testing

    //when done send 200 status OK with a JSON message
    res.status(200).json({ message: "Added" });
})


//startup message
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const people = [
    {
        "id": 37,
        "name": "Aaron Aaronson",
        "age": 30,
        "email": "aa@aa.aa",
    },
    {
        "id": 123,
        "name": "Erin Erinson",
        "age": 31,
        "email": "ee@ee.ee",
    },
    {
        "id": 321,
        "name": "Billy Bob",
        "age": 29,
        "email": "bb@bb.bb",
    },
    {
        "id": 432,
        "name": "Zelda Zimmerman",
        "age": 32,
        "email": "zz@z.zz",
    },
];

