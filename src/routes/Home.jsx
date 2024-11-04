import React from "react";
import Head from "../components/Head";
import { TimeRealize } from "../components/TimeRealize";
import Places from "../components/Places";
import OurLove from "../components/OurLove";
import GuestPresentation from "../components/GuestPresentation";

export const Home = () => {
  return (
    <div className="container_bottom box">
      <div className="container_home flex_column">
        <section className="section_home">
          <Head />
        </section>
        <section className="section_home">
          <GuestPresentation />
          <TimeRealize />
          <Places />
          <OurLove />
        </section>
      </div>
    </div>
  );
};
