import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projet';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Projet = () => {
  return (
    <Layout title="AWS feature extraction">
      <Container>
        <Title>
          Traitement Images AWS et Spark <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Mettre en place un environement Big Data dans le cloud grâce à AWS et
          gérer la parallélisation des calculs sur un cluster EMR avec Pyspark.
          stockage des données sur AWS S3 et gestion des autorisations (IAM).
        </Paragraph>

        <WorkImage
          src="/images/projets/thumbnail_aws.png"
          alt="AWS extraction features"
        />

        <List ml={4} my={4}>
          <ListItem mb={6}>
            <Meta>Github :</Meta>
            <Link href="https://github.com/adnene-guessoum/Projet_aws_pyspark_fruits">
              Code Source
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Données :</Meta>
            <Link href="https://www.kaggle.com/datasets/moltean/fruits">
              Kaggle
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Procédure projet :</Meta>
            <List>
              <ListItem m={3}>
                <ChevronRightIcon />
                Mise en place d’un environnement Linux (WSL2, Ubuntu) avec AWS
                CLI configurée (clefs secrètes, etc...) pour interagir avec aws.
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                Construction des différents scripts python (pyspark) pour gérer
                l’ensemble des étapes du projet sans interventions manuels sur
                les données.
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                Chargement S3 des données, script, config EMR, amorçage
                lancement serveur.
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                Lancement d’un cluster EMR configuré : m5.xlarge, emr 6.7.0,
                Spark Hadoop 3.2.1, Tensorflow
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                Accès à la master node via ssh depuis la ligne de commande.
                Lancement du script : « spark-submit »
              </ListItem>
              <ListItem m={3}>
                <ChevronRightIcon />
                Vérification de l’écriture des résultats dans s3 (parquet) et
                résiliation du cluster.
              </ListItem>
            </List>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Blog Post</Meta>
            <Link href="/404">En Construction (prochain projet Django)</Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Projet;
