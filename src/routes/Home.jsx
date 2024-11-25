import React from "react";
import Head from "../components/Head";
import { TimeRealize } from "../components/TimeRealize";
import Places from "../components/Places";
import OurLove from "../components/OurLove";
import GuestPresentation from "../components/GuestPresentation";
import SectionDetail from "../components/SectionDetail";

export const Home = () => {
  return (
    <div className="container_bottom box">
      <div className="container_home flex_column">
        <GuestPresentation />
        <Head />
        <TimeRealize />
        <Places />
        <SectionDetail />
        {/* <OurLove /> */}
      </div>
    </div>
  );
};
