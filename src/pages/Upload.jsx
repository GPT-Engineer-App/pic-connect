import { Box, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const Upload = () => {
  return (
    <Box>
      <NavBar />
      <Box p={4}>
        <Text fontSize="2xl">Upload Page</Text>
        {/* Upload form will go here */}
      </Box>
    </Box>
  );
};

export default Upload;