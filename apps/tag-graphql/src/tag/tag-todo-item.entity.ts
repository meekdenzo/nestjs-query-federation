import { ObjectId } from '@ptc-org/nestjs-query-graphql';
import { modelOptions, Prop, Ref } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

import { TagEntity } from './tag.entity'

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: 'tags',
    toObject: { virtuals: true },
  },
})export class TagTodoItemEntity implements Base {
  @Prop()
  tagId!: number

  @Prop()
  todoItemId!: number

  @Prop()
  createdAt!: Date

  @Prop()
  updatedAt!: Date

  // @ManyToOne(() => TagEntity, (tag) => tag.tagTodoItems)
  // @JoinColumn({ name: 'tagId' })

  @Prop({ ref: () => TagEntity, required: true })
  tag!: TagEntity
}