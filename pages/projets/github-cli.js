import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projet';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Projet = () => {
  return (
    <Layout title="Starcount-CLI">
      <Container>
        <Title>
          StarCount CLI <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Interface de ligne de Commande pour intéragir avec Github. Disponible
          sur pypi (CI/CD github actions). Permet de modifier sa description
          (Github API) et/ou son statut utilisateur (GraphQl endpoint) depuis
          son terminal. Permet également de Compter le nombre d&apos;étoiles
          d&apos;un compte Github privé ou insitutionnel et bien d&apos;autres
          fonctionalités prochainement.
        </Paragraph>

        <WorkImage
          src="/images/projets/thumbnail_gh_cli.png"
          alt="Starcount CLI"
        />

        <List ml={4} my={4}>
          <ListItem mb={6}>
            <Meta>Pypi</Meta>
            <Link href="https://pypi.org/project/gh-star-count/">
              Disponible comme package Python
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Github </Meta>
            <Link href="https://github.com/adnene-guessoum/Github_cli">
              Code Source (Licence MIT)
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={6}>
            <Meta>Outils développement :</Meta>
            <Paragraph>
              Python, Typer, Github Actions( CI/CD ), Lint (mypy, black, flake8,
              pylint), Tests Unitaires (pytest), Deploiement et Versions
              (SemVer, twine, test-pypi, pypi) , Package management (poetry),
              API (Github API, GraphQL endpoint), Documentation (mkdocs,
              Changelogs, quickstart,...), Licence (MIT), Automatisation
              (Taskfile.yaml),...
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
