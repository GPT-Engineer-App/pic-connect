import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PhotoGrid from "../components/PhotoGrid";

const Index = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch photos from the server or cloud storage
    const fetchedPhotos = [
      // Replace with actual fetch logic
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ];
    setPhotos(fetchedPhotos);
  }, []);
  return (
    <Container maxW="container.xl" p={0}>
      <NavBar />
      <PhotoGrid photos={photos} />
    </Container>
  );
};

export default Index;