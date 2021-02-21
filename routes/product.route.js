const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const express = require('express');

const router = express.Router();
const validate = require('../validate/product.validate')
const authMiddleware = require('../middlewares/auth.middleware')
const productController = require('../controller/product.controller')

const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/products')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
// file
// destination: "./public/uploads/"
// encoding: "7bit"
// fieldname: "avatar"
// filename: "avatar-1606987495576"
// mimetype: "image/png"
// originalname: "img1.png"
// path: "public\uploads\avatar-1606987495576"
// size: 27350


var upload = multer({ storage: storage })
// var upload = multer({ dest: './public/uploads/' })


router.get('/', productController.index)

//pagination method 2
// router.get('/method2', productController.index2)

router.get('/create', csrfProtection, productController.create)

//vai, phai de middleware csrf sau file upload
router.post('/create', upload.single('image'), validate.validate, csrfProtection, productController.postCreate)

router.get('/delete/:id', productController.delete)

router.get('/edit/:id', productController.edit)
router.post('/edit/:id', upload.single('image'), validate.validate, productController.postEdit)

module.exports = router;