// // controllers/dietPlanController.js
// const DietPlan = require('../models/DietPlan');

// exports.createDietPlan = async (req, res) => {
//   try {
//     const { gender, goal, dailyMeals, exercises, description } = req.body;
    
//     const newDietPlan = new DietPlan({
//       gender,
//       goal,
//       description,
//       dailyMeals,
//       exercises
//     });

//     const savedPlan = await newDietPlan.save();
//     res.status(201).json(savedPlan);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.getDietPlans = async (req, res) => {
//   try {
//     const { gender, goal } = req.query;
//     const query = {};
//     if (gender) query.gender = gender;
//     if (goal) query.goal = goal;
    
//     const plans = await DietPlan.find(query);
//     res.status(200).json(plans);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


// controllers/dietPlanController.js
const DietPlan = require('../models/DietPlan');

exports.createDietPlan = async (req, res) => {
  try {
    const { gender, goal, dailyMeals, exercises, description, weightCategory, heightCategory, age } = req.body;
    
    const newDietPlan = new DietPlan({
      gender,
      goal,
      description,
      dailyMeals,
      exercises,
      weightCategory,
      heightCategory,
      age
    });

    const savedPlan = await newDietPlan.save();
    res.status(201).json(savedPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDietPlans = async (req, res) => {
  try {
    const { gender, goal, weightCategory, heightCategory, age } = req.query;
    const query = {};
    if (gender) query.gender = gender;
    if (goal) query.goal = goal;
    if (weightCategory) query.weightCategory = weightCategory;
    if (heightCategory) query.heightCategory = heightCategory;
    if (age) query.age = age;
    
    const plans = await DietPlan.find(query);
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDietPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { gender, goal, dailyMeals, exercises, description, weightCategory, heightCategory, age } = req.body;

    const updatedPlan = await DietPlan.findByIdAndUpdate(
      id,
      { gender, goal, description, dailyMeals, exercises, weightCategory, heightCategory, age },
      { new: true, runValidators: true }
    );

    if (!updatedPlan) {
      return res.status(404).json({ error: 'Diet plan not found' });
    }

    res.status(200).json(updatedPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};