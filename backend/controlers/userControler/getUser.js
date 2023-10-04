const UserModel = require('../../model/userModel');

const getUser = (req, res) => {
  UserModel.findOne({ firstName: req.params.firstName })
    .then(user => res.send(user))
    .catch(err => res.send(err));
};
module.exports = getUser;
