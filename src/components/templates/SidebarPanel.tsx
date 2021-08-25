import React, { ChangeEvent, useState } from "react";
import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import SidebarContent from "components/UI/molecules/SidebarContent";

const SidebarPanel: React.FC = ({ children }) => {
  const sidebar = useDisclosure();
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
      overflowX={{ base: "scroll", xl: "hidden" }}
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="100%"
          px="4"
          bg={useColorModeValue("white", "gray.800")}
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
          borderRadius={{ base: "0 0 10px 0", xl: "none" }}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <Flex align="center">
            <IconButton
              aria-label="dark mode button"
              icon={<BsMoon />}
              onClick={toggleColorMode}
              size="sm"
            />
            <Avatar
              ml="4"
              size="sm"
              name="Doctor"
              src="https://cdn.crello.com/api/media/small/283922438/stock-photo-serious-doctor-glasses-white-coat"
              cursor="pointer"
            />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarPanel;
