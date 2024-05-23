import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import EventGride from "./EventGride";
import { Empty } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

function EventsSection() {
  const [eventes, setEventes] = useState([]);
  useEffect(() => {
    getEventss();
  }, []);

  const getEventss = async () => {
    return axios
      .get("https://server-back-quark-master-api.vercel.app/event")
      .then(async (res) => {
        await setEventes(res.data);
      })
      .catch((error) => {
        console.log("error : " + error);
      });
  };
  return (
    <Box m={5} p={5}>
      <Heading p={5} textAlign={"center"} mb={10}>
        Evenements
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 3, lg: 4 }} spacing={2}>
        {eventes.length > 0 ? (
          eventes.map((event) => (
            <Box mt={4}>
              <EventGride
                key={event._id}
                name={event.name}
                description={event.description}
              />
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
