const Joi = require('@hapi/joi')

const patient_validation = (data) => { 
    const schema = Joi.object({
    first_name: Joi.string().max(200).required(),
    last_name: Joi.string().max(200).required(),
    status: Joi.string().max(200).required(),
    clinic: Joi.string().max(200).required(),
    contact_email: Joi.string().max(200).required().email(),
    contact_number: Joi.string().max(200).required()
    });
    
    return schema.validate(data)
}

const clinic_validation = (data) => { 
    const schema = Joi.object({
    name: Joi.string().max(200).required(),
    address: Joi.string().max(200).required(),
    contact_email: Joi.string().max(200).required().email(),
    contact_number: Joi.string().max(200).required()
    });
    
    return schema.validate(data)
}

const worker_validation = (data) => { 
    const schema = Joi.object({
    first_name: Joi.string().max(200).required(),
    last_name: Joi.string().max(200).required(),
    job: Joi.string().max(200).required(),
    clinic: Joi.string().max(200).required(),
    contact_email: Joi.string().max(200).required().email(),
    contact_number: Joi.string().max(200).required()
    });
    
    return schema.validate(data)
}

module.exports.patient_validation = patient_validation
module.exports.clinic_validation = patient_validation
module.exports.worker_validation = patient_validation