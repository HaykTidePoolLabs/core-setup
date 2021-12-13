import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('test', 'production', 'development').required(),
  SENTRY_DSN: Joi.string().required(),
  SENTRY_RELEASE: Joi.string().default('0.0.1'),
  SENTRY_ENV: Joi.string().valid('production', 'dev').required(),
  // REDIS_HOST: Joi.string().required(),
  // REDIS_PORT: Joi.number().default(6379),
  // REDIS_TTL: Joi.number().default(300),
});
