import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';

import { TagDTO } from './dto/tag.dto';
import { TagInputDTO } from './dto/tag-input.dto';
import { TagTodoItemDTO } from './dto/tag-todo-item.dto';
import { TagTodoItemInputDTO } from './dto/tag-todo-item.input';
import { TodoItemReferenceDTO } from './dto/todo-item-reference.dto';
import { TagEntity } from './tag.entity';
import { TagTodoItemEntity } from './tag-todo-item.entity';
import { TodoItemService } from './todo-item.service';
import { NestjsQueryTypegooseModule } from '@ptc-org/nestjs-query-typegoose';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // imports: [NestjsQueryTypeOrmModule.forFeature([TagEntity, TagTodoItemEntity])],
      imports: [
        NestjsQueryTypegooseModule.forFeature([TagEntity, TagTodoItemEntity]),
      ],
      services: [TodoItemService],
      resolvers: [
        {
          DTOClass: TagDTO,
          EntityClass: TagEntity,
          CreateDTOClass: TagInputDTO,
          UpdateDTOClass: TagInputDTO,
        },
        {
          DTOClass: TagTodoItemDTO,
          EntityClass: TagTodoItemEntity,
          CreateDTOClass: TagTodoItemInputDTO,
          UpdateDTOClass: TagTodoItemInputDTO,
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
export class TagModule {}
