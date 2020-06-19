import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  name: string = 'World';

  getHello(): string {
    return `Hello ${name}!`;
  }
}
