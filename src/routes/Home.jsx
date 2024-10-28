import React from "react";
import Head from "../components/Head";
import { TimeRealize } from "../components/TimeRealize";
import Places from "../components/Places";

export const Home = () => {
  return (
    <div className="container">
      <div className="container_home">
        <Head />
        <TimeRealize />
        <Places />
      </div>
    </div>
  );
};
