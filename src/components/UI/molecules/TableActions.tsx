import React from "react";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

interface ITableActions {
  deleteAction: React.MouseEventHandler<HTMLButtonElement> | undefined;
  editAction: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const TableActions: React.FC<ITableActions> = ({
  deleteAction,
  editAction,
}) => {
  return (
    <ButtonGroup variant="solid" size="sm" spacing={3}>
      <IconButton
        aria-label="edit-button"
        colorScheme="green"
        onClick={editAction}
        icon={<AiFillEdit />}
      />
      <IconButton
        aria-label="delete-button"
        colorScheme="red"
        variant="outline"
        onClick={deleteAction}
        icon={<BsFillTrashFill />}
      />
    </ButtonGroup>
  );
};

export default TableActions;
