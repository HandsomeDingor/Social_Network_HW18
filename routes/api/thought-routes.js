const router = require('express').Router();
const {
  getAllThougth,
  getThougthById,
  createThougth,
  updateThougth,
  deleteThougth
} = require('../../controllers/thougth-controller');

// /api/thougth
router
  .route('/')
  .get(getAllThougth)
  .post(createThougth);

// /api/thougth/:id
router
  .route('/:id')
  .get(getThougthById)
  .put(updateThougth)
  .delete(deleteThougth);

module.exports = router;
