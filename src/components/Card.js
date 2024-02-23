import { Card, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ category, onClick }) => {
    console.log(category)
  return (
    <>
     <HStack>
     {category?.map(({id,name})=>(
         <Link to={`/category/${id}`} key={id} >
         <Card  
         onClick={onClick}
         px='100px'
         border='1px solid #d4cfcf'
         py='150px'
         borderRadius='25'>
         <Text fontSize='48px' fontWeight='600'>
          {name}
         </Text>
         </Card>
         </Link>
      
      ))
      }
     </HStack>
     
    </>
  )
}

export default Cart