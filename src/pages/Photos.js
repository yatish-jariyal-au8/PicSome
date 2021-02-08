import React, { useContext } from "react";
import { getClass } from "../utils/index";
import { Context } from "../context/Context";
import Image from "../components/Image";

const Photos = () => {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)} />
  ));

  return (
    <main className="photos">
      {imageElements}
    </main>
  );
};

export default Photos;
