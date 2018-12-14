module.exports = {
  isAuthenticated: function(req, res, next) {
    if(req.isAuthenticated()){
      console.log('isAuthenticated')
      return next();
    }
    console.log('isAuthenticated2')
    res.redirect('/login');
  },

  hasAdminAccess: function(req, res, next){
    if(req.isAuthenticated()){
      if(req.customers.id === post.customer_id){
        return next;
      }
      return res.redirect('/')
    }
    return res.redirect('/login')
  }
}