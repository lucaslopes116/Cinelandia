import { Button, Flex, useColorMode  } from "@chakra-ui/react";

export function Dashboard(){
  const { colorMode, toggleColorMode } = useColorMode();

  return(
    <Flex
      align="center"
      justify="center"
      height="100vh"
      direction="column"
    >
      <Button onClick={() => toggleColorMode()} size="lg">{colorMode}</Button>
    </Flex>
  )
}