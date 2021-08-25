import React, { useEffect, useState } from "react";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal as ChakraModal,
  FormControl,
  FormLabel,
  Input,
  Flex,
  NumberInput,
  NumberInputField,
  Select,
} from "@chakra-ui/react";
import {
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
  birthdate: Date;
  setBirthdate: React.Dispatch<React.SetStateAction<Date>>;
  register: UseFormRegister<FieldValues>;
  onSubmit: any;
}

const RegisterPatientModal: React.FC<IModal> = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
  register,
  birthdate,
  setBirthdate,
  onSubmit,
}) => {
  return (
    <>
      {" "}
      <ChakraModal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <form onSubmit={onSubmit}>
          <ModalContent>
            <ModalHeader>Insert Patient Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex alignContent="flex-start" flexDir="row">
                <FormControl mx="4px">
                  <FormLabel htmlFor="first_name">First name</FormLabel>
                  <Input
                    id="first_name"
                    {...register("first_name", {
                      required: "This is required",
                    })}
                  />
                </FormControl>

                <FormControl mx="4px">
                  <FormLabel htmlFor="last_name">Last name</FormLabel>
                  <Input
                    id="last_name"
                    {...register("last_name", { required: "This is required" })}
                  />
                </FormControl>
              </Flex>
              <Flex alignContent="flex-start" flexDir="row" mt="10px">
                <FormControl mx="4px">
                  <FormLabel htmlFor="age">Age</FormLabel>
                  <NumberInput>
                    <NumberInputField
                      id="age"
                      {...register("age", { required: "This is required" })}
                    />
                  </NumberInput>
                </FormControl>

                <FormControl mx="4px">
                  <FormLabel htmlFor="sex">Sex</FormLabel>
                  <Select
                    id="sex"
                    {...register("sex", { required: "This is required" })}
                    placeholder="Select an option"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>
              </Flex>
              <Flex alignContent="flex-start" flexDir="row" mt="10px">
                <FormControl mx="4px">
                  <FormLabel htmlFor="city_name">City Name</FormLabel>
                  <Input
                    id="city_name"
                    {...register("city_name", { required: "This is required" })}
                  />
                </FormControl>

                <FormControl mx="4px">
                  <FormLabel htmlFor="birth_date">Birthdate</FormLabel>
                  <SingleDatepicker
                    id="birth_date"
                    date={birthdate}
                    onDateChange={setBirthdate}
                  />
                </FormControl>
              </Flex>
              <FormControl mx="4px">
                <FormLabel htmlFor="hospital_name">Hospital Name</FormLabel>
                <Input
                  id="hospital_name"
                  {...register("hospital_name", {
                    required: "This is required",
                  })}
                />
              </FormControl>
              <Flex alignContent="flex-start" flexDir="row" mt="10px">
                <FormControl mx="4px">
                  <FormLabel htmlFor="guardian_first_name">
                    Guardian First Name
                  </FormLabel>
                  <Input
                    id="guardian_first_name"
                    {...register("guardian_first_name", {
                      required: "This is required",
                    })}
                  />
                </FormControl>

                <FormControl mx="4px">
                  <FormLabel htmlFor="guardian_last_name">
                    Guardian Last Name
                  </FormLabel>
                  <Input
                    id="guardian_last_name"
                    {...register("guardian_last_name", {
                      required: "This is required",
                    })}
                  />
                </FormControl>
              </Flex>
              <FormControl mx="4px">
                <FormLabel htmlFor="guardian_phone">Guardian Phone</FormLabel>
                <NumberInput>
                  <NumberInputField
                    id="guardian_phone"
                    {...register("guardian_phone", {
                      required: "This is required",
                    })}
                  />
                </NumberInput>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                isLoading={isLoading}
                colorScheme="blue"
                mr={3}
                onClick={onConfirm}
                type="submit"
              >
                Confirm
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </ChakraModal>
    </>
  );
};
export default RegisterPatientModal;
