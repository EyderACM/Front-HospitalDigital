import React, { useEffect, useState } from "react";
import {
  useColorModeValue,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Button,
  HStack,
} from "@chakra-ui/react";
import SidebarPanel from "components/templates/SidebarPanel";
import BaseService, { BaseEntity } from "types/BaseService";
import { patientGenerator } from "types/patient/patient";
import { DtoToEntity, RawDtoToExtendedDto } from "types/BaseMapper";
import { When } from "react-if";
import { hospitalTableGenerator } from "types/hospital/hospital";
import { guardianTableGenerator } from "types/guardian/guardian";
import Modal from "components/UI/molecules/Modal";
import RegisterPatientModal from "components/UI/molecules/RegisterPatientModal";
import { useForm } from "react-hook-form";
import TableActions from "components/UI/molecules/TableActions";
import turnIntoDatabaseDate from "utils/functions/turnIntoDatabaseDate";
import useTableConvertor from "hooks/useTableConvertor";

const AdminPanelViewFactory = <T extends BaseEntity, U extends BaseEntity>(
  useService: () => BaseService<T, U>,
  dtoToEntityMapper: DtoToEntity<U, T>,
  dtoToExtendedDto: RawDtoToExtendedDto<U>
) => {
  return function Home() {
    const [isEditing, setIsEditing] = useState(false);
    const [entities, setEntities] = useState<U[]>([]);
    const [toDeleteEntity, setToDeleteEntity] = useState<number>(-1);
    const [onLoading, setOnLoading] = useState(false);
    const { getAll, delete: deleteEntity, create, update } = useService();
    const [date, setDate] = useState(new Date());
    const [convertToPdf] = useTableConvertor();
    const {
      isOpen: isDeleteModalOpen,
      onOpen: onOpenDeleteModal,
      onClose: onCloseDeleteModal,
    } = useDisclosure();
    const {
      isOpen: isCreatePatientModalOpen,
      onOpen: onOpenCreatePatientModal,
      onClose: onCloseCreatePatientModal,
    } = useDisclosure();
    const {
      handleSubmit,
      register,
      setValue,
      reset,
      formState: { errors, isSubmitting },
    } = useForm();

    useEffect(() => {
      setValue("birth_date", turnIntoDatabaseDate(date), {
        shouldValidate: true,
      });
    }, [date]);

    useEffect(() => {
      async function assignEntites() {
        const newEntities = await getAll();
        setEntities(newEntities);
      }
      assignEntites();
    }, [getAll]);

    const onLoadingCallback = async (callback: Function) => {
      setOnLoading(true);
      callback();
      setOnLoading(false);
    };

    const onCreatePatient = async (data: unknown) => {
      console.log(data);
      setValue("birth_date", turnIntoDatabaseDate(date), {
        shouldValidate: true,
      });
      onLoadingCallback(async () => await create(dtoToEntityMapper(data as U)));
      onCloseCreatePatientModal();
    };

    const onEditPatient = async (data: unknown) => {
      onLoadingCallback(async () => await update(dtoToEntityMapper(data as U)));

      setIsEditing(false);
      onCloseCreatePatientModal();
    };

    const onDelete = (id: number) => async () => {
      onLoadingCallback(async () => await deleteEntity(id));
      onCloseDeleteModal();
    };

    const onOpenDeleteModalPreconfirm = (id: number) => () => {
      onOpenDeleteModal();
      setToDeleteEntity(id);
    };

    const onOpenEditModal = (entity: U) => () => {
      setIsEditing(true);
      onOpenCreatePatientModal();
      reset(dtoToExtendedDto(entity));
    };

    const onOpenCreateModal = () => {
      reset({});
      onOpenCreatePatientModal();
    };

    return (
      <>
        <SidebarPanel>
          <HStack spacing="10px" mb="10px" justifyContent="flex-start">
            <Button colorScheme="teal" size="sm" onClick={onOpenCreateModal}>
              Registrar Paciente
            </Button>
            <Button
              onClick={() => convertToPdf(entities.map(dtoToEntityMapper))}
              colorScheme="teal"
              size="sm"
              variant="outline"
            >
              Imprimir informaci??n
            </Button>
          </HStack>
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
                  <Th key={JSON.stringify(data)}>{data}</Th>
                ))}
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <When condition={entities !== undefined}>
                {entities !== undefined &&
                  entities.map((entity) => (
                    <Tr key={entity.id}>
                      {Object.entries(dtoToEntityMapper(entity)).map(
                        ([key, value], i) =>
                          i !== 0 ? <Td key={key}>{value}</Td> : <></>
                      )}
                      <Td>
                        <TableActions
                          deleteAction={onOpenDeleteModalPreconfirm(
                            entity.id || -1
                          )}
                          editAction={onOpenEditModal(entity)}
                        />
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
        <RegisterPatientModal
          onClose={onCloseCreatePatientModal}
          isOpen={isCreatePatientModalOpen}
          isLoading={onLoading}
          onConfirm={() => {}}
          birthdate={date}
          setBirthdate={setDate}
          onSubmit={
            isEditing
              ? handleSubmit(onEditPatient)
              : handleSubmit(onCreatePatient)
          }
          register={register}
        />
      </>
    );
  };
};

export default AdminPanelViewFactory;
