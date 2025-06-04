import { Schema, model } from "mongoose";

const tagSchema = new Schema({
  title: String,
}, { timestamps: true });

export const Tag = model("Tag", tagSchema);
