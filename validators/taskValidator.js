const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string().min(3).required(),
  completed: Joi.boolean()
});

module.exports = taskSchema;
