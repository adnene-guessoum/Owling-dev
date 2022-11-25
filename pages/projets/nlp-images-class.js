import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projet';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Projet = () => {
  return (
    <Layout title="Analyse NLP - Computer Vision">
      <Container>
        <Title>
          Etude moteur de classification <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Tester différents modèles NLP et CV pour étude de faisabilité
          d&apos;un moteur de classification automatique de produits pour un
          site d&apos;e-commerce.
        </Paragraph>

        <WorkImage
          src="/images/projets/thumbnail_nlp_cv.png"
          alt="illustration modèle VGG-16"
        />

        <List ml={4} my={4}>
          <ListItem mb={6}>
            <Meta>Github :</Meta>
            <Link href="https://github.com/adnene-guessoum/Projet_NLP_image_class">
              Source
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
                NLP: CountVect, tf-idf, Word2vec, Bert, USE
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                Image: SIFT, VGG16 (Deep learning for feature extraction)
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                segmentation: Kmeans
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                reduction de dimension: ACP, t-sne (visualisation)
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                score: ARI, accuracy
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                librairies spécifiques: nltk, cv2
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Projet;
