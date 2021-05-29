import express, { Express, Request} from 'express';
import "reflect-metadata";
import Application from './utility/application';

// rest of the code remains same
const app:Express = express();
const PORT = 6700;

new Application(app).boot()

app.get('/', (req: Request, res) => {
    // req.Olumide
    console.log("I started here now");
    // new UserController()
    res.send('Express + TypeScript Server')
});


app.get('/shi', (req, res) => {
    res.send('Hello World!')
})


app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000}`)
})

