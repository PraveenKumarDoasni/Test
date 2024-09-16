import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

function FoodSelection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageType, setImageType] = useState('');
  const [benefits, setBenefits] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name.toLowerCase(); // Get the file name and make it lowercase for comparison
      setSelectedImage(URL.createObjectURL(file)); // Set the image preview
      setImageType(file.type); // Get the image type

      // Check for specific fruits and display benefits
      if (fileName.includes('apple')) {
        setBenefits(`services size: 1 plate (approximately 320g)<br/>
                      Calorie Breakdown:<br/>
                      1. Total Calories: 540-620<br/>
                      2. Protein: 32-36g<br/>
                      3. Fat: 26-36g<br/>
                      4. Saturated Fat: 10-12g<br/>
                      5. Carbohydrates: 56-64g<br/>
                      6. Fiber: 2-3g<br/>
                      7. Sugar: 6-8g<br/>
                      8. Sodium: 450-550mg`);
      } else if (fileName.includes('banana')) {
        setBenefits('Bananas are a great source of potassium and provide quick energy.');
      } else if (fileName.includes('orange')) {
        setBenefits('Oranges are high in vitamin C and help boost your immune system.');
      } else if (fileName.includes('grapes')) {
        setBenefits('Grapes are rich in antioxidants and support heart health.');
      } else {
        setBenefits('No benefits available for this image.');
      }
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop="50px">
      {/* Box to display selected image or a placeholder */}
      <Box
        sx={{
          width: 200,
          height: 200,
          border: '2px dashed #ccc',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('image-input').click()}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ) : (
          <Typography>Select an Image</Typography>
        )}
      </Box>

      {/* Hidden file input to trigger gallery */}
      <input
        id="image-input"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />

      {/* Display image type */}
      {imageType && (
        <Typography mt={2}>Image Type: {imageType}</Typography>
      )}

      {/* Display benefits */}
      {benefits && (
        <Typography mt={2} dangerouslySetInnerHTML={{ __html: benefits }} />
      )}

      {/* Button to trigger gallery */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => document.getElementById('image-input').click()}
        sx={{ mt: 2 }}
      >
        Select Image
      </Button>
    </Box>
  );
}

export default FoodSelection;
