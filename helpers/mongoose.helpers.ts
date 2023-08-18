import { MongooseModuleOptions } from '@nestjs/mongoose';
export const mongooseConfig = (
  db: string,
  overrides?: Partial<MongooseModuleOptions>,
): MongooseModuleOptions => ({
  // uri: `mongodb://localhost/${db}`,
  uri: 'mongodb+srv://mall-dev:d4of0zpjZVxKjqEU@cluster0.vqbmmcs.mongodb.net/?retryWrites=true&w=majority',
  ...overrides,
});
