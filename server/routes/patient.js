const router = require('express').Router()
const Patient = require('../models/Patient')
const { patient_validation } = require('../validation')

router.get('/', async (req, res)=>{
  try{
    const patient = await Patient.findAll()
    res.send(patient)
  }catch(err){
    console.log(err)
  }
})

router.post('/add', async (req, res)=>{

  const {error} = patient_validation(req.body);
  if(error) return res.status(400).send(error.details[0].message)

  let {first_name, last_name, status, clinic, contact_email, contact_number} = req.body
  try{
  Patient.create({
    first_name, last_name, status, clinic, contact_email, contact_number
  }).then(
    
    res.sendStatus(200))
  }catch(err){
    console.log(err)
  }
})

router.get('/get/:patientId', async (req, res)=>{
  try {
    const { patientId } = req.params;
    const post = await Patient.findOne({
      where: { id: patientId },
      // include: [
      //   {
      //     model: models.Comment,
      //     as: 'comments',
      //     include: [
      //      {
      //       model: models.User,
      //       as: 'author',
      //      }
      //     ]
      //   },
      //   {
      //     model: models.User,
      //     as: 'author'
      //   }
      // ]
    });
    if (post) {
      return res.status(200).json({ post });
    }
    return res.status(404).send('Post with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }

})

router.put('/edit/:patientId', async (req, res)=>{
  try {
    const { patientId } = req.params;
    const [ updated ] = await Patient.update(req.body, {
      where: { id: patientId }
    });
    if (updated) {
      const updatedPost = await Patient.findOne({ where: { id: patientId } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

router.delete('/delete/:patientId', async (req, res)=>{
  try {
    const { patientId } = req.params;
    const deleted = await Patient.destroy({
      where: { id: patientId }
    });
    if (deleted) {
      return res.status(204).send("Post deleted");
    }
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

module.exports = router