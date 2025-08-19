import { routes } from '@routes/routes';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';

dotenv.config();
export const app = express();


const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

app.use('/admin/queues', serverAdapter.getRouter());

app.use(
	cors({
		origin: '*',
	}),
);
app.use(express.json());
app.use(
	rateLimit({
		windowMs: 1 * 60 * 1000,
		max: 20,
		message: 'Muitas requisições. Tente novamente mais tarde.',
	}),
);

app.use(routes);
// @ts-expect-error
app.use(errorHandlerMiddleware);
