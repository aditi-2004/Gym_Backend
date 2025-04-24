const mongoose = require('mongoose');

const YogaMeditationSchema = new mongoose.Schema({
  yogaType: {
    type: String,
    required: true,
    enum: ['all', 'standing', 'balancing', 'backbend', 'seated', 'resting'],
  },
  plan: [
    {
      day: Number,
      title: String,
      exercises: [
        {
          name: String,
          duration: Number, // in minutes
          pose: String, // Optional pose name
        },
      ],
      meditation: {
        name: String,
        duration: Number, // in minutes
      },
    },
  ],
});

module.exports = mongoose.model('YogaMeditation', YogaMeditationSchema);