import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getServerMessage(): string {
    return 'Book api is up and running';
  }
}
