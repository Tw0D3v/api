import Product from '../models/Product';

export const createProducts = async(req,res)=>{

    const {name,category,price,imgUrl} = req.body;
    const newProduct = new Product({name,category,price,imgUrl})
    const ProductSave = await newProduct.save()

    res.status(201).json(ProductSave)
}

export const getProducts = async(req,res)=>{

    const Products = await Product.find();
    res.json(Products)
}

export const getProductsById = (req,res)=>{

}

export const updateProdutsById = (req,res)=>{

}

export const deleteProductsById= (req,res)=>{

}