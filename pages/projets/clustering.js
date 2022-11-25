import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projet';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Projet = () => {
  return (
    <Layout title="Segmentation Clients e-commerce">
      <Container>
        <Title>
          Segmentez les clients selon comportement<Badge>2022</Badge>
        </Title>
        <Paragraph>
          Se servir de la base de donnée client d&apos;un site d&apos;e-commerce
          brésilien pour prédire des clusters de clients types à l&aposusage de
          l&apos;équipe Marketting
        </Paragraph>

        <WorkImage
          src="/images/projets/thumbnail_clust.png"
          alt="Illustration base de donnée"
        />

        <List ml={4} my={4}>
          <ListItem mb={6}>
            <Meta>Github :</Meta>
            <Link href="https://github.com/adnene-guessoum/Projet_segmentation_client">
              Source (scripts sans les supports de présentation)
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Données :</Meta>
            <Link href="https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce">
              Kaggle
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Outils :</Meta>
            <List>
              <ListItem m={3}>
                <ChevronRightIcon />
                Python, librairies data science (pandas, numpy, plt,
                sklearn...),
              </ListItem>

              <ListItem m={3}>
                <ChevronRightIcon />
                Segmentation / réduction de dimension: RFM, K-Means,
                k-prototypes, DBScan, ACP
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                Graphs et scores: Boxplot/lineplots , ARI, silhouette
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Projet;
