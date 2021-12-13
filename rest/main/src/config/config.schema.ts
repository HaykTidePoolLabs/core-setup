import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(3030),
  NODE_ENV: Joi.string().valid('test', 'production', 'development').required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  SENTRY_DSN: Joi.string().required(),
  SENTRY_RELEASE: Joi.string().default('0.0.1'),
  SENTRY_ENV: Joi.string().valid('production', 'dev').required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().default(6379),
  REDIS_TTL: Joi.number().default(300),
});
