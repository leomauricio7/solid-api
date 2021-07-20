import express from 'express';
import { Router } from './routes';

const app = express();

app.use(express.json());
app.use(Router)

// named exports
// facilita no auto import do vscode
export { app };