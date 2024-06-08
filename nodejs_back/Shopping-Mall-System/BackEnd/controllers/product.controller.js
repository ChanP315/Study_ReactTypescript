import Product from './model/Product.js'

const PAGE_SIZE = 5;
const productController = {}

productController.createProduct = async(req, res) => {
    try
    {
        const {sku, name, size, image, category, description, price, stock, status} = req.body;
        const product = new Product({sku, name, size, image, category, description, price, stock, status});

        await product.save();

        console.log("createProduct Success");
        res.status(200).json({status: "createProduct Success", product});
    }catch(err)
    {
        console.log("createProduct Fail");
        res.status(400).json({status: "createProduct Fail", error: err.message});
    }
}

productController.getProductList = async(req, res) => {
    try
    {
        const {page, name} = req.query;
        //const products = await Product.find({name: {$regex: name, $options:"i"}});
        const condition = name  ? {name: {$regex: name, $options: "i"}, isDeleted: {$ne: true}} : {isDeleted: {$ne: true}};
        let query = Product.find(condition);
        let response = {status: "success"};

        if(page)
        {
            query.skip((page -1) * PAGE_SIZE).limit(5);
            /* 최종 페이지 수 구하기 */
            // 디비의 데이터가 몇개인지
            const totalItemNum = await Product.find(condition).count();
            // 데이터의 총 개수 / PAGE_SIZE
            const totalPageNum = Math.ceil(totalItemNum/ PAGE_SIZE);
            response.totalPageNum = totalPageNum;
        }
        
        const productList = await query.exec();

        response.productList = productList;
        console.log("getProductList Success");
        res.status(200).json(response);
        // res.status(200).json({status: "getProducts Success", productList});
    }catch(err)
    {
        console.log("getProductList Fail");
        res.status(400).json({status: "getProductList Fail", error: err.message});
    }
}

productController.getProductDetail = async(req, res) => {
    try
    {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if(!product)
            throw new Error("item doesn't exist");

        console.log("getProductDetail Success");
        res.status(200).json({status: "getProductDetail Success", product}); 
    }catch(err)
    {
        console.log("getProductDetail Fail");
        res.status(400).json({status: "getProductDetail Fail", error: err.message}); 
    }
}

productController.updateProduct = async(req, res) => {
    try
    {
        const productId = req.params.id;
        const {sku, name, size, image, price, description, category, stock, status} = req.body;
        const product = await Product.findByIdAndUpdate({_id: productId}, {sku, name, size, image, price, description, category, stock, status}, {new: true});

        if(!product)
            throw new Error("item doesn't exist");

        console.log("updateProduct Success");
        res.status(200).json({status: "updateProduct Success", product}); 
    }catch(err)
    {
        console.log("updateProduct Fail");
        res.status(400).json({status: "updateProduct Fail", error: err.message}); 
    }
}

productController.deleteProduct = async(req, res) => {
    try
    {
        const productId = req.params.id;
        const product = await Product.findByIdAndUpdate({_id: productId}, {isDeleted: true});

        if(!product)
            throw new Error("item doesn't exitst");

        console.log("deleteProduct Success");
        res.status(200).json({status: "deleteProduct Success", product}); 
    }catch(err)
    {
        console.log("deleteProduct Fail");
        res.status(200).json({status: "deleteProduct Fail", error: err.message}); 
    }
}

export default productController;