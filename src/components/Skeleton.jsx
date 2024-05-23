import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const Skeleton = () => {
  return (
    <Box padding="3" boxShadow="lg" bg="white" m={3} p={4}>
      {/* <SkeletonCircle size="20" /> */}
      <SkeletonText
        // p={6}
        size="20"
        mt="4"
        noOfLines={1}
        spacing="4"
        skeletonHeight="40"
      />
      <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="5" />
      <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
    </Box>
  );
};

export default Skeleton;
