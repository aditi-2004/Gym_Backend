const YogaMeditation = require('../models/YogaMeditation');

exports.getYogaMeditationPlan = async (req, res) => {
  const { yogaType, meditationGoal, experienceLevel } = req.query;

  try {
    const basePlan = await YogaMeditation.findOne({ yogaType });
    if (!basePlan) return res.status(404).json({ message: 'Plan not found' });

    let plan = JSON.parse(JSON.stringify(basePlan.plan));

    // Adjust based on experience level
    if (experienceLevel === 'beginner') {
      plan = plan.map(day => ({
        ...day,
        exercises: day.exercises.map(ex => ({
          ...ex,
          duration: Math.max(5, ex.duration - 5), // Minimum 5 min
        })),
        meditation: day.meditation ? { ...day.meditation, duration: Math.max(5, day.meditation.duration - 5) } : null,
      }));
    } else if (experienceLevel === 'advanced') {
      plan = plan.map(day => ({
        ...day,
        exercises: day.exercises.map(ex => ({
          ...ex,
          duration: ex.duration + 5,
        })),
        meditation: day.meditation ? { ...day.meditation, duration: day.meditation.duration + 5 } : null,
      }));
    }

    // Adjust based on meditation goal
    if (meditationGoal === 'focus') {
      plan = plan.map(day => ({
        ...day,
        meditation: day.meditation ? { ...day.meditation, name: 'Focused Breathing' } : day.meditation,
      }));
    } else if (meditationGoal === 'stressRelief') {
      plan = plan.map(day => ({
        ...day,
        meditation: day.meditation ? { ...day.meditation, name: 'Mindful Relaxation' } : day.meditation,
      }));
    }

    res.json({ plan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createYogaMeditationPlan = async (req, res) => {
  const { yogaType, plan } = req.body;

  try {
    const updatedPlan = await YogaMeditation.findOneAndUpdate(
      { yogaType },
      { yogaType, plan },
      { new: true, upsert: true }
    );
    res.status(201).json(updatedPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};