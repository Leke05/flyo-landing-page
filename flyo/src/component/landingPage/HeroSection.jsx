import { Box, Button, Flex, FormControl, Heading, HStack, Image, Input, Text, FormHelperText } from '@chakra-ui/react'
import React from 'react'

const HeroSection = () => {
  return (
    <Flex  m={"auto"} mx={"50px"} flexDirection={{base: 'column', md: 'row', lg: "row"}} my={"30px"} minW={"70vw"}>
        <Box mt={"40px"} d={"flex"} w={"100%"}>
            <Heading  mb={5}>All your files are in one secures location, accessable anywhere.</Heading>
            <Text mb={5}>Flyo stores your most important file in one secure location. Access them wherever you need, share and collaborate with friend, family and co-workers</Text>
            <Box as={'form'} flexDirection={{base: 'column', md: 'row', lg: "row"}} display={"flex"} gap={"20px"}>
            <FormControl>
              <Input  type={"text"} placeholder={"johnappleseed#mail.com"}/>
              <FormHelperText color={'red'}>Please check your email</FormHelperText>
            </FormControl>
            <Button type={"submit"} colorScheme={"blue"}>Get Started</Button>
            </Box>
        </Box>

        <Box w={"100%"} mt={"20px"}>
          <Image src={"./image/illustration-1.svg"} boxSize={"100%"}/>
        </Box>
    </Flex>
  )
}

export default HeroSection