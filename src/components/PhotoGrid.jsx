import { SimpleGrid, Image, Box, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const PhotoGrid = ({ photos }) => {
  const [likes, setLikes] = useState(Array(photos.length).fill(0));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={4} p={4}>
      {photos.map((src, index) => (
        <Box key={index} boxShadow="md" borderRadius="md" overflow="hidden" position="relative">
          <Image src={src} alt={`Photo ${index + 1}`} />
          <Box position="absolute" bottom="0" left="0" p={2} bg="rgba(0, 0, 0, 0.5)" width="100%" display="flex" alignItems="center" justifyContent="space-between">
            <IconButton
              icon={<FaHeart />}
              colorScheme="red"
              variant="outline"
              onClick={() => handleLike(index)}
            />
            <Text color="white" ml={2}>{likes[index]} Likes</Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default PhotoGrid;