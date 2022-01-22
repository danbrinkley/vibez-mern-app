const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { User } = require("../models");
// const { default: reducers } = require("../client/src/reducers");
const bcrypt = require("bcryptjs");

const index = async (req, res) => {
    const users = await db.User.find({});
    console.log(users);
    res.json(users);
}

const create = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields'});
  }

  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: "User already exists"});

      const newUser = new User({
        name,
        email,
        password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                SECRET,
                { expiresIn: "24h" },
                (err, token) => {
                  if(error) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                }
              )
              })
            })
        })
      })

      })
    };
    

// const create = (req,res) => {
//     db.User.create(req.body, (err, savedUser) => {
//       if (err) return console.log("Error in User#create:",err);
  
//       const token = createJWT(savedUser);
//       return res.status(201).json({
//         message: "Success",
//         data: { token },
//       });
//     });
//   };
  
    

module.exports = { index, create };