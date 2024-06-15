import Product from './model/Product.js'

const PAGE_SIZE = 5;
const productController = {};

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
};

productController.getProductList = async(req, res) => {
    try
    {
        const {page, category, name, priceMin, priceMax, soldOut} = req.query;
        console.log(page, category, name, priceMin, priceMax, soldOut);
        //const products = await Product.find({name: {$regex: name, $options:"i"}});
        // const condition = name  ? 
        //     {name: {$regex: name, $options: "i"}, isDeleted: {$ne: true}}
        //     :
        //     {isDeleted: {$ne: true}};
        const condition = {isDeleted: {$ne: true}};
        if(category)
            condition.category = category;
        if(name)
            condition.name = {$regex: name, $options: "i"};
        if(priceMin || priceMax)
            condition.price = {$gte: priceMin? priceMin*10000 : 0, $lte: priceMax? priceMax*10000 : 0};
        
        const soldOutCond = soldOut ? {
            $or: [
            {"stock.xs": {$gte : 1}},
            {"stock.s": {$gte : 1}},
            {"stock.m": {$gte : 1}},
            {"stock.l": {$gte : 1}},
            {"stock.xl": {$gte : 1}},
        ]} : {};
        
        console.log({...condition, ...soldOutCond});
        let query = Product.find({...condition, ...soldOutCond});
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
};

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
};

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
};

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
};





productController.checkStock = async(item) => {
    try
    {
        // 내가 사려는 아이템 재고 정보 들고오기.
        const product = await Product.findById(item.productId);

        // 내가 사려는 아이템 qty, 재고 비교
        if(product.stock[item.size] < item.qty)
        {
            // 재고가 불충분하면 불충분 메시지와 함께 데이터 반환
            return {isVerify: false, message: `${product.name}의 ${item.size.toUpperCase()}재고가 부족합니다.`};
        }
    
        // 충분하다면, 재고에서 - qty 성공
        const newStock = {...product.stock};
        newStock[item.size] -= item.qty;
        product.stock = newStock;

        await product.save();

        return {isVerify: true};
    }catch(err)
    {
        console.log("checkStock Error! Msg: ", err.message);
    }
};

productController.checkItemListStock = async(itemList) => {
    try
    {
        const insufficientStockItems = [] // 재고가 불충분한 아이템을 저장할 예정.

        //재고 확인 로직 *** 여러개의 비동기 작업을 한번에 할때 사용하는 Promise.all().
        await Promise.all(
            itemList.map(async(item)=> {
                const stockCheck = await productController.checkStock(item);
                if(!stockCheck.isVerify)
                {
                    insufficientStockItems.push({item, message: stockCheck.message});
                }
                return stockCheck;
            })
        );

        return insufficientStockItems;
    }catch(err)
    {
        console.log("checkItemListStock Error! Msg: ", err.message);
    }
};

export default productController;