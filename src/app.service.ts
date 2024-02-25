import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sayMyName(): string {
    return "Hy my name is deepak"
  }
}
