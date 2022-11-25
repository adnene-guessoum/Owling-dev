import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projet';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Projet = () => {
  return (
    <Layout title="Dashboard-streamlit">
      <Container>
        <Title>
          Dashboard octroi crédit <Badge>2022</Badge>
        </Title>
        <Paragraph>
          scoring de demande de crédit avec déploiement du modèle. déterminer si
          un client sera en mesure de rembourser un crédit et déployer un
          dashboard à l&apos;usage de l&apos;entreprise.
        </Paragraph>

        <WorkImage
          src="/images/projets/thumbnail_dash.png"
          alt="Dashboard-crédit"
        />

        <List ml={4} my={4}>
          <ListItem mb={6}>
            <Meta>Streamlit share</Meta>
            <Link href="https://adnene-guessoum-projet-scoring--appdashboard-withnavbar-povy74.streamlit.app/">
              Le Dashboard déployé
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Heroku (exemple client_id 332199)</Meta>
            <Link href="https://api-flask-scoring-credit.herokuapp.com/332199">
              API Flask (retourne la prédiction et les infos clients en JSON )
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Github </Meta>
            <Link href="https://github.com/adnene-guessoum/Projet_scoring_credit">
              Code Source (Dashboard)
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Github </Meta>
            <Link href="https://github.com/adnene-guessoum/scoring_credit_Flask_API">
              Code Source (Flask API)
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Données :</Meta>
            <Link href="https://www.kaggle.com/competitions/home-credit-default-risk/data">
              Kaggle
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Outils développement :</Meta>
            <Paragraph>
              Python, librairies data science (pandas, numpy, plt, sklearn...),
              Boruta-shap (interprétation xgboost), modèles (xgboost, dummy
              classifier, random forest, lightgbm, logistic regression), jupyter
              notebooks, Flask...
            </Paragraph>
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
