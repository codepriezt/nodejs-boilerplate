import express, { Express, Request} from 'express';
import "reflect-metadata";
import Application from './utility/application';

// rest of the code remains same
const app:Express = express();
const PORT = 6700;

/**
 * bootstrap the application ..
 */
new Application(app).boot()

app.get('/', (req: Request, res) => { 
    res.send('Express + TypeScript Server')
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

