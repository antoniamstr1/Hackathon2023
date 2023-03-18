const mongoose = require("mongoose");

const documentSchema = mongoose.Schema(
  {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    device_id:{
        type: String,
        required: [true],
    },
    title: {
      type: String,
      required: [true],
    },
    SHA256Hash: {
      type: String,
      required: [true],
    },
    type: {
      type: String,
      required: [true],
    },
    creation_date: {
        type: Date,
        required: [true],
      },
    threat: {
        type: Boolean,
      },
    threat_severity: {
        type: Number,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Document", documentSchema);