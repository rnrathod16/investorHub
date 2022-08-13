import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import axios from "axios";

const InvestorSignup = () => {
  const [user, setUser] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
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
    axios.post(`${BASE_API_URL}/investor/signup`, user).then((res) => {
      console.log(res.data);
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
            Create a new <br />
            Investor account
          </Heading>
          <Input
            placeholder={"First name"}
            value={user.firstname}
            name={"firstname"}
            onChange={handleChange}
          />
          <Input
            placeholder={"Last name"}
            value={user.lastname}
            name={"lastname"}
            onChange={handleChange}
          />
          <Input
            placeholder={"Address"}
            value={user.address}
            name={"address"}
            onChange={handleChange}
          />
          <Input
            placeholder={"Email Id"}
            value={user.email}
            name={"email"}
            onChange={handleChange}
          />
          <Input
            placeholder={"Password"}
            value={user.password}
            name={"password"}
            onChange={handleChange}
          />
          <Button colorScheme="blue" variant={"solid"} onClick={handleSubmit}>
            Signup
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InvestorSignup;
