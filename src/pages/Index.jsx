import React from "react";
import { Box, Container, Heading, Stack, Text, Button, Icon, SimpleGrid, Flex, VStack, Image, Divider, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaMicrophoneAlt, FaMagic, FaChartArea, FaSlidersH, FaRegLifeRing, FaExchangeAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Feature = ({ icon, title, description }) => {
  return (
    <VStack spacing={3} textAlign="center">
      <Icon as={icon} w={10} h={10} />
      <Text fontWeight="bold">{title}</Text>
      <Text color="gray.600">{description}</Text>
    </VStack>
  );
};

const Index = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        {/* Hero Section */}
        <Stack spacing={12} py={24} alignItems="center" textAlign="center" bg="black">
          <Heading size="3xl" color="teal" fontWeight="bold">
            Unleash Your Creativity with Vocal Wizard
          </Heading>
          <Text fontSize="2xl" maxW="4xl" color="white">
            The ultimate audio mixing and mastering solution for independent artists. Achieve professional-grade results with ease and take your music to new heights.
          </Text>
          <Button size="lg" colorScheme="teal" rightIcon={<FaMagic />}>
            Start Creating
          </Button>
        </Stack>

        {/* Features Section */}
        <Box py={16} bg="black">
          <Heading size="xl" textAlign="center" mb={10} color="teal">
            Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={12} alignItems="center">
            <Feature icon={FaMicrophoneAlt} title="Vocal Isolation" description="Isolate vocals from any track with precision." />
            <Feature icon={FaMagic} title="Automatic Reverb Generator" description="Add depth to your tracks with auto-generated reverb effects." />
            <Feature icon={FaChartArea} title="Audio Analyzing" description="Get insights and visual feedback to fine-tune your music." />
            <Feature icon={FaSlidersH} title="Sound Manual Control" description="Take full control of your sound with advanced manual adjustments." />
            <Feature icon={FaRegLifeRing} title="Automatic Audio Mixing" description="Achieve the perfect mix effortlessly with our auto-mixing feature." />
            <Feature icon={FaExchangeAlt} title="Vocal Replacement" description="Swap vocals with alternatives to explore different creative directions." />
            <Feature icon={FaMagic} title="Automatic Audio Mastering" description="Master your tracks automatically with industry-standard quality." />
          </SimpleGrid>
        </Box>

        {/* About Section */}
        <Box py={24} bg="black">
          <Container maxW="container.lg">
            <Heading size="2xl" textAlign="center" mb={12} color="teal">
              Empowering Artists, Revolutionizing the Music Industry
            </Heading>
            <Text fontSize="xl" maxW="4xl" mx="auto" color="white" lineHeight="tall">
              Vocal Wizard is more than just a software—it's a movement. We believe in the power of independent artists and their ability to shape the future of music. With our state-of-the-art audio processing technology, we provide the tools and resources needed to achieve professional-grade results without relying on expensive studios or equipment. Our mission is to democratize the music industry and give every artist the opportunity to shine. Join us in this journey and let your creativity soar with Vocal Wizard.
            </Text>
          </Container>
        </Box>

        {/* Contact Us Section */}
        <Box py={24} bg="black">
          <Container maxW="container.md">
            <Heading size="2xl" textAlign="center" mb={12} color="teal">
              Get in Touch
            </Heading>
            <Box bg="gray.800" p={8} borderRadius="lg">
              <Stack spacing={6} as="form">
                <FormControl isRequired>
                  <FormLabel color="white">Name</FormLabel>
                  <Input placeholder="Your name" bg="gray.700" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color="white">Email</FormLabel>
                  <Input placeholder="Your email" type="email" bg="gray.700" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color="white">Message</FormLabel>
                  <Textarea placeholder="Your message" bg="gray.700" />
                </FormControl>
                <Button colorScheme="teal" type="submit" size="lg">
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
