import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";

const InvestorLogin = () => {
  return (
    <Flex
      bgColor={"gray.100"}
      w={"100%"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex bgColor={"white"} p={"40px"} gap="40px" maxW={"600px"}>
        <Flex direction={"column"} gap={"20px"}>
          <Heading mb={"10px"}>
            Login to your <br />
            Investor account
          </Heading>
          <Input placeholder={"Email Id"} />
          <Input placeholder={"Password"} />
          <Button colorScheme="blue" variant={"solid"}>
            Login
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InvestorLogin;
