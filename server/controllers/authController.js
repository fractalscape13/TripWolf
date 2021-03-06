const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res, next) => {
    const db = req.app.get("db");
    console.log('req.body', req.body)
    let { password, email } = req.body;
    console.log('password and email', password, email)
    const foundUser = await db.find_user(email).catch(err => console.log(err));
    if (!foundUser.length) {
      res.status(401).send("That user does not exist");
    } else {
      const matchPasswords = await bcrypt
        .compare(password, foundUser[0].password)
        .catch(err => console.log(err));
      if (matchPasswords) {
        req.session.user = {
          user_id: foundUser[0].user_id
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(401).send("Incorrect email and/or password combination");
      }
    }
  },
  registerUser: async (req, res, next) => {
    const db = req.app.get("db");
    const { password, email } = req.body;
    const foundUser = await db.find_user(email);
    if (foundUser.length) {
      res
        .status(409)
        .json(
          "That user exists already, please register with another email address."
        );
    } else {
      const saltRounds = 12;
      bcrypt.genSalt(saltRounds).then(salt => {
        console.log('data', password)
        console.log('salt', salt)
        bcrypt.hash(password, salt).then(hashedPassword => {
          db.register_user([hashedPassword, email]).then((response) => {
            res.status(200).send("login success");
          });
        });
      });
    }
  },
  logout: (req, res, next) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  userSession: (req, res, next) => {
    res.status(200).send(req.session.user);
  }
};