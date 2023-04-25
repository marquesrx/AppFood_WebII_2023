import express from 'express';

		const app = express();
		const port = 3000;

		app.use(express.json());
		app.use(router);
		//teclado de emotion tecla win+.
		app.listen(port, () => {
			console.log(`🚗Server is runing on http://localhost:${port}`);
		});
