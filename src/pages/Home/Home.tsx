import React, { ChangeEvent, useState } from "react";
import {
  useColorModeValue,
  IconButton,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  ButtonGroup,
} from "@chakra-ui/react";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import SidebarPanel from "components/templates/SidebarPanel";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  return (
    <SidebarPanel
      searchValue={searchValue}
      onSearchValueChange={handleSearchChange}
    >
      <Table
        borderRadius="12px"
        variant="simple"
        bg={useColorModeValue("white", "gray.800")}
        overflowX="scroll"
      >
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>
              {" "}
              <ButtonGroup variant="solid" size="sm" spacing={3}>
                <IconButton
                  aria-label="print-button"
                  colorScheme="blue"
                  icon={<BsBoxArrowUpRight />}
                />
                <IconButton
                  aria-label="edit-button"
                  colorScheme="green"
                  icon={<AiFillEdit />}
                />
                <IconButton
                  aria-label="delete-button"
                  colorScheme="red"
                  variant="outline"
                  icon={<BsFillTrashFill />}
                />
              </ButtonGroup>
            </Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </SidebarPanel>
  );
};

export default Home;
