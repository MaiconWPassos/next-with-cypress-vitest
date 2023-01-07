import type { NextPage } from "next";
import Home from "../presentation/Home";
import { HomeProvider } from "../presentation/Home/context/HomeContext";

const HomePage: NextPage = () => {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
};

export default HomePage;
