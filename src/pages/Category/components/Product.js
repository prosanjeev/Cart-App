import { Button, Card, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Product = ({ product, handleAddToCart }) => {
    return (
        <Card borderRadius='25px' w='225px'>
            <Img borderRadius='25px' h='180px' src={product.thumbnail} />
            <Stack p={5}>
                <Text fontSize='20px' fontWeight='600' noOfLines={1}>{product.name}</Text>
                <Text fontSize='20px' fontWeight='600'>${product.price.toFixed(2)}</Text>
                <Text color='red'> {product.inStock ? (
                    <Text color='green'>In Stock</Text>
                ) : (
                    <Text color='red'>Out of Stock</Text>
                )}</Text>
                <Button
                    onClick={product.inStock ? () => handleAddToCart(product) : undefined}
                    disabled={!product.inStock}
                    colorScheme={product.inStock ? "orange" : "gray"}
                >
                    Add to Cart
                </Button>

            </Stack>
        </Card>
    )
}

export default Product