const db = require("../db/db.js");

const getUsers = async (req, res) => {
  db.query("SELECT * FROM user", (error, result) => {
    if (error) throw error;
    res.send(result);
  });
};

const getLinks = async (req, res) => {
  db.query("SELECT * FROM link", (error, result) => {
    if (error) throw error;
    res.send(result);
  });
};

const getProfile = async (req, res) => {
  db.query(
    `SELECT * FROM user where user_id = "${req.params.id}"`,
    (error, result) => {
      if (error) throw error;
      res.send(result);
    }
  );
};

const postNewUser = async (req, res) => {
  db.query(
    `INSERT INTO user (username, password, email, f_name, l_name, cover_img, profile_img) VALUES ("${req.body.username}","${req.body.password}","${req.body.email}","${req.body.f_name}","${req.body.l_name}","${req.body.cover_img}","${req.body.profile_img}")`,
    (error, result) => {
      if (error) throw error;
      res.send(result);
    }
  );
  // res.send(req.body);
};

module.exports = {
  getUsers,
  getLinks,
  getProfile,
  postNewUser,
};
