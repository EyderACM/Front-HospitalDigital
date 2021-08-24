import React from "react";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { IHasIcon } from "types/IHasIcon";

const DefaultIcon: React.FC<IHasIcon> = ({ icon }) => (
  <Icon
    mr="2"
    boxSize="4"
    _groupHover={{
      color: useColorModeValue("gray.600", "gray.300"),
    }}
    as={icon}
  />
);

export default DefaultIcon;
