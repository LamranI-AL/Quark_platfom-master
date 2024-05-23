import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import EventGride from "./EventGride";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "./Skeleton";

function EventsSection() {
  const tabOfSkeleton = [1, 2, 3, 4];
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
  const skeleton = () => {
    return tabOfSkeleton.map((item) => <Skeleton key={item} />);
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
          <>{skeleton()}</>
        )}
      </SimpleGrid>
    </Box>
  );
}

export default EventsSection;
