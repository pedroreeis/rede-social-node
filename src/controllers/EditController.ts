const Postagem = require('../models/Postagem')
import { Request, Response } from 'express';

class EditController {
  async create(request: Request, response: Response) {
    Postagem.update({
        titulo: request.body.titulo,
        autor: request.body.autor,
        publicacao: request.body.publicacao
    }, {
        where: { id: id },
    }).then(() => {
        response.redirect('/')
    })
}
}

export { EditController };
