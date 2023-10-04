const UserModel = require('../../model/userModel');
const bcrypt = require('bcrypt');
const { sendActivateLink } = require('../../services/sendmail');
const saltRound = 10;

const register = async (req, res) => {
  const { email, password } = req.body;
  const reqBody = req.body;

  const isExist = await UserModel.count({ email });

  if (isExist > 0) {
    res.status(201).send({ msg: 'User with this email is already registered' });
  } else {
    let passwordHash = await bcrypt.hash(password, saltRound);
    let newUser = new UserModel({ ...reqBody, password: passwordHash });
    newUser
      .save()
      .then(user => {
        let verifyLink = 'http://localhost:3000/activate/' + user._id;
        sendActivateLink(email, verifyLink)
          .then(data => {
            res.send({ msg: 'Registration succesfull' });
          })
          .catch(err => {
            res.status(201).send({ msg: 'Somthing went wrong with the link' });
          });
      })
      .catch(err => {
        res.status(415).send(err);
      });
  }
};

module.exports = register;
