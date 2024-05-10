import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import EventGride from "./EventGride";
import { Empty } from "antd";
import Axios from "axios";
import { useEffect, useState } from "react";

function EventsSection() {
  const [eventes, setEventes] = useState([]);
  useEffect(() => {
    getEvent();
  }, []);
  const getEvent = () => {
    return Axios.get("https://quark-api-ensabm.vercel.app/event")
      .then(async (res) => {
        await console.log(res.data);
        await setEventes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box m={5} p={5}>
      <Heading p={5} textAlign={"center"} mb={10}>
        Evenements
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 3, lg: 4 }} spacing={2}>
        {eventes.length > 0 ? (
          eventes.map((event) => (
            <Box mt={4}>
              <EventGride name={event.name} description={event.description} />
            </Box>
          ))
        ) : (
          <Box>
            <Empty />
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
}

export default EventsSection;
