import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetImage = () => {
  const [images, setImages] = useState([]); 

  const fetchImage = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/student');
      setImages(response.data.students); 
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <div>
      {images.length > 0 ? (
        images.map((image, index) => (
          <img 
            key={index} 
            src={image.image}
            alt={image.title || 'Image'} 
            style={{ width: '300px', margin: '10px' }} 
          />
        ))
      ) : (
        <p>Loading images...</p>
      )}
    </div>
    </div>
  );
};

export default GetImage;
