const express = require('express');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: "./.env" });
const port = 8008;
app.use(express.json());

MONGODB_URI= process.env.DATABASE.replace("<db_password>",process.env.DATABASE_PASSWORD)
//connect to db 
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB.');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
// affiche text api method get
app.get('/msg', (req, res) => {
    res.send('Hello, World!');
});


// read file 
 let food = JSON.parse(fs.readFileSync('./foods.json', 'utf8'));
app.get('/foods', (req, res) => {
    res.status(200).json({
        message:"secces", 
        results: food.length, 
        data : {food},
    });
})

// insert plat 
 app.post('/foods', (req, res) => {
    const newFood = Object.assign({ id: food[food.length - 1].id + 1 }, req.body);
    food.push(newFood);
    fs.writeFileSync('./foods.json', JSON.stringify(food));
    res.status(201).json({ message: 'Food added successfully', data: newFood });
});

// // update file
//  app.put('/foods/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const food = food.find((f) => f.id === id);
//     if (!food) {
//         return res.status(404).json({ message: 'Food not found' });
//     }
//     food.name = req.body.name;
//     food.price = req.body.price;
//     fs.writeFileSync('./foods.json', JSON.stringify(foods));
//     res.status(200).json({ message: 'Food updated successfully', data: food });
// });

// host local server
app.listen(port,
    () => {
        console.log(`Server running at http://localhost:${port}`);
    }    
);