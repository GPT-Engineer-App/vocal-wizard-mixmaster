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
        <Stack spacing={8} py={16} alignItems="center" textAlign="center" bg="gray.900">
          <Heading size="2xl" color="white">
            Vocal Wizard
          </Heading>
          <Text fontSize="xl" maxW="3xl" color="gray.400">
            Professional-grade audio mixing and mastering software designed to empower artists to achieve high-quality results independently.
          </Text>
          <Button size="lg" colorScheme="blue" rightIcon={<FaMagic />}>
            Discover the Magic
          </Button>
        </Stack>

        {/* Features Section */}
        <Box py={16} bg="gray.800">
          <Heading size="xl" textAlign="center" mb={10} color="white">
            Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
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
        <Box py={16} bg="gray.900">
          <Heading size="xl" textAlign="center" mb={10} color="white">
            About Vocal Wizard
          </Heading>
          <Text fontSize="lg" maxW="3xl" mx="auto" color="gray.400">
            At Vocal Wizard, we're committed to fostering creativity and artistic freedom in the music industry. Our cutting-edge software enables artists to independently achieve studio-quality audio mixes and masters, elevating their music to professional levels. Join the revolution and unleash your full potential with Vocal Wizard.
          </Text>
        </Box>

        {/* Contact Us Section */}
        <Box py={16} bg="gray.800">
          <Container maxW="container.md">
            <Heading size="xl" textAlign="center" mb={10} color="white">
              Contact Us
            </Heading>
            <Stack spacing={5} as="form">
              <FormControl isRequired>
                <FormLabel color="white">Name</FormLabel>
                <Input placeholder="Your name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="white">Email</FormLabel>
                <Input placeholder="Your email" type="email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="white">Message</FormLabel>
                <Textarea placeholder="Your message" />
              </FormControl>
              <Button colorScheme="blue" type="submit">
                Send Message
              </Button>
            </Stack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
