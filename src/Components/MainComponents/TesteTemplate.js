import React from 'react'
import { Card, Flex, CardHeader, Heading, CardBody, Grid, Avatar, Text, CardFooter } from '@chakra-ui/react'

function TesteTemplate({testimonial}) {



  return (
    <Flex wrap="wrap"  width="100%"  paddingLeft="10vw"  paddingRight="10vw" justify={"center"}>
      {testimonial.map((testimonial) => (
        <Card margin={3}
        key={testimonial.id}
        width="20%"
        minW="min-content"
        borderRadius="16"
        bg="#EDEFEE" >
          <CardHeader>
            <Heading size='md'> {testimonial.rating}</Heading>
          </CardHeader>
          <CardBody>
            <Grid templateColumns='repeat(2, 1fr)'>
              <Avatar size="lg" name={testimonial.name} src={testimonial.image}></Avatar>
              <Text fontWeight="bold" textAlign="center" paddingTop="12.5%" >{testimonial.name}</Text>
            </Grid>
          </CardBody>
          <CardFooter>
            <Text>{testimonial.review}</Text>
          </CardFooter>
        </Card>
      ))
      }
    </Flex>
  )
}

export default TesteTemplate