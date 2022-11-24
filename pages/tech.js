import NextLink from 'next/link';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { TechStackGridItem } from '../components/grid-item';

import pythonImg from '../public/images/tech/icons8-python-100.png';
import vimImg from '../public/images/tech/vim.png';
import githubImg from '../public/images/tech/icons8-github-100.png';
import VsImg from '../public/images/tech/icons8-visual-studio-96.png';
import condaImg from '../public/images/tech/icons8-anaconda-96.png';
import jupyImg from '../public/images/tech/icons8-jupyter-96.png';
import poetryImg from '../public/images/tech/poetry.png';
import taskImg from '../public/images/tech/Task.png';
import npmImg from '../public/images/tech/icons8-npm-96.png';
import wslImg from '../public/images/tech/wsl.png';

import jsImg from '../public/images/tech/icons8-javascript-96.png';
import htmlImg from '../public/images/tech/icons8-html-5-96.png';
import cssImg from '../public/images/tech/icons8-css3-96.png';
import awsImg from '../public/images/tech/icons8-amazon-web-services-96.png';
import herokuImg from '../public/images/tech/icons8-heroku-100.png';
import streamlitImg from '../public/images/tech/streamlit-mark-color.png';
import nextImg from '../public/images/tech/next-js.png';
import reactImg from '../public/images/tech/react.png';
import chakraImg from '../public/images/tech/chakra-ui.png';
import threeImg from '../public/images/tech/three-js.png';
import blenderImg from '../public/images/tech/blender.png';
import framerImg from '../public/images/tech/framer-motion.png';
import voxelImg from '../public/images/tech/magicaVoxel.png';

import numpyImg from '../public/images/tech/numpy.png';
import pandasImg from '../public/images/tech/pandas.png';
import hadoopImg from '../public/images/tech/hadoop.png';
import flaskImg from '../public/images/tech/flask.png';
import pltImg from '../public/images/tech/matplotlib.png';
import sklearnImg from '../public/images/tech/scikit-learn.png';
import tfImg from '../public/images/tech/tensorflow.png';
import djangoImg from '../public/images/tech/django.png';
import pysparkImg from '../public/images/tech/pyspark.png';
import sqlImg from '../public/images/tech/sql.png';

