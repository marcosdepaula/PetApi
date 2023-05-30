import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  private readonly helloWorld = 'Olá Marcos';

  @Get()
  getHelloWorld(): string {
    return this.helloWorld;
  }
}
