import {
    Grid,
    Image,
    IconButton,
    Text,
    Input,
    Card,
    GridItem,
} from '@chakra-ui/react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { useCart } from '../../context/CartContext';
import React from 'react';

function CheckoutPage() {
    const { cartItems, removeItemFromCart, updateItemQuantity } = useCart();

    const handleRemoveItem = (itemId) => {
        removeItemFromCart(itemId);
    };

    const handleQuantityChange = (itemId, event) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (isNaN(newQuantity)) {
          updateItemQuantity(itemId, 0);
        } else {
          updateItemQuantity(itemId, newQuantity);
        }
      };
      



    return (
        <Card w="50vw" mx="auto" mt={8} px={20} py={10} borderRadius='25px' border='1px solid #d4cfcf'>
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem w='100%' h='10'  >Image</GridItem>
                <GridItem w='100%' h='10'  >Name</GridItem>
                <GridItem w='100%' h='10'  >Price</GridItem>
                <GridItem w='100%' h='10'  >Qty</GridItem>
                <GridItem w='100%' h='10'  >Remove</GridItem>


                {cartItems.map((item) => (
                    <React.Fragment key={item.id} >
                        <Image src={item.thumbnail} alt={item.name} boxSize="50px" borderRadius='10px' />
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>

                        <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e)}
                            w="60px"
                            borderRadius="md"
                            textAlign="center"
                            borderColor="gray.300"
                            _hover={{ borderColor: 'gray.400' }}
                            _focus={{ outline: 'none', borderColor: 'blue.500', boxShadow: 'outline' }}
                        />


                        <IconButton
                            icon={<IoCloseCircleOutline />}
                            aria-label="Remove product"
                            colorScheme="red"
                            onClick={() => handleRemoveItem(item.id)}
                        />
                    </React.Fragment>
                ))}
            </Grid>

        </Card>
    );
}

export default CheckoutPage;
