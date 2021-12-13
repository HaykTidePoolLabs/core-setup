import {Injectable, UseInterceptors} from '@nestjs/common';
import {Cron} from "@nestjs/schedule";
import {SentryOverwatchAsync} from "../../common/decorators/sentry-overwatch.decorator";

@Injectable()
export class UserService {
  constructor(
      // @Inject(TEST_GRAPHQL_SERVICE) private readonly client: ClientProxy
  ) {}


  @Cron('*/3 * * * * *', {
  })
  @SentryOverwatchAsync()
  triggerNotifications() {
    // throw new Error('ooo')
    console.log('aaa', new  Date())
  }
}
