
import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'
import TotalPriceInCart from './TotalPriceInCart'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const NavBar = () => {
  const { totalItems, totalPrice } = useCart();
  return (
    <Box>
      <Link to='/checkout'>
        <HStack h='140px' gap={4} mx='auto'
          w='80vw' justify='end'>

          <ItemCount totalItems= {totalItems} />
          <TotalPriceInCart totalPrice= {totalPrice}/>

        </HStack>
      </Link>
    </Box>
  )
}

export default NavBar