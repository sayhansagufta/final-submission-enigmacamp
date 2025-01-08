import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useState } from "react";

const NoteBox = ({ title, desc, img, body }) => {
  const [isClikIconFav, setIsClickIconFav] = useState(false);

  const handleClickIcon = () => {
    setIsClickIconFav(!isClikIconFav);
  };

  return (
    <Card className="flex flex-row max-w-[600px] shadow-lg border border-gray-200 rounded-xl overflow-hidden">
      {/* Gambar */}
      <div className="w-1/3 bg-gray-100">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full bg-[#5647F9]"
        />
      </div>

      {/* Konten */}
      <div className="w-2/3 flex flex-col p-4">
        {/* Header */}
        <CardHeader className="p-0 mb-2">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </CardHeader>

        {/* Body */}
        <CardBody className="flex flex-col justify-between p-0">
          <p className="text-sm font-medium text-gray-500 mb-2">{desc}</p>
          <p className="text-sm text-gray-600 mb-4">{body}</p>

          {/* Icon Favorite */}
          <div className="flex justify-end">
            <img
              className="cursor-pointer transition-transform duration-300 "
              onClick={handleClickIcon}
              src={
                isClikIconFav
                  ? "src/assets/svg/iconFavoriteSolid.svg"
                  : "src/assets/svg/iconFavorite.svg"
              }
              alt="Icon Favorite"
            />
          </div>
        </CardBody>
      </div>
    </Card>
  );
};

export default NoteBox;
