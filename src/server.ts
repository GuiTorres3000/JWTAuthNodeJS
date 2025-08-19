import { envData } from '@config/env';
import { randomUUID } from 'crypto';
import { app } from './app';

const server = app.listen(envData.PORT, () => {
	const address = server.address();
	if (!address || typeof address === 'string') {
		return;
	}

	console.clear();
	console.log('-'.repeat(50));
	console.log('Servidor inicializado');
	console.log(`URL: http://${address.address}:${address.port}`);
	console.log(
		`BullBoard: http://${address.address}:${address.port}/admin/queues`,
	);
	console.log(`PID: ${process.pid}`);
	console.log(`Node: ${process.version}`);
	console.log(`Platform: ${process.platform}`);
	console.log(`Arch: ${process.arch}`);
	console.log(`UUID: ${randomUUID()}`);
	console.log('-'.repeat(50));
});
