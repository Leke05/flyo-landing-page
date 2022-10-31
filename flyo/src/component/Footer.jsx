import { Box,  HStack, Image, Text, VStack, Link as Links } from '@chakra-ui/react'
import React from 'react';
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail} from "react-icons/ai"
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
  return (
    <Box bg={"#07043B"} m={"auto"} color={"#fff"} p={"20px"} minW={"70vw"}>
      <Image src={"./image/logo.svg"} color={"white"}/>
      <Box  alignItems={"center"} justify={"space-between"} display={"flex"} gap={50} pb={"30px"} flexDirection={{base: 'column', md: 'row', lg: "row"}}>
        <VStack w={"100%"}>
          <HStack>
          <BiPhoneCall color={"white.500"}/>
          <Text>Phone: +1-543-123-4567</Text>
          </HStack>
          <HStack>
            <AiOutlineMail color={"white"}/>
            <Links>example@flyo.com</Links></HStack>
        </VStack>
        <VStack w={"60%"}>
          <Text>About Us</Text>
          <Text>Jobs</Text>
          <Text>Press</Text>
          <Text>Blog</Text>
        </VStack>
        <VStack w={"60%"}>
          <Text>Contact Us</Text>
          <Text>Terms</Text>
          <Text>Privacy</Text>
        </VStack>
        <HStack w={"60%"}>
          <FaFacebook size={'30px'}/>
         <AiFillTwitterCircle size={'30px'}/>
         <GrInstagram size={'30px'}/>
        </HStack>
      </Box>
    </Box>
  )
}

export default Footer