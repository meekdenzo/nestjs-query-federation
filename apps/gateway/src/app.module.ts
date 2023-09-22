import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { IntrospectAndCompose } from '@apollo/gateway';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'todo-items', url: 'http://localhost:3001/graphql' },
            { name: 'sub-tasks', url: 'http://localhost:3002/graphql' },
            { name: 'tags', url: 'http://localhost:3003/graphql' },
            { name: 'user', url: 'http://localhost:3004/graphql' },
          ],
        }),
      },
    }),
  ],
})
export class AppModule {}
