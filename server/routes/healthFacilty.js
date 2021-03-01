var router = require('express').Router()
var HealthFacility = require('../models/HealthFacility')

router.get('/', async (req, res)=>{
    try{
    const facilities = await HealthFacility.findAll()
    res.send(facilities)
    }catch(err){
        console.log(err)
    }
})

router.post('/add',async (req, res)=>{
    let {name, address, contact_email, contact_number} = req.body
    try{
    const post = await HealthFacility.create({
      name, address, contact_email, contact_number})
      res.send(post)
    }catch(err){
      console.log(err)
    }
  })

  router.get('/get/:facility_id', async (req, res)=>{
    try {
      const { facility_id } = req.params;
      const post = await HealthFacility.findOne({
        where: { id: facility_id },
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
  
  router.put('/edit/:facility_id', async (req, res)=>{
    try {
      const { facility_id } = req.params;
      const [ updated ] = await HealthFacility.update(req.body, {
        where: { id: facility_id }
      });
      if (updated) {
        const updatedPost = await facility.findOne({ where: { id: facility_id } });
        console.log(updatedPost)
        return res.status(200).json({ post: updatedPost })
      }
      throw new Error('Post not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  })
  
  router.delete('/delete/:facility_id', async (req, res)=>{
    try {
      const { facility_id } = req.params;
      const deleted = await HealthFacility.destroy({
        where: { id: facility_id }
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