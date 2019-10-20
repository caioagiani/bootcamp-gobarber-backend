import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ status: true, msg: 'Hellow word' }));

export default routes;
