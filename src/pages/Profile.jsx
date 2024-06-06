import { Box, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const Profile = () => {
  return (
    <Box>
      <NavBar />
      <Box p={4}>
        <Text fontSize="2xl">Profile Page</Text>
        {/* Profile details and user photos will go here */}
      </Box>
    </Box>
  );
};

export default Profile;