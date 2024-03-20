import React from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" alignItems="center" justifyContent="space-between">
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxWb2NhbCUyMFdpemFyZCUyMExvZ298ZW58MHx8fHwxNzEwOTQ3ODM0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vocal Wizard Logo" maxH="60px" ignoreFallback />
        <Flex>
          <Link as={RouterLink} to="/" mx={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" mx={4}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" mx={4}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
