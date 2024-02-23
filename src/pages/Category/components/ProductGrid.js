// ProductGrid.js
import React, { useContext, useState } from 'react';
import {  HStack, Stack, Text } from '@chakra-ui/react';
import Product from './Product';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../../context/ProductContext';
import { useCart } from '../../../context/CartContext';
import { Filter } from './Filter';

const ProductGrid = () => {
  const { categoryId } = useParams();
  const { products, getCategoryName } = useContext(ProductContext);
  const { addItemToCart } = useCart();
  const categoryProducts = products.filter((product) => product.categoryId === categoryId);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleAddToCart = (product) => {
    addItemToCart(product);
  };

  const filterProducts = () => {
    let filteredProducts = [...categoryProducts];
    if (selectedFilters.includes('Delivery')) {
      filteredProducts = filteredProducts.filter(product => product.delivery === true);
    }
    // Add more filters as needed

    return filteredProducts;
  };

  const filteredProducts = filterProducts();

  return (
      <HStack >
        <Filter setSelectedFilters={setSelectedFilters} />
      <Stack px={20}>
      <Text fontSize='40px' fontWeight='600'>{getCategoryName(categoryId)}</Text>
       <HStack mt={10} gap={10}>
         {filteredProducts.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
        </HStack>
      </Stack>
      </HStack>
  );
};

export default ProductGrid;
