import React, { useState } from "react";
import Hackercard from "./Hackercard";
import Hackerapi from "../HackerApi/Hackerapi";

const Home = () => {
  const [data, setdata] = useState(Hackerapi);
  return (
    <div className="p-3">
      <Hackercard data={data} />
    </div>
  );
};

export default Home;
