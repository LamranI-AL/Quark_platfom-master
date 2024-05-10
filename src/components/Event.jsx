import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import EventGride from "./EventGride";
import { Empty } from "antd";
import { useContext } from "react";
import { AppContext } from "../App";

function EventsSection() {
  const eventes = useContext(AppContext);
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
