import React, { ChangeEvent, useEffect, useState } from "react";
import {
  useColorModeValue,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  ButtonGroup,
} from "@chakra-ui/react";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import SidebarPanel from "components/templates/SidebarPanel";
import BaseService from "types/BaseService";
import { patientGenerator } from "types/patient/patient";
import { DtoToEntity } from "types/BaseMapper";
import { When } from "react-if";

const AdminPanelViewFactory = <T, U>(
  useService: () => BaseService<T, U>,
  dtoToEntityMapper: DtoToEntity<U, T>
) => {
  return function Home() {
    const [searchValue, setSearchValue] = useState("");
    const [entities, setEntities] = useState<U[]>([]);
    const { getAll } = useService();

    useEffect(() => {
      async function assignEntites() {
        const newEntities = await getAll();
        setEntities(newEntities);
      }

      assignEntites();
    }, [getAll]);

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
          <Thead>
            <Tr>
              {Object.keys(patientGenerator()).map((data) => (
                <Th>{data}</Th>
              ))}
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            <When condition={entities !== undefined}>
              {entities !== undefined &&
                entities.map((entity) => (
                  <Tr>
                    {Object.entries(dtoToEntityMapper(entity)).map(
                      ([key, value], i) =>
                        i !== 0 ? <Td key={key}>{value}</Td> : <></>
                    )}
                    <Td>
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
                ))}
            </When>
          </Tbody>
        </Table>
      </SidebarPanel>
    );
  };
};

export default AdminPanelViewFactory;
