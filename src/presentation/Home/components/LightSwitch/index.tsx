import { Button } from "@chakra-ui/react";
import useHome from "../../hooks/useHome";

function LightSwitch() {
  const { setLightOn, lightOn } = useHome();

  const toggleLight = () => setLightOn(!lightOn);

  return (
    <Button type="button" onClick={toggleLight} data-testid="toggle-light">
      {lightOn ? "Light Off" : "Light On"}
    </Button>
  );
}

export default LightSwitch;
