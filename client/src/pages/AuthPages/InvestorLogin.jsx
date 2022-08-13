import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { BASE_API_URL } from "../../services/backend";

const InvestorLogin = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    axios.post(`${BASE_API_URL}/investor/signin`, user).then((res) => {
      console.log(res);
    });
  };

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
          <Input
            placeholder={"Email Id"}
            name={"email"}
            value={user.email}
            onChange={handleChange}
          />
          <Input
            placeholder={"Password"}
            name={"password"}
            value={user.password}
            onChange={handleChange}
          />
          <Button colorScheme="blue" variant={"solid"} onClick={handleSubmit}>
            Login
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InvestorLogin;
