import { Request, Response } from 'express';

class CadastrarController {
  async create(request: Request, response: Response) {
    return response.render('cadastrar')
  }
}

export { CadastrarController };
