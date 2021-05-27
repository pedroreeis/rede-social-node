const Postagem = require('../models/Postagem')
import { Request, Response } from 'express';

class ShowController {
  async create(request: Request, response: Response) {
    Postagem.findAll().then((mensagem) => {
        response.render('show', {Mensagem: mensagem})
    })
}
}

export { ShowController };
