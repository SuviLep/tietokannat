//kopio user.js:sstä tehtävien 15 osalta

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET- METODI
router.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

// GET-METODI YHDELLÄ PARAMETRILLA
router.get('/example/:nimi',
    function(request,response){
        response.send('Hello '+request.params.nimi);
        console.log(+request.params.nimi);
    }
);


// GET-METODI KAHDELLA PARAMETRILLA
router.get('/example/:enimi/:snimi',
    function(request,response){
        response.send('Hello '+request.params.enimi+" "+request.params.snimi);
        console.log(+request.params.enimi.snimi);
    }
);

//POST- METODI
router.post('/',
    function(request,response){
        response.send(request.body.name);
        console.log(request.body.name);
    }
);

module.exports = router;