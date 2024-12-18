import {
    Prop,
    Schema,
    SchemaFactory,
} from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

@Schema()
export class Post {
    @Prop()
    id: string;

    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    state: string;

    @Prop()
    hash: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export type PostDocument = HydratedDocument<Post>;

export const PostSchema =
    SchemaFactory.createForClass(Post);

PostSchema.set('timestamps', false);
PostSchema.set('_id', false);
PostSchema.set('versionKey', false);
PostSchema.set('strict', 'throw');

export type PostDbModel = Model<Post>;
