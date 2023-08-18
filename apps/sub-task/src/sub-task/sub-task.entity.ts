import { ObjectId } from '@ptc-org/nestjs-query-graphql';
import { modelOptions, Prop, Ref } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';
import { TodoItemReferenceDTO } from './dto/todo-item-reference.dto';

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: 'sub-tasks',
    toObject: { virtuals: true },
  },
})
export class SubTaskEntity implements Base {
  @ObjectId()
  _id!: Types.ObjectId;

  id!: string;

  @Prop({ required: true })
  title!: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  completed!: boolean;

  @ObjectId()
  @Prop({ ref: () => TodoItemReferenceDTO, required: true })
  todoItem!: Ref<TodoItemReferenceDTO>;

  @Prop()
  createdAt!: Date;

  @Prop()
  updatedAt!: Date;

  @Prop()
  createdBy?: string;

  @Prop()
  updatedBy?: string;
}
