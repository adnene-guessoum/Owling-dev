// construire la page de présentation des différents projets
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { ProjetGridItem } from '../components/grid-item';

import thumbStar from '../public/images/projets/thumbnail_gh_cli.png';
import thumbDash from '../public/images/projets/thumbnail_dash.png';
import thumbAws from '../public/images/projets/thumbnail_aws.png';
import thumbNlpCv from '../public/images/projets/thumbnail_nlp_cv.png';
import thumbClust from '../public/images/projets/thumbnail_clust.png';
import thumbLeet from '../public/images/projets/thumbnail_leet.png';
import thumbCalc from '../public/images/projets/thumbnail_calc.png';
import thumbTemp from '../public/images/projets/thumbnail_template.png';
import thumbEtch from '../public/images/projets/thumbnail_etch.png';

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
              title="Extraction features CV"
              thumbnail={thumbAws}
            >
              Extraire des features d&apos;images de fruits depuis AWS
              (stockage: S3, cluster: EMR, scripts: Pyspark, modèle: ResNet50).
            </ProjetGridItem>
          </Section>

          <Section>
            <ProjetGridItem
              id="nlp-images-class"
              title="Analyse NLP - CV"
              thumbnail={thumbNlpCv}
            >
              Etude de faisabilité moteur de classification automatique
              images-textes
            </ProjetGridItem>
          </Section>

          <Section>
            <ProjetGridItem
              id="clustering"
              title="Segmentation client"
              thumbnail={thumbClust}
            >
              Proposer une segmentation des types de clients d&apos;un site
              d&apos;e-commerce
            </ProjetGridItem>
          </Section>
        </SimpleGrid>

        <Divider />

        <Heading as="h3" fontSize={20} mt={4} mb={4}>
          Exercices
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjetGridItem
              id="leet-tdd"
              title="Leetcoding with TDD"
              thumbnail={thumbLeet}
            >
              Progresser en data structures et algorithmes tout en apprenant à
              écrire des tests unitaires en python
            </ProjetGridItem>
          </Section>

          <Section>
            <ProjetGridItem
              id="calculatrice"
              title="Calculatrice"
              thumbnail={thumbCalc}
            >
              Une calculatrice dans le navigateur grâce à Javascript
            </ProjetGridItem>
          </Section>

          <Section>
            <ProjetGridItem
              id="page-layout"
              title="Reproduire un template"
              thumbnail={thumbTemp}
            >
              Reproduire un template image en HTML et CSS
            </ProjetGridItem>
          </Section>

          <Section>
            <ProjetGridItem
              id="etch-a-sketch"
              title="Etch-a-sketch"
              thumbnail={thumbEtch}
            >
              Etch-a-sketch en javascript
            </ProjetGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projets;
