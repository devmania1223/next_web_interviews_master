import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

export default app;
