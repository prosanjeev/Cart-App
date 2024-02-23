import { HStack } from '@chakra-ui/react'
import Card from '../components/Card'
import { useEffect, useState } from 'react';

const Home = () => {

  const [category, setCategory] = useState([]);
  const [loding, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch('/categories.json')
        const json = await response.json();

        setCategory(json);
        setLoading(false)
      } catch (error) {
        setError("Unable to fetch Data")
        setLoading(false);
      }

    };
    fetchFoodData();
  }, []);

  if (loding) return <div>loding....</div>
  if (error) return <div>{error}</div>


  return (
    <HStack h='80vh' gap={8} justify='center'>
      <Card category={category}  key={category.id} /> 

    </HStack>
  )
}

export default Home