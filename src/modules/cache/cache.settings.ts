import { CacheModule as BaseCacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { CachesRepository } from './repositories/caches.repository';

export const imports = [
  BaseCacheModule.register({
    store: redisStore,
    url: process.env.REDIS_URL,
    no_ready_check: true,
    isGlobal: true,
  }),
];

export const providers = [CachesRepository];
