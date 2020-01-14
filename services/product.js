const express = require('express');
const Product = require('../models/product');

const getProducts = async (req, res, next) => {
    try {

        let products = await Product.find({});

        if (products.length > 0) {
            return res.status(200).json({
                'message': 'products fetched successfully',
                'data': products
            });
        }

        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No products found in the system'
        });
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

const getProductById = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);
        if (product) {
            return res.status(200).json({
                'message': `product with id ${req.params.id} fetched successfully`,
                'data': product
            });
        }

        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No products found in the system'
        });

    } catch (error) {

        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

const createProduct = async (req, res, next) => {
    try {

        const 
        {
            name,price,stock
        } = req.body;

        if (name === undefined || name === '') {
            return res.status(422).json({
                'code': 'REQUIRED_FIELD_MISSING',
                'description': 'name is required',
                'field': 'name'
            });
        }

        if (price === undefined || price === '') {
            return res.status(422).json({
                'code': 'REQUIRED_FIELD_MISSING',
                'description': 'price is required',
                'field': 'price'
            });
        }
        if (stock === undefined || stock === '') {
            return res.status(422).json({
                'code': 'REQUIRED_FIELD_MISSING',
                'description': 'stock is required',
                'field': 'stock'
            });
        }


        const temp = {
            name: name,
            price: price,
            stock: stock
        }

        let newProduct = await Product.create(temp);

        if (newProduct) {
            return res.status(201).json({
                'message': 'product created successfully',
                'data': newProduct
            });
        } else {
            throw new Error('something went worng');
        }
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

const updateProduct = async (req, res, next) => {
    try {


        const ProductId = req.params.id;

        const {name,price,stock} = req.body;

        if (name === undefined || name === '') {
            return res.status(422).json({
                'code': 'REQUIRED_FIELD_MISSING',
                'description': 'name is required',
                'field': 'name'
            });
        }

        if (price === undefined || price === '') {
            return res.status(422).json({
                'code': 'REQUIRED_FIELD_MISSING',
                'description': 'price is required',
                'field': 'price'
            });
        }
        if (stock === undefined || stock === '') {
            return res.status(422).json({
                'code': 'REQUIRED_FIELD_MISSING',
                'description': 'stock is required',
                'field': 'stock'
            });
        }

        if (price === undefined || price === '') {
            return res.status(422).json({
                'code': 'REQUIRED_FIELD_MISSING',
                'description': 'price is required',
                'field': 'price'
            });
        }
        if (stock === undefined || stock === '') {
            return res.status(422).json({
                'code': 'REQUIRED_FIELD_MISSING',
                'description': 'stock is required',
                'field': 'stock'
            });
        }
        const temp = {
            name: name,
            price: price,
            stock: stock
        }

        let updateProduct = await Product.findByIdAndUpdate(ProductId, temp, {
            new: true
        });

        if (updateProduct) {
            return res.status(200).json({
                'message': 'product updated successfully',
                'data': updateProduct
            });
        } else {
            throw new Error('something went worng');
        }
    } catch (error) {

        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        let product = await {Product}.findByIdAndRemove(req.params.id);
        if (product) {
            return res.status(204).json({
                'message': `product with id ${req.params.id} deleted successfully`
            });
        }

        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No users found in the system'
        });

    } catch (error) {

        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

module.exports = {
    getProducts: getProducts,
    getProductById: getProductById,
    createProduct: createProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
}