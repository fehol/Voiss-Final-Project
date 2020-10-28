import Link from 'next/link';
// import { Button } from '@chakra-ui/core';
import { ThemeProvider, Box, Flex, Image, Text } from '@chakra-ui/core';

const NavLinkBar = ({ children, ...props }) => (
  <Link px={2} color="white" {...props}>
    {children}
  </Link>
);

export default function Header() {
  return (
    <ThemeProvider>
      <Flex
        bg="black"
        color="white"
        w="100%"
        px={8}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          {/* <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            size={30}
          /> */}
          <Text pl={3} color="white">
            Keith Voss
          </Text>
        </Flex>
        <Box>
          <NavLinkBar>
            <Link href="/">Home</Link>
            <Link href="../about">About</Link>
            <Link href="../contact">Contact</Link>
            <Link href="../demos">Contact</Link>
            <Link href="../service">Contact</Link>
            <Link href="../teaching">Contact</Link>
          </NavLinkBar>
        </Box>
      </Flex>
    </ThemeProvider>
  );
}
