import { Request, Response } from 'express';

class IndexController {
  async create(request: Request, response: Response) {
    return response.render('index')
  }
}

export { IndexController };
