// construire la page de présentation des différents projets
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { ProjetGridItem } from '../components/grid-item';

import thumbStar from '../public/images/projets/thumbnail_gh_cli.png';
import thumbDash from '../public/images/projets/thumbnail_dash.png';
import thumbAws from '../public/images/projets/thumbnail_aws.png';

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
              id="dashboard-streamlit"
              title="Dashboard Streamlit"
              thumbnail={thumbDash}
            >
              Dashboard prédiction risque de défaut sur crédit (modèle XGboost).
            </ProjetGridItem>
          </Section>

          <Section>
            <ProjetGridItem
              id="aws-pyspark"
              title="Extraction features"
              thumbnail={thumbAws}
            >
              Extraire des features d&apos;images de fruits depuis AWS
              (stockage: S3, cluster: EMR, scripts: Pyspark, modèle: ResNet50).
            </ProjetGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projets;
