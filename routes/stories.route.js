const express=require('express');
const controller= require('../controllers/stories.controller');
const router = express.Router();

router.get('/top', controller.MyTopStories);

router.get('/bestStories', controller.MyBestStories);
router.get('/newStories', controller.MyNewStories);

module.export = router;