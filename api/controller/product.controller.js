//API product controller
const Product = require('../../models/product.model')
// const Product = require('../../models/product.model')
const data = {

    products: [
        {
            // "id": "F3kAnldw3",
            name: "Cat 1",
            category: "One",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000,
            fakePrice: 1000
        },
        {
            // "id": "F3kAnldw4",
            name: "Cat 2",
            category: "One",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000,
            fakePrice: 1000
        },
        {
            // "id": "F3kAnldw5",
            name: "Cat 3",
            category: "One",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000,
            fakePrice: 1000
        },
        {
            // "id": "F3kAnldw6",
            name: "Cat 4",
            category: "One",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000,
            fakePrice: 1000
        },
        {
            // "id": "F3kAnldw7",
            name: "Cat 1",
            category: "Two",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000,
            fakePrice: 1000
        },
        {
            // "id": "F3kAnldw8",
            name: "Cat 2",
            category: "Two",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000,
            fakePrice: 1000
        },
        {
            // "id": "949ea5b7-bfeb-46ea-bbb1-59cf3ea34fc1",
            name: "Onions - Pearl",
            category: "Two",
            image: "https://loremflickr.com/320/240",
            description: "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta",
            price: 680
        },
        {
            // "id": "f3fcc7e1-b7c3-48da-afaa-ce32492a0599",
            name: "Tray - 16in Rnd Blk",
            category: "Two",
            image: "https://loremflickr.com/320/240",
            description: "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis",
            price: 315
        },
        {
            // "id": "0b470f6c-cb0f-4f9f-8947-c39ff2025d85",
            name: "Bulgar",
            category: "Two",
            image: "https://loremflickr.com/320/240",
            description: "nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem",
            price: 405
        },
        {
            // "id": "ef623b03-67c2-4e29-a813-27317afbbe6b",
            name: "Coffee Caramel Biscotti",
            image: "https://loremflickr.com/320/240",
            description: "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at",
            price: 771
        },
        {
            // "id": "e6db303b-29e8-4c68-9ce4-a7d2b0ab42ae",
            name: "Sole - Dover, Whole, Fresh",
            image: "https://loremflickr.com/320/240",
            description: "eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus",
            price: 722
        },
        {
            // "id": "b48a7dae-45f5-4536-9263-db95ea6369b9",
            name: "Burger Veggie",
            image: "https://loremflickr.com/320/240",
            description: "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla",
            price: 437
        },
        {
            // "id": "04491bb0-e280-424b-b6a9-d3335c5f141a",
            name: "Soup V8 Roasted Red Pepper",
            image: "https://loremflickr.com/320/240",
            description: "nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis",
            price: 619
        },
        {
            // "id": "2c88669f-b12c-44f9-a334-a73a66c534fb",
            name: "Salmon - Atlantic, No Skin",
            image: "https://loremflickr.com/320/240",
            description: "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam",
            price: 237
        },
        {
            // "id": "88cb56bf-e97a-470a-b4bf-a1d172a7ee82",
            name: "Puree - Strawberry",
            image: "https://loremflickr.com/320/240",
            description: "quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla",
            price: 806
        },
        {
            // "id": "a66324e5-b17d-459e-b7f3-c5d25381073c",
            name: "Truffle Shells - White Chocolate",
            image: "https://loremflickr.com/320/240",
            description: "mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea",
            price: 586
        },
        {
            // "id": "5cfa1c3f-e3f3-462c-98c7-d080c18667c9",
            name: "Pasta - Bauletti, Chicken White",
            image: "https://loremflickr.com/320/240",
            description: "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
            price: 213
        },
        {
            // "id": "19913196-8b8d-4968-bf6f-6933eb7ec385",
            name: "Clams - Bay",
            image: "https://loremflickr.com/320/240",
            description: "morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
            price: 397
        },
        {
            // "id": "b739bf1c-f2c0-4b72-8214-8ca600b06905",
            name: "Beef Cheek Fresh",
            image: "https://loremflickr.com/320/240",
            description: "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent",
            price: 782
        },
        {
            // "id": "ad01aef9-2908-4e69-9e4e-cab43379b2bf",
            name: "Wine - Marlbourough Sauv Blanc",
            image: "https://loremflickr.com/320/240",
            description: "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
            price: 319
        },
        {
            // "id": "47c5c7fe-9a24-4557-83d1-ba8b30c5c0f2",
            name: "Pork - Bacon, Double Smoked",
            image: "https://loremflickr.com/320/240",
            description: "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
            price: 735
        },
        {
            // "id": "d866a458-e421-4475-b7a2-d5c3350a3596",
            name: "The Pop Shoppe - Lime Rickey",
            image: "https://loremflickr.com/320/240",
            description: "ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
            price: 936
        },
        {
            // "id": "ba7b817a-af1b-4f15-a70b-34e1148e1257",
            name: "Assorted Desserts",
            image: "https://loremflickr.com/320/240",
            description: "etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit",
            price: 621
        },
        {
            // "id": "a9d37e57-82ea-4c76-919d-d9b5fe92123f",
            name: "Asparagus - Green, Fresh",
            image: "https://loremflickr.com/320/240",
            description: "ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
            price: 384
        },
        {
            // "id": "877bb3ad-2cd6-4a6e-86f2-16696dfd33af",
            name: "Jam - Apricot",
            image: "https://loremflickr.com/320/240",
            description: "tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
            price: 757
        },
        {
            // "id": "26b89223-c4bf-4288-a8d4-39a1552e1bea",
            name: "Corn Shoots",
            image: "https://loremflickr.com/320/240",
            description: "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede",
            price: 405
        },
        {
            // "id": "bc0630a6-c356-4974-84c5-9458af616e29",
            name: "Sour Puss Raspberry",
            image: "https://loremflickr.com/320/240",
            description: "viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin",
            price: 461
        },
        {
            // "id": "7675c3e8-6c38-4508-bd3a-89618a2308be",
            name: "Wine - Charddonnay Errazuriz",
            image: "https://loremflickr.com/320/240",
            description: "mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec",
            price: 932
        },
        {
            // "id": "c1dc2025-25df-45e5-8493-0b597230d3c8",
            name: "Cheese - St. Paulin",
            image: "https://loremflickr.com/320/240",
            description: "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris",
            price: 834
        },
        {
            // "id": "db9798b5-cb1e-4570-83ec-93771157d68d",
            name: "Pork - Tenderloin, Fresh",
            image: "https://loremflickr.com/320/240",
            description: "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est",
            price: 569
        },
        {
            // "id": "3e2b920e-fb8c-43a5-8f97-d5a1ea7c7899",
            name: "Longos - Lasagna Beef",
            image: "https://loremflickr.com/320/240",
            description: "in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis",
            price: 891
        },
        {
            // "id": "1d689c9e-3ca6-4edc-8f40-a71753b5f5e0",
            name: "Wine - Marlbourough Sauv Blanc",
            image: "https://loremflickr.com/320/240",
            description: "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut",
            price: 999
        },
        {
            // "id": "ff99fc14-7949-492e-83e6-596919226b26",
            name: "Rice - Long Grain",
            image: "https://loremflickr.com/320/240",
            description: "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id",
            price: 580
        },
        {
            // "id": "83a479fd-36c4-4fa1-837d-a25a4f5b3e9a",
            name: "Pork - Back, Long Cut, Boneless",
            image: "https://loremflickr.com/320/240",
            description: "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum",
            price: 416
        },
        {
            // "id": "7167f417-6766-4412-8d1e-87a8c54ca2bf",
            name: "Pork - Bacon, Double Smoked",
            image: "https://loremflickr.com/320/240",
            description: "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
            price: 992
        },
        {
            // "id": "0f3b74cf-c626-4096-b143-827d2b236523",
            name: "Butter Ripple - Phillips",
            image: "https://loremflickr.com/320/240",
            description: "orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus",
            price: 385
        }
    ]
}

