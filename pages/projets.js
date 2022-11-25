// construire la page de présentation des différents projets
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { ProjetGridItem } from '../components/grid-item';

import thumbStar from '../public/images/projets/thumbnail_gh_cli.png';
import thumbDash from '../public/images/projets/thumbnail_dash.png';

const Projets = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projets
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjetGridItem
              id="github-cli"
              title="StarCount CLI"
              thumbnail={thumbStar}
            >
              Interface pour ligne de commande (Typer, Python) intéragissant
              avec Github.{' '}
            </ProjetGridItem>
          </Section>

          <Section>
            <ProjetGridItem
              id="dashboard"
              title="Dashboard Streamlit"
              thumbnail={thumbDash}
            >
              Dashboard prédiction risque de défaut sur crédit (modèle XGboost).
              Dashboard déployé sur Streamlit share, API Flask sur Heroku.
            </ProjetGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projets;
