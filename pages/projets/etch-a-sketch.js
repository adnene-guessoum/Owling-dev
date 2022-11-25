import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projet';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Projet = () => {
  return (
    <Layout title="Etch-a-sketch">
      <Container>
        <Title>
          Etch-a-sketch <Badge>2022</Badge>
        </Title>
        <Paragraph>
          un Etch-a-sketch simpliste pour manipuler le DOM (JS, Html, css)
        </Paragraph>

        <WorkImage
          src="/images/projets/thumbnail_etch.png"
          alt="Illustration du jeu etch-a-sketch"
        />

        <List ml={4} my={4}>
          <ListItem mb={6}>
            <Meta>Github :</Meta>
            <Link href="https://github.com/adnene-guessoum/etch-a-sketch">
              Code source
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Page :</Meta>
            <Link href="https://adnene-guessoum.github.io/etch-a-sketch/">
              Le fameux jeux
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
