// import { Directive, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
// import { FilterableField, Reference } from '@ptc-org/nestjs-query-graphql'

// import { UserReferenceDTO } from './user-reference.dto'

// @ObjectType('TodoItem')
// @Directive('@key(fields: "id")')
// @Reference('assignee', () => UserReferenceDTO, { id: 'assigneeId' }, { nullable: true })
// export class TodoItemDTO {
//   @FilterableField(() => ID)
//   id!: number

//   @FilterableField()
//   title!: string

//   @FilterableField({ nullable: true })
//   description?: string

//   @FilterableField()
//   completed!: boolean

//   @FilterableField({ nullable: true })
//   assigneeId?: string

//   @FilterableField(() => GraphQLISODateTime)
//   created!: Date

//   @FilterableField(() => GraphQLISODateTime)
//   updated!: Date
// }

import {
  Directive,
  Field,
  GraphQLISODateTime,
  ID,
  ObjectType,
} from '@nestjs/graphql';
import {
  CursorConnection,
  FilterableField,
  KeySet,
  ObjectId,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import mongoose from 'mongoose';

// import { AuthGuard } from '../../auth.guard';
// import { SubTaskDTO } from '../../sub-task/dto/sub-task.dto';
// import { TagDTO } from '../../tag/dto/tag.dto';

@ObjectType('TodoItem')
@Directive('@key(fields: "id")')
@QueryOptions({ enableTotalCount: true })
export class TodoItemDTO {
  @ObjectId()
  _id: mongoose.Types.ObjectId;

  @FilterableField(() => ID)
  id!: string;

  @FilterableField()
  title!: string;

  @FilterableField({ nullable: true })
  description?: string;

  @FilterableField()
  completed!: boolean;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;

  @Field()
  age!: number;

  @FilterableField()
  priority!: number;

  @FilterableField({ nullable: true })
  createdBy?: string;

  @FilterableField({ nullable: true })
  updatedBy?: string;
}
