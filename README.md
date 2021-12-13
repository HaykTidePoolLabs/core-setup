# core-setup

## Installation

```bash
$ pnpm i -r
```


## Build

```bash
$ pnpm build -r
```

## Cache (redis)

for rest app add ``CacheInterceptor`` decorator
```
@Controller('user')
@UseInterceptors(CacheInterceptor)
export class UserController {}
```

for  graphQl app use ``CACHE_MANAGER`` injection
```
@Injectable()
export class PostsService {
    constructor(
       @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    ) {
    }
    
    async getPosts(params: {}): Promise<Posts[]> {
       await this.cacheManager.set('aa', {ss: 33})
       const data = await this.cacheManager.get('aa');
    }
}
```

## Sentry log

for rest app add ``SentryInterceptor`` decorator
```
@Controller('user')
@UseInterceptors(new SentryInterceptor({}))
export class UserController {}
```

for graphQl app will handle automatically

for Cron app use ``SentryOverwatchAsync`` decorator in the method
```

@Injectable()
export class UserService {
  constructor(
  ) {}

  @Cron('*/3 * * * * *', {
  })
  @SentryOverwatchAsync()
  triggerNotifications() {
    console.log('aaa', new  Date())
  }
}

```


## Microservices

```
@Injectable()
export class PostsService {
    constructor(
        @Inject(TEST_REST_SERVICE) private readonly client: ClientProxy
    ) {
    }

    async getPost(id: string): Promise<Posts> {
        this.client.emit('get_user', '');
        return this.postsRepository.findOne({ id })
    }

    async getPosts(params: {}): Promise<Posts[]> {
        const res = await new Promise(resolve => {
            this.client.send('get_user', 5000).subscribe((value: any) => {
                resolve(value);
            })
        });
        return this.postsRepository.find(params)
    }
}

// OTHER SERVVER
export class UserController {
 
  @EventPattern('get_user')
  async handleMessage(data) {
    console.log('res', new Date())
    return {
      data
    }
  }
}
```