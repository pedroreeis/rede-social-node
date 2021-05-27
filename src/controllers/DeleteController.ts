const Postagem = require('../models/Postagem')
import { Request, Response } from 'express';

class DeleteController {
  async create(request: Request, response: Response) {
    Postagem.destroy({where: {
        id: request.params.id
    }})

    response.redirect('/show')
}
}

export { DeleteController };
