import { Box, Container, Text } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box
      as="nav"
      role="navigation"
      bg="blue.500"
      mx="auto"
      py="4"
      position="sticky"
      top="0"
      zIndex="1"
    >
      <Container maxW="7xl">
        <Text fontSize="3xl" fontWeight={700} color="white">
          Switchive
        </Text>
      </Container>
    </Box>
  );
};
