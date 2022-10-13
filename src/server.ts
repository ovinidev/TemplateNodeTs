import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ code: 'Sucesso' });
});

const port = 8080;

app.listen(port, () => {
  console.log(`Rondando server na porta ${port}`);
});
