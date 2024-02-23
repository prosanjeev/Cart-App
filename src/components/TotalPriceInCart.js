import { Card, Text } from '@chakra-ui/react'
import React from 'react'

const TotalPriceInCart = ({ totalPrice }) => {

  return (
    <Card px={5} py={2}><Text fontSize='28px' fontWeight='600'> ${totalPrice.toFixed(2)} </Text> </Card>
  )
}

export default TotalPriceInCart