//use async await
module.exports.index = async function (req, res, next) {
    //save a callback
    //put all code in a try/catch
    try {
        const pageSize = 4;
        const page = Number(req.query.pageNumber) || 1;
        const name = req.query.name || '';
        const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};

        const category = req.query.category || '';
        const categoryFilter = category ? { category } : {};

        console.log('categorya', req.query.category)

        const order = req.query.order || '';
        const sortOrder =
            order === 'lowest'
                ? { price: 1 }
                : order === 'highest'
                    ? { price: -1 }
                    : order === 'toprated'
                        ? { rating: -1 }
                        : { _id: -1 };

        const min = req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
        const max = req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
        const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};


        const rating = req.query.rating && Number(req.query.rating) !== 0 ? Number(req.query.rating) : 0;
        const ratingFilter = rating ? { rating: { $gte: rating } } : {};
        const count = await Product.count({

            ...nameFilter,
            ...categoryFilter,
            ...priceFilter,
            ...ratingFilter,
        });

        console.log(count)
        const products = await Product.find({

            ...nameFilter,
            ...categoryFilter,
            ...priceFilter,
            ...ratingFilter,
        }).sort(sortOrder)
            .skip(pageSize * (page - 1))
            .limit(pageSize);
        console.log(products)
        if (products)
            res.send({ products, page, pages: Math.ceil(count / pageSize) });
        else
            res.status(404).send({ message: 'Product Not Found' })

    } catch (error) {

        // next() - chuyen den middleware tiep theo
        //next(error) - chuyen den error handler
        //show loi tren browser
        //server khong bi treo
        return next(error)
        // console.error(error)
    }

}

