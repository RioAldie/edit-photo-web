import { useState } from 'react';
import { Image } from 'image-js';

const ImageDisplay = () => {
  const [myimg, setMyimg] = useState(
    'https://images.unsplash.com/photo-1686704223352-366336b32263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  );
  async function execute() {
    let image = await Image.load(
      'https://images.unsplash.com/photo-1686704223352-366336b32263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    );
    let grey = image
      .grey(10) // convert the image to greyscale.
      .resize({ width: 200 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
      .rotate(90); // rotate the image clockwise by 30 degrees.
    return setMyimg(grey.toDataURL());
  }
  const handleEdit = () => {
    try {
      execute();
    } catch (error) {
      console.error();
    }
  };
  console.log(myimg);
  return (
    <div>
      <button onClick={() => handleEdit()}>edit image</button>
      {<img src={myimg} />}
    </div>
  );
};

export default ImageDisplay;
