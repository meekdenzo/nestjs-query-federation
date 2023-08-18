import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';

import { TodoItemDTO } from './dto/todo-item.dto';
import { TodoItemInputDTO } from './dto/todo-item-input.dto';
import { TodoItemUpdateDTO } from './dto/todo-item-update.dto';
import { TodoItemEntity } from './todo-item.entity';
import { NestjsQueryTypegooseModule } from '@ptc-org/nestjs-query-typegoose';
import { TodoItemAssembler } from './todo-item.assembler';

// const guards = [AuthGuard];

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypegooseModule.forFeature([TodoItemEntity])],
      assemblers: [TodoItemAssembler],
      resolvers: [
        {
          DTOClass: TodoItemDTO,
          EntityClass: TodoItemEntity,
          CreateDTOClass: TodoItemInputDTO,
          UpdateDTOClass: TodoItemUpdateDTO,
          referenceBy: { key: 'id' },

          enableAggregate: true,
          // aggregate: { guards },
          // // create: { guards },
          // update: { guards },
          // delete: { guards },
        },
      ],
    }),
  ],
})
export class TodoItemModule {}
