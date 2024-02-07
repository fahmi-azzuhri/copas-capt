import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { MdOutlineContentCopy } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const Text = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/api/all`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCopyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Text copied to clipboard!", {
          style: {
            padding: "16px",
            color: "#2196F3",
          },
          iconTheme: {
            primary: "#2196F3",
            secondary: "#FFFAEE",
          },
          text,
        });
      })
      .catch((err) => {
        console.error("Error copying text:", err);
      });
  };

  return (
    <div className="grid justify-items-start md:justify-items-center">
      <Toaster position="top-center" reverseOrder={true} />
      {data.length > 0 ? (
        data.map((item) => (
          <Card key={item.id} className="mt-6 w-[500px]">
            <CardBody className="flex flex-row justify-between">
              <Typography>{item}</Typography>
              <MdOutlineContentCopy
                onClick={() => handleCopyText(item)}
                className="w-4 h-4 text-blue-500 hover:text-blue-800 cursor-pointer mt-1"
              />
            </CardBody>
          </Card>
        ))
      ) : (
        <Typography>Tidak ada data tersedia</Typography>
      )}
    </div>
  );
};

export default Text;
