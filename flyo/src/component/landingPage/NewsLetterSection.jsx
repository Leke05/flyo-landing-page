import { Box, Flex, Heading, Text, FormControl, Input, Button, FormHelperText} from '@chakra-ui/react'
import React from 'react'

const NewsLetterSection = () => {
  return (
    <Flex bg='#575989' m={"auto"} p={"40px"} flexDirection={{base: 'column', md: 'row', lg: "row"}} minW={"70vw"}>
      <Box p={"20px"} w={"100%"}>
        <Heading color={'#fff'}>Get early access today</Heading>
        <Text noOfLines={3} color={'whiteAlpha.600'}>It only takes a minutes to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you</Text>
      </Box>
      <Box as={"form"} w={"65%"} m={"auto"}>
        <FormControl mb={'30px'}>
          <Input type={"email"} placeholder={"johnappleseed#mail.com"} bg={"#fff"}/>
          <FormHelperText color={'#FFF'}>Please check your email</FormHelperText>
        </FormControl>
        <Button type='submit' colorScheme={"blue"} alignContent={"center"}>Get Started For Free</Button>
      </Box >
    </Flex>
  )
}
export default NewsLetterSection