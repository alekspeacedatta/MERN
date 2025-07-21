import express from 'express';
import cors from 'cors'
import { connectDB } from './config/db';
import { UserModel } from './models/User';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());



app.get('/', async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
})
app.post('/', async (req, res) => {
    try {
        const { name, age} = req.body;
        const newUser = new UserModel({ name, age });

        await newUser.save();
        res.status(201).json({ message: 'user added successfuly', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'error: could not create user', details: error });
    }
})

app.delete('/:userID', async (req, res) => {
    try {
        const { userID } = req.params;
        const deletedUser = await UserModel.findByIdAndDelete(userID);

        if(!deletedUser){
            return res.status(404).json({ message: 'User Not Fount' })
        }

        res.status(200).json({ message: 'user Deleted Successfully', deletedUser: deletedUser })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Deleting user', error })
    }
})





app.get('/api/data', (req, res) => {
    res.json({ message: 'hello this is message from backend', id: 5 })
});


connectDB();
app.listen(3000, () => {
    console.log('server runs on http://localhost:3000');
})