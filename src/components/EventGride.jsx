import ModelTasck from "./ModelTasck";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import eventImg from "../assets/imges/llllll.png";

const EventGride = ({ name, description }) => {
  return (
    <>
      <Card p={3} boxShadow={"xl"}>
        <CardHeader my={3}>
          <Box m={2} p={1}>
            <Image borderRadius={10} src={eventImg} />
          </Box>

          <Heading size="md" color="#430A5D">
            {" "}
            {name}{" "}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text color="#430A5D">
            <a href="http://www.instagram.com/quark.ensabm." target="_blank">
              www.instagram.com/quark.ensabm.
            </a>
          </Text>
        </CardBody>
        <CardFooter my={3}>
          <ModelTasck
            title={name}
            buttonName={"détaille"}
            description={description}
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default EventGride;
