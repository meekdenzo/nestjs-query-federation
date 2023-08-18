import { ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { TodoItemModule } from './todo-item/todo-item.module';
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
    TodoItemModule,
  ],
})
export class AppModule {}
