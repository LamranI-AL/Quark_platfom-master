import React, { useState } from "react";
import EventsSection from "../components/Event";
import Footer from "../components/Footer";

const Events = () => {
  const [events, setEventes] = useState([]);
  console.log(events);
  return (
    <>
      <section>
        <EventsSection />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Events;
