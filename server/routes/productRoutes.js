import express from 'express';
import Product from '../models/Product.js';

const produtRoutes = express.Router();

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json({
    products,
    pagination: {},
  });
};

produtRoutes.route('/').get(getProducts);

export default produtRoutes;
