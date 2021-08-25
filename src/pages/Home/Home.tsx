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
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import React, { ChangeEvent, useEffect, useState } from "react";
import SidebarContent from "components/UI/molecules/SidebarContent";

const Home = () => {
  const sidebar = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
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
          w="full"
          px="4"
          bg={useColorModeValue("white", "gray.800")}
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" display="flex" mx={{ base: "10px", sm: "none" }}>
            <InputLeftElement color="gray.500" children={<FiSearch />} />
            <Input
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Buscar..."
            />
          </InputGroup>

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
          {/* Add content here, remove div below  */}
          <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
