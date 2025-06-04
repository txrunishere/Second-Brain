import { model, Schema } from 'mongoose';

const contentSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100,
  },
  type: {
    type: String,
    required: true,
    enum: ['tweet', 'video', 'document', 'image'],
  },
  link: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag',
  }],
}, { timestamps: true });

export const Content = model('Content', contentSchema);
