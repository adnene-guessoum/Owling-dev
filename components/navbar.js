import Logo from './logo';
import NextLink from 'next/link';
// composants nécessaires pour la navbar -> Stack: group element together and
// apply space between
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';

// commonly used interface icon provided by chakra-ui
import { HamburgerIcon } from '@chakra-ui/icons';

import ThemeToggleButton from './theme-toggle';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} legacyBehavior passHref>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zindex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>

          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>

        <ThemeToggleButton />

        <Box
          flex={1}
          align="right"
          ml={2}
          display={{ base: 'inline-block', md: 'none' }}
        >
          <Menu isLazy id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />

            <MenuList>
              {/*
		 hydration issue: cf. https://github.com/chakra-ui/chakra-ui/issues/2248
	+ isLazy Menu
*/}
              <NextLink href="/" LegacyBehavior passHref>
                <MenuItem as={Link}>About</MenuItem>
              </NextLink>

              <NextLink href="/works" LegacyBehavior passHref>
                <MenuItem as={Link}>Works</MenuItem>
              </NextLink>

              <NextLink href="/posts" LegacyBehavior passHref>
                <MenuItem as={Link}>Posts</MenuItem>
              </NextLink>

              <MenuItem
                as={Link}
                href="https://github.com/adnene-guessoum/Owling-dev"
              >
                View Source
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
