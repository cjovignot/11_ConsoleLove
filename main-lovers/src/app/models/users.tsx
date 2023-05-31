import { Schema, model, models } from "mongoose";
import mongoose from "../utils/mongoose";

// await mongoose();

const userSchema = new Schema({
  name: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  adress: {
    type: String,
  },
  city: {
    type: String,
  },
  premium: {
    type: Boolean,
  },
  geoloc: {
    type: [String],
  },
  lukqhdsngvkfq: {
    type: Boolean,
  },

  languages: {
    type: [String],
  },
  sex: {
    type: String,
  },
  attraction: {
    type: [String],
  },
  profileStatus: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  swipe: {
    type: Number,
  },
  timerSwipe: {
    type: Date,
  },
  matched: {
    type: [String],
  },
  rejected: {
    type: [String],
  },
  chatIds: {
    type: [String],
  },
  Github_token: {
    type: {
      access_token: String,
      refresh_token: String,
    },
  },
});

const User = models.User || model("User", userSchema);

export default User;