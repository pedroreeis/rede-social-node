const Postagem = require('../models/Postagem')
import { Request, Response } from 'express';

class EditarController {
  async create(request: Request, response: Response) {
    Postagem.findAll({where: {
        id: request.params.id
    }}).then((mensagem) => {
        response.render('edit', {Mensagem: mensagem})
    })
}
}

export { EditarController };
