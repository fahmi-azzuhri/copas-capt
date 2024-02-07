import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const Text = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/api/all`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid justify-items-start md:justify-items-center">
      {data.length > 0 ? (
        data.map((item) => (
          <Card key={item.id} className="mt-6 w-[500px]">
            <CardBody>
              <Typography>{item}</Typography>
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
