import { ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { UserModule } from './user/user.module';
import { mongooseConfig } from 'helpers';
import { TypegooseModule } from 'nestjs-typegoose';

const { uri, ...options } = mongooseConfig('typegoose', {});

@Module({
  imports: [
    TypegooseModule.forRoot(uri, options),
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      federationVersion: 2,
      skipCheck: true,
      autoSchemaFile: 'examples/todo-item-graphql/schema.gql',
    }),
    UserModule,
  ],
})
export class AppModule {}
