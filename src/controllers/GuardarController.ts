const Postagem = require('../models/Postagem')
import { Request, Response } from 'express';

class GuardarController {
  async create(request: Request, response: Response) {
    Postagem.create({
        titulo: request.body.titulo,
        autor: request.body.autor,
        publicacao: request.body.publicacao
    })

    response.redirect('/cadastrar')
  }
}

export { GuardarController };
