import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const CommonLogin = () => {
  const history = useHistory();

  return (
    <Flex
      bgColor={"gray.100"}
      w={"100%"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex bgColor={"white"} p={"80px"} gap="40px" maxW={"800px"}>
        <Flex direction={"column"} gap={"20px"}>
          <Heading>For Startups</Heading>
          <Text>
            If you are an investor, you can login if you have an existing
            account or create a new one.
          </Text>
          <Flex gap={"20px"}>
            <Button
              colorScheme="blue"
              variant={"solid"}
              onClick={() => history.push("/startup/login")}
            >
              Login
            </Button>
            <Button
              colorScheme="blue"
              variant={"outline"}
              onClick={() => history.push("/startup/signup")}
            >
              Signup
            </Button>
          </Flex>
        </Flex>
        <Flex direction={"column"} gap={"20px"}>
          <Heading>For Investors</Heading>
          <Text>
            If you are an investor, you can login if you have an existing
            account or create a new one.
          </Text>
          <Flex gap={"20px"}>
            <Button
              colorScheme="blue"
              variant={"solid"}
              onClick={() => history.push("/investor/login")}
            >
              Login
            </Button>
            <Button
              colorScheme="blue"
              variant={"outline"}
              onClick={() => history.push("/investor/signup")}
            >
              Signup
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CommonLogin;
