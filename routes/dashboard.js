var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res, next) {
    res.render('dashboard',
    {
      userData: [
        {
          userId: 1,
          title: "magnam facilis autem",
          body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
          userId: 2,
          title: "voluptatem eligendi optio",
          body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
        },
        {
          userId: 3,
          title: "a quo magni similique perferendis",
          body: "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
        },
        {
          userId: 4,
          title: "ullam ut quidem id aut vel consequuntur",
          body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
        },
        {
          userId: 5,
          title: "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
          body: "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
        },
        {
          userId: 6,
          title: "soluta aliquam aperiam consequatur illo quis voluptas",
          body: "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
        },
        {
          userId: 7,
          title: "voluptatem laborum magni",
          body: "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore"
        },
        {
          userId: 8,
          title: "et iusto veniam et illum aut fuga",
          body: "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis"
        },
        {
          userId: 9,
          title: "ad iusto omnis odit dolor voluptatibus",
          body: "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis"
        },
        {
          userId: 10,
          title: "aut amet sed",
          body: "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
        },
      ]

    }
    
    )});
  
  module.exports = router;