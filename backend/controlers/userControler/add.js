const UserModel = require('../../model/userModel');

const addUser = (req, res) => {
  let user = {
    firstName: 'Petra',
    lastName: 'Vesic',
    email: 'petra@gmail.com',
    password: '123',
  };
  let newUser = new UserModel(user);
  newUser
    .save()
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
  res.send('Ok');
};

module.exports = addUser;
