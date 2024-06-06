import { SimpleGrid, Image, Box } from "@chakra-ui/react";

const photos = [
  // Sample photos, replace with dynamic content in the future
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];

const PhotoGrid = () => {
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