import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button, Text, IconButton, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Form Submitted",
      description: "Your message has been sent successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl">
          Contact Us
        </Heading>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <VStack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" value={formData.message} onChange={handleChange} />
              </FormControl>
              <Button type="submit" colorScheme="teal" rightIcon={<FaPaperPlane />}>
                Submit
              </Button>
            </VStack>
          </form>
        ) : (
          <Text fontSize="xl">Thank you for your message, {formData.name}!</Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
