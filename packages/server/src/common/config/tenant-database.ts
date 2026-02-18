import * as path from 'path';
import { registerAs } from '@nestjs/config';

export default registerAs('tenantDatabase', () => ({
  client: process.env.DB_CLIENT || 'mysql',
  host: process.env.TENANT_DB_HOST || process.env.DB_HOST,
  port: parseInt(process.env.TENANT_DB_PORT || process.env.DB_PORT || '3306', 10),
  user: process.env.TENANT_DB_USER || process.env.DB_USER,
  password: process.env.TENANT_DB_PASSWORD || process.env.DB_PASSWORD,
  ssl: process.env.TENANT_DB_SSL || process.env.DB_SSL || '',
  dbNamePrefix: process.env.TENANT_DB_NAME_PERFIX || 'bigcapital_tenant_',
  migrationsDir: path.join(__dirname, '../../database/tenant/migrations'),
  seedsDir: path.join(__dirname, '../../database/tenant/seeds/core'),
}));
