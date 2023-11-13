var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function(req, res, next) {
    res.render('profile',
    {
      profileData:
      [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
        },
    ]});
  });
  
  module.exports = router;