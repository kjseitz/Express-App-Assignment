var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res, next) {
    res.render('dashboard',
    {
      userData: [
        {
          userId: 1,
          id: 7,
          title: "magnam facilis autem",
          body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
      ]

    }
    
    )});
  
  module.exports = router;