// models/Event.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
    },
    venue: {
      type: String,
    },
    images: {
      type: [String],
      default: [],
    },
    registrationLink: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);
eventSchema.virtual("status").get(function () {
  return this.date >= new Date() ? "upcoming" : "past";
});

module.exports = mongoose.model("Event", eventSchema);
