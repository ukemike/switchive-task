import { Box, Text } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box
      as="nav"
      role="navigation"
      bg="blue.500"
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "3", md: "3", lg: "3" }}
      position="sticky"
      top="0"
      zIndex="1"
    >
      <Text fontSize="3xl" fontWeight={700} color="white">
        Switchive
      </Text>
    </Box>
  );
};
