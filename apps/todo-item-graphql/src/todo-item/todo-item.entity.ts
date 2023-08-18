// import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

// @Entity({ name: 'todo_item' })
// export class TodoItemEntity {
//   @PrimaryGeneratedColumn()
//   id!: number

//   @Column()
//   title!: string

//   @Column({ nullable: true })
//   description?: string

//   @Column()
//   completed!: boolean

//   @Column({ nullable: true })
//   assigneeId?: number

//   @CreateDateColumn()
//   created!: Date

//   @UpdateDateColumn()
//   updated!: Date
// }

import { ObjectId } from '@ptc-org/nestjs-query-graphql';
import { modelOptions, Prop, Ref } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: 'todo-items',
    toObject: { virtuals: true },
  },
})
export class TodoItemEntity implements Base {
  @ObjectId()
  _id!: Types.ObjectId;

  id!: string;

  @Prop({ required: true })
  title!: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  completed!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

  // @ObjectId()
  // @Prop({ ref: () => TagEntity })
  // tags!: Ref<TagEntity>[];

  @Prop({ default: 0 })
  priority!: number;

  @Prop()
  createdBy?: string;

  @Prop()
  updatedBy?: string;

  // // @ObjectId()
  // @Prop({
  //   ref: 'SubTaskEntity',
  //   localField: '_id',
  //   foreignField: 'todoItem',
  // })
  // subTasks?: Ref<SubTaskEntity>[];
}
