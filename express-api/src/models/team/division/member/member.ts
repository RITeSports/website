import Joi from '@hapi/joi';
import { Schema } from 'mongoose';

export interface Member {
  _id?: string;

  username: string;
  role: string;
  profileId?: string;

  imageUrl?: string;
}

export const Member = new Schema<Member>({
  username: { type: String, required: true },
  role: { type: String, required: true },
  profileId: { type: Schema.Types.ObjectId, ref: 'Profile' },

  imageUrl: String,
});

export const MemberJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  username: Joi.string().required(),
  role: Joi.string().required(),
  profileId: Joi.string().regex(/^[a-f\d]{24}$/i),

  imageUrl: Joi.string().uri(),
});