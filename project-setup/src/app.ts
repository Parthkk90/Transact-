import express from 'express';
import dotenv from 'dotenv';
import x402Routes from './services/x402';
import agglayerRoutes from './services/agglayer';
import oneinchRoutes from './services/oneinch';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/x402', x402Routes);
app.use('/api/agglayer', agglayerRoutes);
app.use('/api/oneinch', oneinchRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Project Setup API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});