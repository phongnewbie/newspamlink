const mongoose = require("mongoose");

const UserAttemptSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    ipAddress: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "Unknown",
    },
    countryCode: {
      type: String,
      default: "Unknown",
    },
    region: {
      type: String,
      default: "Unknown",
    },
    city: {
      type: String,
      default: "Unknown",
    },
    timezone: {
      type: String,
      default: "Unknown",
    },
    currency: {
      type: String,
      default: "Unknown",
    },
    languages: {
      type: String,
      default: "Unknown",
    },
    callingCode: {
      type: String,
      default: "Unknown",
    },
    attemptCount: {
      type: Number,
      default: 0,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
    collection: "userattempts",
  }
);

// Indexes for faster queries
UserAttemptSchema.index({ userId: 1, country: 1 });
UserAttemptSchema.index({ timestamp: -1 });
UserAttemptSchema.index({ ipAddress: 1 });

module.exports = mongoose.model("UserAttempt", UserAttemptSchema);
