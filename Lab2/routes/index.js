'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

        var varX = req.query.x;
    var varY = req.query.y;
    var finalResult = 0;

    console.log(req.query.method);
        switch (req.query.method) {
            case "add":
                finalResult = parseFloat(varY) + parseFloat(varX);
                res.render('index', { title: 'Addition', x: varX, y: varY, method: '+', result: finalResult });
                break;
            case "subtract":
                finalResult = parseFloat(varX) - parseFloat(varY);
                res.render('index', { title: 'Subtraction', x: varX, y: varY, method: '-', result: finalResult });
                break;
            case "multiply":
                finalResult = parseFloat(varX) * parseFloat(varY);
                res.render('index', { title: 'Multiplication', x: varX, y: varY, method: '*', result: finalResult });
                break;
            case "divide":
                finalResult = parseFloat(varX) / parseFloat(varY);
                res.render('index', { title: 'Division', x: varX, y: varY, method: '/', result: finalResult});
                break;
            default:
                res.render('index', { title: 'Error', x: 0, y: 0, method : 'error' });
                break;
        }

});

module.exports = router;
