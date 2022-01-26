// Users controller
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;


const login = async (req, res) => {
    const { email, password } = req.body

    if(!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: "User does not exist" });

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) return res.status(400).json({ msg: "Invalid credentials"})

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
}
// const login = async (req, res) => {
//     console.log(req.body);

//     const { email, password } = req.body;
//     // // look for user via email
//     let foundUser = await db.User.find({ 'email': req.body.email });
//     console.log(foundUser);

//     //if we don't find anyone send a 404 and a message so front end knows what to do
//     if (!foundUser) {
//         console.log("no user");
//         return res.send({
//             message: "Login Error, please try again",
//         });
//     } else {
//         console.log("user");
//         //does the password match
//         bcrypt.compare(password, foundUser.password, function (err, result) {
//             if (err) {
//                 return res.send({
//                     message: "Login Error, please try again",
//                     data: err,
//                 });
//             } else {
//                 if (result) {
//                     const token = createJWT(foundUser);
//                     return res.send({
//                         message: "Success",
//                         data: { token },
//                     });
//                 } else {
//                     console.log("BAD pass");
//                     return res.send({
//                         message: "Login Error, please try again",
//                     });
//                 }
//             }
//         });
//     }
// };

module.exports = { login };