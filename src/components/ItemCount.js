import { Card, Text } from '@chakra-ui/react'
import React from 'react'

const ItemCount = ({totalItems}) => {
  return (
    <Card   px={5} py={2} border='1px solid #d4cfcf' borderRadius='100%'>
        <Text fontSize='28px' fontWeight='600'>{parseInt(totalItems)}</Text>
        </Card>
  )
}

export default ItemCount