import {
  Container,
  Heading,
  Box,
  Button,
  SimpleGrid,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

const Tech = () => (
  <Layout title="Outils">
    <Container>
      <Heading as="h2" fontSize={30} mb={4} variant="section-title">
        Technologies et Outils :
      </Heading>
      <Paragraph>
        Je viens d&apos;abord d&apos;une formation de data scientist et
        j&apos;ai surtout une expérience en analyse quantitative/analyse de
        données. J&apos;ai appris, ces derniers mois, à apprécier le code et la
        production de projets et d&apos;applications web. Mon objectif est donc
        d&apos;en faire une véritable carrière. Dans cette perspective, je
        travaille régulièrement sur différents projets pour intégrer de nouveaux
        concepts, bonnes pratiques de développement et outils à mes compétences
        techniques. Espérons que cela soit convaincant !
      </Paragraph>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <span>
          Je sépare donc ici chacune des technologies/outils présentés en deux
          catégories:
        </span>

        <List mt={2} mb={2}>
          <ListItem bg="#03fcc64D" borderRadius="lg" p={1} mb={2}>
            1) Ceux que j&apos;ai l&apos;habitude d&apos;utiliser régulièrement
          </ListItem>

          <ListItem bg="#b434eb4D" borderRadius="lg" p={1}>
            2) Ceux que j&apos;ai déja utilisé dans au moins un projet arrivé à
            son terme (déploiement ou dashboard/analyse)
          </ListItem>
        </List>

        <span>
          {' '}
          La plupart de ces projets sont disponibles dans la section portfolio
          du site :{' '}
        </span>

        <Box align="center" my={4}>
          <NextLink href="/projets" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Portfolio
            </Button>
          </NextLink>
        </Box>
      </Box>

      <Paragraph>
        Icons by{' '}
        <a target="_blank" rel='noreferrer' href="https://icons8.com">
          Icons8
        </a>
      </Paragraph>

      <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Général :
        </Heading>

        <SimpleGrid
          columns={[1, 1, 4]}
          spacing={4}
          bg="#03fcc64D"
          borderRadius="lg"
          alignItem="center"
          p={2}
          pl={10}
          mb={3}
        >
          <TechStackGridItem title="Github" thumbnail={githubImg} />

          <TechStackGridItem title="Vim" thumbnail={vimImg} />

          <TechStackGridItem title="VsCode" thumbnail={VsImg} />

          <TechStackGridItem title="Jupyter" thumbnail={jupyImg} />

          <TechStackGridItem title="Conda" thumbnail={condaImg} />

          <TechStackGridItem title="Poetry" thumbnail={poetryImg} />

          <TechStackGridItem title="npm" thumbnail={npmImg} />

          <TechStackGridItem title="Task" thumbnail={taskImg} />

          <TechStackGridItem title="WSL 2" thumbnail={wslImg} />
        </SimpleGrid>

        <SimpleGrid
          columns={[1, 1, 4]}
          spacing={4}
          bg="#b434eb4D"
          borderRadius="lg"
          alignItem="center"
          p={2}
          pl={10}
        >
          <TechStackGridItem title="AWS" thumbnail={awsImg} />

          <TechStackGridItem title="Streamlit" thumbnail={streamlitImg} />

          <TechStackGridItem title="Heroku" thumbnail={herokuImg} />
        </SimpleGrid>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Front-End :
        </Heading>

        <SimpleGrid
          columns={[1, 1, 4]}
          spacing={4}
          bg="#03fcc64D"
          borderRadius="lg"
          alignItem="center"
          p={2}
          pl={10}
          mb={4}
        >
          <TechStackGridItem title="HTML" thumbnail={htmlImg} />

          <TechStackGridItem title="CSS" thumbnail={cssImg} />

          <TechStackGridItem title="JS" thumbnail={jsImg} />
        </SimpleGrid>

        <SimpleGrid
          columns={[1, 1, 4]}
          spacing={4}
          bg="#b434eb4D"
          borderRadius="lg"
          alignItem="center"
          p={2}
          pl={10}
        >
          <TechStackGridItem title="React" thumbnail={reactImg} />

          <TechStackGridItem title="Next.js" thumbnail={nextImg} />

          <TechStackGridItem title="Chakra UI" thumbnail={chakraImg} />

          <TechStackGridItem title="Framer motion" thumbnail={framerImg} />

          <TechStackGridItem title="Magical Voxel" thumbnail={voxelImg} />

          <TechStackGridItem title="Blender" thumbnail={blenderImg} />

          <TechStackGridItem title="Three.js" thumbnail={threeImg} />
        </SimpleGrid>

        <Box></Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Back-end / Data Science :
        </Heading>

        <SimpleGrid
          columns={[1, 1, 4]}
          spacing={4}
          bg="#03fcc64D"
          borderRadius="lg"
          alignItem="center"
          p={2}
          pl={10}
          mb={4}
        >
          <TechStackGridItem title="Python" thumbnail={pythonImg} />

          <TechStackGridItem title="Pandas" thumbnail={pandasImg} />

          <TechStackGridItem title="SQL" thumbnail={sqlImg} />

          <TechStackGridItem title="Numpy" thumbnail={numpyImg} />

          <TechStackGridItem title="Matplotlib" thumbnail={pltImg} />

          <TechStackGridItem title="Scikit-Learn" thumbnail={sklearnImg} />

          <TechStackGridItem title="Tensorflow" thumbnail={tfImg} />
        </SimpleGrid>

        <SimpleGrid
          columns={[1, 1, 4]}
          spacing={4}
          bg="#b434eb4D"
          borderRadius="lg"
          alignItem="center"
          p={2}
          pl={10}
        >
          <TechStackGridItem title="Flask" thumbnail={flaskImg} />

          <TechStackGridItem title="Django" thumbnail={djangoImg} />

          <TechStackGridItem title="AWS S3/EMR" thumbnail={awsImg} />

          <TechStackGridItem title="PySpark" thumbnail={pysparkImg} />

          <TechStackGridItem title="Hadoop" thumbnail={hadoopImg} />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Tech;
