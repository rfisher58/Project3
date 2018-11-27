const db = require('../models');
const passport = require("passport");

module.exports = (app) => {

app.get('/auth/github', passport.authenticate("github"), function(req,res){
  console.log("lol");
  res.json("hello world")
});

app.get('/auth/github/callback', 
passport.authenticate('github', { failureRedirect: '/login'}),
  function(req, res) {
// Successful authentication, redirect home.
console.log("lol lol lol ")
   res.redirect('/');
  });

  app.get('/api/users/me',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  });


  // app.get('/auth/github/callback', (req, res, next)=>{
  //   const {query} = req;

  //   const {code} = code;

  //   if (!code) {
  //     return res.send({
  //       success: false,
  //       message: 'error: no code'
  //     });
  //   }

  //   console.log('code', code);
  // })


}