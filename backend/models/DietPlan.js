// // models/DietPlan.js
// const mongoose = require("mongoose");

// const mealSchema = new mongoose.Schema({
//   meal1: String,
//   meal2: String,
//   meal3: String,
//   meal4: String,
//   meal5: String,
//   meal6: String
// });

// const dietPlanSchema = new mongoose.Schema({
//   gender: {
//     type: String,
//     required: true,
//     enum: ['male', 'female']
//   },
//   goal: {
//     type: String,
//     required: true,
//     enum: ['Build Muscle', 'Lose Weight', 'Maintain Weight']
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   dailyMeals: {
//     type: [mealSchema],
//     required: true
//   },
//   exercises: {
//     type: [String],
//     required: true
//   }
// });

// module.exports = mongoose.model("DietPlan", dietPlanSchema);

// models/DietPlan.js
const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  meal1: String,
  meal2: String,
  meal3: String,
  meal4: String,
  meal5: String,
  meal6: String
});

const dietPlanSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  goal: {
    type: String,
    required: true,
    enum: ['Build Muscle', 'Lose Weight', 'Maintain Weight']
  },
  description: {
    type: String,
    required: true
  },
  dailyMeals: {
    type: [mealSchema],
    required: true
  },
  exercises: {
    type: [String],
    required: true
  },
  weightCategory: {
    type: String,
    enum: ['Lower (40-60 kg)', 'Moderate 1 (60-80 kg)', 'Moderate 2 (80-100 kg)', 'Higher (100+ kg)'],
    default: null
  },
  heightCategory: {
    type: String,
    enum: ['Lower (140-160 cm)', 'Moderate 1 (160-175 cm)', 'Moderate 2 (175-190 cm)', 'Higher (190+ cm)'],
    default: null
  },
  age: {
    type: Number,
    min: 0,
    default: null
  }
});

module.exports = mongoose.model("DietPlan", dietPlanSchema);