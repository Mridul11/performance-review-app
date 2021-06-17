const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./models");
const app = express();

const corsOptions = {
    Option: "*"
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

app.use(cors(corsOptions));
// app.use(express.json());

// const users = require('./routes/userRoutes.js');
// app.use("/api-v1/",  users);
app.post('/api-v1/userLogin', async function(req, res){
    const {email} = req.body;
    
    try {
        const user = await db.User.findOne({where: {email}});
        console.log(user);
        if(user == null){ 
            return res.status(500).json({"error": "User Not found"});
        }else{
            return res.status(200).json(user);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

// app.post("/api-v1/addReview", async)

app.get('/api-v1/getAllUsers', async function (req, res) {
    try {
        const users = await db.User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
});

app.post('/api-v1/createUser', async function (req, res) {
    console.log(req.body);
    const { admin, firstName, lastName, email, rating, userReview } = req.body;
    try {
        const data = await db.User.findOne({where: {email}});
        if(data){
            return res.status(500).json({ message: "User already exist", code: 500 });
        }else{
            const users = await db.User.create({ admin, firstName, lastName, email, rating, userReview });
            return res.status(200).json(users);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

app.delete('/api-v1/deleteUser/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) return res.status(400).end();
    try {
        await db.User.destroy({
            where: { id }
        });
        return res.status(204).json({deleted: true, "success": "User deleted successfully" });
    } catch (error) {
        return res.status(500).json(error);
    }
});

app.put('/api-v1/updateUser/:id', async (req, res) => {
    console.log(req.body);
    const {id, firstName, lastName, email, admin, rating, userReview} = req.body;
    // const userid = parseInt(req.params.id);
    // if (Number.isNaN(id)) return res.status(400).end();
    const user =  await db.User.findOne({ where: { id: parseInt(id) } });
    try {
        const data = await user.update({
            firstName,
            lastName,
            email,
            admin,
            rating,
            userReview,
        });    
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
});

app.put('/api-v1/updateRating/:id', async (req, res) => { 
    // from FE->if admin and not my own id then only update rating.
    const id = req.params.id;
    const {rating} = req.body;
    // console.log(id, rating);
    try {
        const user = await db.User.findOne({
            where: {id}
        });
        await user.update({ rating });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
    
});

app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
});