//use async await
module.exports.index__ = async function (req, res, next) {
    //save a callback
    //put all code in a try/catch
    try {
        let products = await Product.find()

        //make an error
        // products.poo();
        //access to link http://localhost:3000/api/products 
        //spin infinite
        //c error


        // render JSON
        res.json(products);

        // res.render('products/index', {
        //     products: products
        // })

    } catch (error) {

        // next() - chuyen den middleware tiep theo
        //next(error) - chuyen den error handler
        //show loi tren browser
        //server khong bi treo
        next(error)
        // console.error(error)
    }

}

module.exports.seedProducts = async function (req, res, next) {
    try {
        //remove all 
        await Product.remove({});
        console.log('xxx');
        const creartedProducts = await Product.insertMany(data.products)
        res.send(creartedProducts);

    } catch (error) {

        next(error)

    }

}

//use async await
module.exports.getDetailTryCatch = async function (req, res, next) {
    //save a callback
    //put all code in a try/catch
    try {
        const product = await Product.findById(req.params.id)
        if (product)
            res.send(product);
        else
            res.status(404).send({ message: 'Product Not Found' })
    } catch (error) {

        // next() - chuyen den middleware tiep theo
        //next(error) - chuyen den error handler
        //show loi tren browser
        //server khong bi treo
        return next(error)
        // console.error(error)
    }

}


//remove try catch 
//used expressAsyncHandler at route
module.exports.getDetail = async function (req, res) {
    //save a callback
    //put all code in a try/catch

    const product = await Product.findById(req.params.id)
    if (product)
        res.send(product);
    else
        res.status(404).send({ message: 'Product Not Found' })



}

//return aray of string
module.exports.getCategories = async function (req, res) {
    // console.log('xxxxxxxx');
    const categories = await Product.find().distinct('category');

    if (categories)
        res.send(categories);
    else
        res.status(404).send({ message: 'Categories Not Found' })


}


//post review : id and {review}
module.exports.postReview = async function (req, res) {
    const productId = req.params.id;
    // console.log(productId);
    const product = await Product.findById(productId);
    // console.log(product);

    if (product) {
        if (product.reviews.find((x) => x.name === req.body.name)) {
            return res
                .status(400)
                .send({ message: 'Chỉ nhận xét 1 lần' });
        }
        const review = {
            name: req.body.name,
            rating: Number(req.body.rating),
            comment: req.body.comment,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating =
            product.reviews.reduce((a, c) => c.rating + a, 0) /
            product.reviews.length;
        const updatedProduct = await product.save();
        res.status(201).send({
            message: 'Đã thêm nhận xét',
            review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
        });
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }

}