import {Injectable} from '@nestjs/common';
import {Cron} from "@nestjs/schedule";


@Injectable()
export class UserService {
  constructor(
      // @Inject(TEST_GRAPHQL_SERVICE) private readonly client: ClientProxy
  ) {}


  @Cron('*/3 * * * * *', {
  })
  triggerNotifications() {
    console.log('aaa', new  Date())
  }
}
