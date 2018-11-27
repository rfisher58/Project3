var GitHubStrategy = require('passport-github').Strategy;

module.exports = function(passport){


    
// Uses applications Client ID and secret and then retrievs user data
passport.use(new GitHubStrategy({
  clientID: '1a1f0cecfeaf0ff089f0',
  clientSecret: 'b5ae0df8259da3144a74fc4d78e0f61a22a08533',
  callbackURL: "http://localhost:3001/auth/github/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

}



