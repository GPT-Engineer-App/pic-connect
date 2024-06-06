import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box bg="brand.700" px={4} py={2}>
      <Flex alignItems="center">
        <Text fontSize="2xl" color="white" fontWeight="bold">
          PhotoShare
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" mx={2} color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/profile" mx={2} color="white">
            Profile
          </Link>
          <Link as={RouterLink} to="/upload" mx={2} color="white">
            Upload
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;