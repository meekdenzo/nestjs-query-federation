import { ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { SubTaskModule } from './sub-task/sub-task.module';
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
    SubTaskModule,
  ],
})
export class AppModule {}
