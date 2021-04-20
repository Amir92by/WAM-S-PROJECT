const User = require('../models/User.model')

const adminAuth =async(req, res, next)=> {
    try {
        // Get user information by Id
        const user = await User.findOne({
            _id: req.user.id
        })

        if (user.role === 0) {
            return res.status(403).send({
                error: 'Admin resources access denied'
            })
        }

        next()
    } catch (error) {
        
        res.status(500).send('Server Error')
    }
}
module.exports=adminAuth