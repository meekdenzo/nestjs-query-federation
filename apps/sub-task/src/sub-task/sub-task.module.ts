import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';

import { SubTaskDTO } from './dto/sub-task.dto';
import { CreateSubTaskDTO } from './dto/subtask-input.dto';
import { SubTaskUpdateDTO } from './dto/subtask-update.dto';
import { TodoItemReferenceDTO } from './dto/todo-item-reference.dto';
import { SubTaskEntity } from './sub-task.entity';
import { TodoItemService } from './todo-item.service';
import { NestjsQueryTypegooseModule } from '@ptc-org/nestjs-query-typegoose';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypegooseModule.forFeature([SubTaskEntity])],
      services: [TodoItemService],
      resolvers: [
        {
          DTOClass: SubTaskDTO,
          EntityClass: SubTaskEntity,
          CreateDTOClass: CreateSubTaskDTO,
          UpdateDTOClass: SubTaskUpdateDTO,
          enableAggregate: true,
        },
        {
          type: 'federated',
          DTOClass: TodoItemReferenceDTO,
          Service: TodoItemService,
        },
      ],
    }),
  ],
})
export class SubTaskModule {}
