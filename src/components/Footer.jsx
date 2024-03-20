import React from "react";
import { Box, Flex, Image, Icon, Stack } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" py={8}>
      <Flex maxW="container.lg" mx="auto" alignItems="center" justifyContent="space-between">
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxWb2NhbCUyMFdpemFyZCUyMExvZ298ZW58MHx8fHwxNzEwOTQ3ODM0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vocal Wizard Logo" maxH="40px" ignoreFallback />
        <Stack direction="row" spacing={6}>
          <Icon as={FaEnvelope} w={6} h={6} color="white" />
          <Icon as={FaPhone} w={6} h={6} color="white" />
          <Icon as={FaMapMarkerAlt} w={6} h={6} color="white" />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
