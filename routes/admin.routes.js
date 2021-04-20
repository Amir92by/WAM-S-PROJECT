const express=require('express');
const router=express.Router();

const { deletePost } = require('../controllers/post.controlleurs');
const { deleteUser } = require('../controllers/user.controlleurs');
// const adminAuth = require('../Middleware/adminAuth')



//delete user
router.delete('/users/:id',deleteUser)

/************************************ */
// delete Post
router.delete('/posts/:id',deletePost)




module.exports = router;