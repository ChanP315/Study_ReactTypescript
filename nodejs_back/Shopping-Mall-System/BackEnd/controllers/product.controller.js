import Product from './model/Product.js'

const productController = {}

productController.createProduct = async(req, res) => {
    try
    {
        const {sku, name, size, image, category, description, price, stock, status} = req.body;
        const product = new Product({sku, name, size, image, category, description, price, stock, status});

        await product.save();

        res.status(200).json({status: "createProduct Success", product});
    }catch(err)
    {
        res.status(400).json({status: "createProduct Fail", error: err.message});
    }
}

export default productController;