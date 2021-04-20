const authRole= async(role)=>{
  try {
    return (req, res, next) => {
      if (req.user.role !== role) {
        res.status(401)
        return res.send('Not allowed')
      }
      next()
    }
    
  } catch (error) {
    console.log(error)
    
  }
    
  }

  module.exports=authRole