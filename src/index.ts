import DameJidlo from "./DameJidlo";
import express,{Express} from "express";

const mainApp = new DameJidlo();

const app:Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/load',async (req,res)=>{
    const data = await mainApp.getRestaurant(req.body.restaurant as string);
    res.json(data);
})

app.get('/food',(_req,res)=>{
    const data = mainApp.getAllFood();
    res.json(data);
});

app.get('/random',(_req,res)=>{
    const data = mainApp.getRandomFood();
    res.json(data);
});


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});

