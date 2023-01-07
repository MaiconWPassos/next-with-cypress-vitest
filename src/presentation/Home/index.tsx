import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";
import Light from "./components/Light";
import LightSwitch from "./components/LightSwitch";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tech Talk - Testes automatizados</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        display="flex"
        h="100vh"
        w="full"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="2"
      >
        <Text fontSize="lg" fontWeight="semibold" data-testid="home-title">
          Tech Talk - Testes automatizados
        </Text>
        <Light />
        <LightSwitch />
      </Box>
    </>
  );
};

export default Home;
