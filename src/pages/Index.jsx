import { Container } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import PhotoGrid from "../components/PhotoGrid";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <NavBar />
      <PhotoGrid />
    </Container>
  );
};

export default Index;