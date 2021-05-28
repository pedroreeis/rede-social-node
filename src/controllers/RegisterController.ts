import { Request, Response } from 'express';

class RegisterController {
  async create(request: Request, response: Response) {
    return response.render('register')
  }
}

export { RegisterController };
