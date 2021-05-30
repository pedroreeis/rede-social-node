import { Request, Response } from 'express';

class LoginController {
  async create(request: Request, response: Response) {
    return response.render('login')
  }
}

export { LoginController };
