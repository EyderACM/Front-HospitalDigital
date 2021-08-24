import { Flex, useColorModeValue, StackProps } from "@chakra-ui/react";
import { IHasIconOptional } from "types/IHasIcon";
import DefaultIcon from "../atoms/DefaultIcon";

const NavItem: React.FC<IHasIconOptional & StackProps> = ({
  icon,
  children,
  ...rest
}) => (
  <Flex
    align="center"
    px="4"
    pl="6"
    py="3"
    cursor="pointer"
    color={useColorModeValue("inherit", "gray.400")}
    _hover={{
      bg: useColorModeValue("gray.100", "gray.900"),
      color: useColorModeValue("gray.900", "gray.200"),
    }}
    role="group"
    fontWeight="semibold"
    transition=".15s ease"
    {...rest}
  >
    {icon && <DefaultIcon icon={icon} />}
    {children}
  </Flex>
);

export default NavItem;
