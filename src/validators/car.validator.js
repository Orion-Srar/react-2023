import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Бренд має складатись з літер мін 1 макс 20',
        'string.required': 'Це поле обов\'язкове'
    }),
    price: Joi.number()
        .max(1000000)
        .min(0)
        .required()
        .messages({
        'number.max': 'максимальне значення 1000000',
        'number.min': 'мінімальне значення 0',
        'number.required': 'Це поле обов\'язкове'
    }
    ),
    year: Joi.number().max(new Date().getFullYear()).min(1990).required().messages({
        'number.max': 'максимальне значення 2023',
        'number.min': 'мінімальне значення 1990',
        'number.required': 'Це поле обов\'язкове'
    })
});

export {
    carValidator
}