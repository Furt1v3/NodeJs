const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
// const User = require('../model/model');
// const bcrypt = require('bcrypt');

const router = express.Router();

router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {
      res.json({
          message: 'Signup successful',
          user: req.user
      });
  }
);


router.post(
  '/login',
  async (req, res, next) => {
      passport.authenticate(
          'login',
          async (err, user, info) => {
              try {
                  if (err || !user) {
                      const error = new Error('An error occurred.');

                      return next(error);
                  }

                  req.login(
                      user,
                      { session: false },
                      async (error) => {
                          if (error) return next(error);

                          const body = { _id: user._id, email: user.email };
                          const token = jwt.sign({ user: body }, 'TOP_SECRET');

                          return res.json({ token });
                      }
                  );
              } catch (error) {
                  return next(error);
              }
          }
      )(req, res, next);
  }
);
module.exports = router;


// router.post(
//   '/login',
//   async (req, res, next) => {
//     // const user = req.body;
//     // console.log(user);
//     // return req.login(
//     //   user,
//     //   { session: false },
//     //   async (error) => {
//     // if (error) return next(error);

//     // const body = { _id: user._id, email: user.email };
//     // const token = jwt.sign( body , 'TOP_SECRET', { expiresIn: '1d' });

//     // return res.json({ token });



//     User.findOne({ email: req.body.email }).then(async (user) => {
//       if (!user) {
//         return res.status(401).send({
//           success: false,
//           message: 'Could not find user'
//         })
//       }

//       if (!bcrypt.compareSync(req.body.password, user.password)) {
//         return res.status(401).send({
//           success: false,
//           messages: 'Incorrect password'
//         });
//       }

//       const payload = {
//         email: await bcrypt.hash(user.email, 12),
//         id: user._id
//       }

//       const token = jwt.sign(payload, 'TOP_SECRET', { expiresIn: '1d' });

//       return res.json({ token });
//     })

//     //   }
//     // );
//     // (req, res, next);
//   }
// );

// module.exports = router;

