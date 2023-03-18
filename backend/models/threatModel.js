const mongoose = require("mongoose");

const threatSchema = mongoose.Schema(
  {

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

    threat: {
        type: Boolean,
      },
    threat_severity: {
        type: String,
      },
      country: {
        type: String,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Threats", threatSchema);