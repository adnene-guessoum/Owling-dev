import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projet';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Projet = () => {
  return (
    <Layout title="Leetcoding with TDD">
      <Container>
        <Title>
          DSA et unit tests <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Apprendre les structures de données et algorithmes en pratiquant
          l&apos;écriture de tests unitaires.
        </Paragraph>

        <WorkImage
          src="/images/projets/thumbnail_leet.png"
          alt="Logo leetcode"
        />

        <List ml={4} my={4}>
          <ListItem mb={6}>
            <Meta>Github :</Meta>
            <Link href="https://github.com/adnene-guessoum/TDD_leet">
              Repo
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Outils :</Meta>
            <Paragraph>
              <ChevronRightIcon />
              Python, pytest, Leetcode
            </Paragraph>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Projet;
