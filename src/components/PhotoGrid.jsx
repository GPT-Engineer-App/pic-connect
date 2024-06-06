import { SimpleGrid, Image, Box } from "@chakra-ui/react";

const PhotoGrid = ({ photos }) => {
  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={4} p={4}>
      {photos.map((src, index) => (
        <Box key={index} boxShadow="md" borderRadius="md" overflow="hidden">
          <Image src={src} alt={`Photo ${index + 1}`} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default PhotoGrid;