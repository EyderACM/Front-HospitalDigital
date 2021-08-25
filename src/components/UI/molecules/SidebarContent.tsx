import React from "react";
import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import { BiHealth } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { FaUserAlt, FaHandHoldingHeart } from "react-icons/fa";
import NavItem from "./NavItem";

const SidebarContent = (props: any) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("white", "gray.800")}
    borderColor={useColorModeValue("inherit", "gray.700")}
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <Flex px="4" py="5" align="center">
      <Text
        fontSize="2xl"
        ml="2"
        color={useColorModeValue("red.500", "white")}
        fontWeight="semibold"
      >
        Children Hospital
      </Text>
    </Flex>
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      aria-label="Main Navigation"
    >
      <NavItem icon={FaUserAlt}>Patients</NavItem>
      <NavItem icon={FaHandHoldingHeart}>Guardians</NavItem>
      <NavItem icon={BiHealth}>Hospitals</NavItem>
      <NavItem icon={BsGearFill}>Settings</NavItem>
    </Flex>
  </Box>
);

export default SidebarContent;
