const db = require('../db')
const Product = require('../models/product.model')
const urlApi = 'http://localhost:3000'
//les 20 pagination
module.exports.indexLowdb = function (req, res) {
    //methoad 1 : slice array

    // /products?page = 2
    // items per page x = 3
    // Page 1 : 0 1 2
    // Page 2 : 0 1 2
    // Page 1 : 0 1 2
    // Page 1 : 0 1 2


    //total : 9
    //get items in page n(1), widh x(3) items per page 
    //begin = (n-1) * x ( n=1, x=3, begin = 0)  ( n=2, x=3, begin = 3) 
    //end = (n-1)*x + x = n*x (n=1, x=3, end =3) ( n=2, x=3, begin = 6) 
    //items = array.slice(begin, end)
    const products = db.get('products').value()
    let total = products.length
    let perPage = 8;
    let maxPage = Math.ceil(total / perPage)

    let page = parseInt(req.query.page) || 1;

    //if page > maxPage set page = maxPage
    page = (page > maxPage) ? maxPage : page;

    let begin = (page - 1) * perPage;
    let end = page * perPage;

    //get total items = array.length
    //maxPage = Math.ceil(total/perPage)


    res.render('products/index', {
        products: products.slice(begin, end)
    })
}

//les 20 pagination
module.exports.index2Lowdb = function (req, res) {
    //methoad 1 : slice array

    // /products?page = 2
    // items per page x = 3
    // Page 1 : 0 1 2
    // Page 2 : 0 1 2
    // Page 1 : 0 1 2
    // Page 1 : 0 1 2


    //total : 9
    //get items in page n(1), widh x(3) items per page 
    //begin = (n-1) * x ( n=1, x=3, begin = 0)  ( n=2, x=3, begin = 3) 
    //end = (n-1)*x + x = n*x (n=1, x=3, end =3) ( n=2, x=3, begin = 6) 
    //items = array.slice(begin, end)
    const products = db.get('products').value()
    let total = products.length
    let perPage = 8;
    let maxPage = Math.ceil(total / perPage)

    let page = parseInt(req.query.page) || 1;

    //if page > maxPage set page = maxPage
    page = (page > maxPage) ? maxPage : page;

    let begin = (page - 1) * perPage;
    let end = page * perPage;

    //get total items = array.length
    //maxPage = Math.ceil(total/perPage)

    //medthod 2 
    //drop first (page-1)*perPage items

    //then take perPage items
    res.render('products/index', {
        products: db.get('products').drop((page - 1) * perPage).take(perPage).value()
    })
}

module.exports.indexPromise = function (req, res) {
    //2way callback or return promise
    Product.find().then(function (products) {
        res.render('products/index', {
            products: products
        })
    })
}

//use async await
module.exports.indexOld = async function (req, res) {
    //save a callback
    let products = await Product.find()

    res.render('products/index', {
        products: products
    })
}

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = (page - 1) ? (page - 1) * limit : 0;

    return { limit, offset };
};

//use async await +paginate
module.exports.index = async function (req, res) {

    //get query params

    const page = req.query.page || 1
    const size = req.query.size || 8
    const delproductname = req.query.delproductname

    let messages = {}
    delproductname ? messages = { message: delproductname + ' đã xóa' } : null

    const { limit, offset } = getPagination(page, size);


    //save a callback
    let data = await Product.paginate({}, { offset, limit })


    // docs: (8) [model, model, model, model, model, model, model, model]
    // hasNextPage: true
    // hasPrevPage: true
    // limit: 8
    // nextPage: 3
    // offset: 8
    // page: 2
    // pagingCounter: 9
    // prevPage: 1
    // totalDocs: 36
    // totalPages: 5
    res.render('products/index', {
        products: data.docs,
        totalItems: data.totalDocs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
        data: data,
        messages


    })
}

module.exports.create = (req, res) => {
    // console.log(req.csrfToken())
    res.render('products/create', {
        csrfToken: req.csrfToken()
    })
}

module.exports.postCreate = async (req, res) => {
    //save to array products
    // console.log(req.body);
    // console.log(res.locals);
    //add id to req.body ( product )
    // req.body.id = shortid.generate();
    //image
    // file
    // destination: "./public/uploads/"
    // encoding: "7bit"
    // fieldname: "image"
    // filename: "image-1606987495576"
    // mimetype: "image/png"
    // originalname: "img1.png"
    // path: "public\uploads\image-1606987495576"
    // size: 27350
    if (req.file) {
        req.body.image = urlApi + '/uploads/products/' + req.file.filename
    }

    //create model 
    // name: String,
    // email: String,
    // password: String,
    // phone: String,
    // image: String,
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
        price: parseInt(req.body.price || 0),
        fakePrice: parseInt(req.body.fakePrice || 0),
        rating: 0,
        numReviews: 0,
        reviews: []


    });

    const creartedProducts = await product.save();



    res.redirect('/products')
}

//mong
module.exports.delete = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {

        const deleteProduct = await product.remove();
        console.log(deleteProduct);

        deleteProduct.name && res.redirect('/products?delproductname=' + deleteProduct.name)

        // let products = await Product.find()
        // res.render('products/index', {
        //     products: products,
        //     messages: [
        //         'Deleted ' + deleteProduct.name
        //     ]
        // })

    } else {
        // let products = await Product.find()
        // res.render('products/index', {
        //     products: products,
        //     messages: [
        //         'Product Not Found '
        //     ]
        // })
        res.redirect('/products')
    }
}


module.exports.edit = async (req, res, next) => {

    let _id = req.params.id
    // console.log(typeof (id)) //string -> parseInt -> int
    try {
        const product = await Product.findOne({ _id: req.params.id });

        if (!product) {
            res.redirect('/products')
            return
        }
        res.render('products/edit', {
            values: product
        })

    } catch (error) {
        next(error)
    }
}

module.exports.postEdit = async (req, res, next) => {

    console.log('params id- ', req.params.id)
    console.log('body-', req.body)
    console.log('file-', req.file)

    const product = await Product.findById(req.params.id);
    if (product) {

        //check if exist(new value) or empty(old value)
        product.name = req.body.name || product.name;
        product.category = req.body.category || product.category;
        product.description = req.body.description || product.description;
        product.image = req.file && (urlApi + '/uploads/products/' + req.file.filename) || product.image;

        product.price = parseInt(req.body.price || 0) || product.price;
        product.fakePrice = parseInt(req.body.fakePrice || 0) || product.fakePrice;





        const updatedProduct = await product.save();
        if (updatedProduct) {
            updatedProduct.password = ''
            res.render('products/edit', {
                values: updatedProduct,
                messages: [
                    'Product Updated'
                ]
            })
        }

        //res.send({ message: 'Product Updated', product: updatedProduct });
    } else {

        res.render('products/edit', {
            product: {},
            errors: ['Product Not Found']
        })
    }







}