import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ code: 'tudo certo jovem' });
});

app.listen(8080, () => {
  console.log('Rondando server na porta 8080');
});
