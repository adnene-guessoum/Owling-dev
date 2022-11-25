import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projet';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Projet = () => {
  return (
    <Layout title="Page Web">
      <Container>
        <Title>
          Webpage Layout <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Reproduire un template (image) en HTML et CSS pour une page web
          classique.
        </Paragraph>

        <WorkImage
          src="/images/projets/thumbnail_template.png"
          alt="Header de la page"
        />

        <List ml={4} my={4}>
          <ListItem mb={6}>
            <Meta>Github :</Meta>
            <Link href="https://github.com/adnene-guessoum/landing-page">
              Code source
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Page :</Meta>
            <Link href="https://adnene-guessoum.github.io/landing-page/">
              La fameuse page web
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Outils :</Meta>
            <Paragraph>
              <ChevronRightIcon />
              HTML, CSS ( FlexBox, etc. )
            </Paragraph>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Projet;
