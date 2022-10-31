import { Box, Heading, Image, Text, Link as Links, VStack, HStack } from '@chakra-ui/react'
import React from 'react'

const ProductiveSection = () => {
  return (
    <Box  display={"flex"} justifyContent={"space-between"} p={12} bg={"#F9F8FE"} m={"auto"} flexDirection={{base: 'column', md: 'row', lg: "row"}} minW={"70vw"}>
        <Box w={'100%'} mt={5} >
        <Heading mb={2}>Stay productive, wherever you are.</Heading>
      <Text noOfLines={2} mb={2}>Never let location be an issue when accessing files. Flyo has you covered for all of your file storage needs</Text>
      <Text mb={2}>Securely share file and folders with friend, family and colleagues for live collaboration. No email attachments is required!</Text>
      <Links mb={2} color={"#9FC9C5"} textAlign={['center', 'right', 'right']}>See how flyo work</Links>
      <Box w={"300px"} h={"190px"} border={"2px solid #fff"} bg={"#fff"} borderRadius={"10px"} p={"20px"}  my={{base: '30px', md: '5px', lg: '5px'}}>
      <Image src={"./image/icon-quotes.svg"}/>
        <Text  lineHeight={"26px"} fontSize={"12px"}>Flyo has improved  our team productivity by an order of magnitude. Since naking the switch our team as become a well-oiled collaboration machine.</Text>
        <HStack mb={"30px"}>
        <Image src={"./image/avatar-testimonial.jpg"} boxSize={"30px"} borderRadius={"20px"}/>
        <VStack>
        <Heading fontSize={'10px'}>Klye Burton</Heading>
        <Text fontSize={'10px'} textTransform={"uppercase"}>Founder & Ceo, Hundle</Text>
        </VStack>
        </HStack>
      </Box>
        </Box>
        <Box w={"100%"}>
        <Image src={"./image/illustration-2.svg"} w={"100%"}/>
        </Box>
    </Box>
  )
}

export default ProductiveSection