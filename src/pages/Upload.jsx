import { useState } from "react";
import { Box, Text, Input, Button, Image } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Logic to upload the file to the server or cloud storage
      console.log("Uploading:", selectedFile);
      // After successful upload, you can reset the selected file
      setSelectedFile(null);
    }
  };

  return (
    <Box>
      <NavBar />
      <Box p={4}>
        <Text fontSize="2xl">Upload Page</Text>
        <Input type="file" onChange={handleFileChange} />
        {selectedFile && (
          <Box mt={4}>
            <Image src={URL.createObjectURL(selectedFile)} alt="Selected Photo" maxH="200px" />
          </Box>
        )}
        <Button mt={4} onClick={handleUpload} colorScheme="blue">
          Upload Photo
        </Button>
      </Box>
    </Box>
  );
};

export default Upload;