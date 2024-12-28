import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import menuRoutes from './routes/menuRoutes';

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/menu', menuRoutes);

export default app;
