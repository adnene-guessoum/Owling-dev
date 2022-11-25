import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projet';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Projet = () => {
  return (
    <Layout title="Calculatrice">
      <Container>
        <Title>
          Une calculatrice <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Une simple calculatrice dans le navigateur avec Javascript.
        </Paragraph>

        <WorkImage
          src="/images/projets/thumbnail_calc.png"
          alt="Illustration calculatrice"
        />

        <List ml={4} my={4}>
          <ListItem mb={6}>
            <Meta>Github :</Meta>
            <Link href="https://github.com/adnene-guessoum/calculator">
              Code source
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Page :</Meta>
            <Link href="https://adnene-guessoum.github.io/calculator/">
              La fameuse calculatrice
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Outils :</Meta>
            <Paragraph>
              <ChevronRightIcon />
              JS, HTML, CSS
            </Paragraph>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Projet;
