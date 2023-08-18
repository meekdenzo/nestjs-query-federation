import { ApolloFederationDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { typeormOrmConfig } from '../../../helpers'
import { TodoItemModule } from './todo-item/todo-item.module'

const { uri, ...options } = mongooseConfig('typegoose', {});

@Module({
  imports: [
    TypegooseModule.forRoot(uri, options),
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      federationVersion: 2,
      skipCheck: true,
      autoSchemaFile: 'examples/todo-item-graphql/schema.gql'
    }),
    TodoItemModule
  ]
})
export class AppModule {}