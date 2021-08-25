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
  useDisclosure,
} from "@chakra-ui/react";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import SidebarPanel from "components/templates/SidebarPanel";
import BaseService, { BaseEntity } from "types/BaseService";
import { patientGenerator } from "types/patient/patient";
import { DtoToEntity } from "types/BaseMapper";
import { When } from "react-if";
import { hospitalTableGenerator } from "types/hospital/hospital";
import { guardianTableGenerator } from "types/guardian/guardian";
import Modal from "components/UI/molecules/Modal";

const AdminPanelViewFactory = <T extends BaseEntity, U extends BaseEntity>(
  useService: () => BaseService<T, U>,
  dtoToEntityMapper: DtoToEntity<U, T>
) => {
  return function Home() {
    const [searchValue, setSearchValue] = useState("");
    const {
      isOpen: isDeleteModalOpen,
      onOpen: onOpenDeleteModal,
      onClose: onCloseDeleteModal,
    } = useDisclosure();
    const [entities, setEntities] = useState<U[]>([]);
    const [toDeleteEntity, setToDeleteEntity] = useState<number>(-1);
    const [onLoading, setOnLoading] = useState(false);
    const { getAll, delete: deleteEntity } = useService();

    useEffect(() => {
      async function assignEntites() {
        const newEntities = await getAll();
        setEntities(newEntities);
      }

      assignEntites();
    }, [getAll]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
      setSearchValue(event.target.value);

    const onDelete = (id: number) => async () => {
      await deleteEntity(id);
      setOnLoading(false);
      onCloseDeleteModal();
    };
    const onOpenDeleteModalPreconfirm = (id: number) => () => {
      setOnLoading(true);
      onOpenDeleteModal();
      setToDeleteEntity(id);
    };

    return (
      <>
        <SidebarPanel
          searchValue={searchValue}
          onSearchValueChange={handleSearchChange}
        >
          <Table
            borderRadius="12px"
            variant="simple"
            bg={useColorModeValue("white", "gray.800")}
            overflowX="scroll"
            size="sm"
          >
            <Thead>
              <Tr>
                {Object.keys({
                  ...patientGenerator(),
                  ...hospitalTableGenerator(),
                  ...guardianTableGenerator(),
                }).map((data) => (
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
                            onClick={onOpenDeleteModalPreconfirm(
                              entity.id || -1
                            )}
                            icon={<BsFillTrashFill />}
                          />
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  ))}
                <Modal
                  onConfirm={onDelete(toDeleteEntity)}
                  onClose={onCloseDeleteModal}
                  isOpen={isDeleteModalOpen}
                  isLoading={onLoading}
                >
                  Are you sure you want to remove the patient?
                </Modal>
              </When>
            </Tbody>
          </Table>
        </SidebarPanel>
      </>
    );
  };
};

export default AdminPanelViewFactory;
