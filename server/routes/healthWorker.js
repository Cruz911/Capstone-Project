var router = require('express').Router()
var HealthWorker = require('../models/HealthWorker')



  router.get('/', async (req, res)=>{
    try{
    const facilities = await HealthWorker.findAll()
    res.send(facilities)
    }catch(err){
        console.log(err)
    }
})

router.post('/add',async (req, res)=>{
  let {first_name, last_name, job, clinic, contact_email, contact_number} = req.body
  try{
    const post = await HealthWorker.create({
      first_name, last_name, job, clinic, contact_email, contact_number
    })
      res.send(post)
    }catch(err){
      console.log(err)
    }
  })

  router.get('/get/:worker_id', async (req, res)=>{
    try {
      const { worker_id } = req.params;
      const post = await HealthWorker.findOne({
        where: { id: worker_id },
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
  
  router.put('/edit/:worker_id', async (req, res)=>{
    try {
      const { worker_id } = req.params;
      const [ updated ] = await HealthWorker.update(req.body, {
        where: { id: worker_id }
      });
      if (updated) {
        const updatedPost = await worker.findOne({ where: { id: worker_id } });
        console.log(updatedPost)
        return res.status(200).json({ post: updatedPost })
      }
      throw new Error('Post not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  })
  
  router.delete('/delete/:worker_id', async (req, res)=>{
    try {
      const { worker_id } = req.params;
      const deleted = await HealthWorker.destroy({
        where: { id: worker_id }
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