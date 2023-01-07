import { Lightbulb } from "phosphor-react";
import useHome from "../../hooks/useHome";
import { useToken } from "@chakra-ui/react";

function Light() {
  const colors = useToken("colors", ["yellow.500", "gray.300"]);

  const { lightOn } = useHome();

  return (
    <Lightbulb
      size={200}
      weight="duotone"
      color={lightOn ? colors[0] : colors[1]}
      data-testid={lightOn ? "light-on" : "light-off"}
    />
  );
}

export default Light;
