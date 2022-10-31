import React from 'react'
import {Flex, HStack, Image} from '@chakra-ui/react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex px={"20px"} py={"20px"} as={"nav"} w={"full"}>
      <Flex >
        <Image src={"./image/logo.svg"}/>
        <HStack pos={"absolute"} top={'0'} right={"0"} align={"center"} justify={"space-between"} mr={5} my={5} spacing={5}>
          <NavLink to={'/'} w={"100%"}>Features</NavLink>
          <NavLink to={'/team'} w={"`100%"}>Team</NavLink>
          <NavLink to={'/sign in'} w={"100%"}>Sign</NavLink>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default NavBar