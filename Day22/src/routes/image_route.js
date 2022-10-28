const express = require('express');
const createImage = require('../controllers/image_controller');
const editImage = require('../controllers/image_controller')


const router = express.Router();

router
  .route('/')
  .post(createImage)

 router
  .route('/:id')
  .put(editImage)


module.exports = router;