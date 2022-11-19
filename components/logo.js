// route transition côté client (// single page app)
import Link from 'next/link';
// composant images (public/image)
import Image from 'next/image';
// text et support dark/light theme pour le site
import { Text, useColorModeValue } from '@chakra-ui/react';
// ajouter style aux composants et éléments react
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(-20deg);
  }
`;

const Logo = () => {
  const owlImg = `/images/owl-logo${useColorModeValue('', '-dark')}.png`;

  return (
    <Link legacyBehavior href="/">
      {/* <a>*/}
      <LogoBox>
        <Image src={owlImg} width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Owling-Dev
        </Text>
      </LogoBox>
      {/* </a>*/}
    </Link>
  );
};

export default Logo;
