import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projet'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Projet = () => {
	return (
		<Layout title="Starcount-CLI">
		<Container>
		<Title>
		StarCount CLI <Badge>2022</Badge>
		</Title>
		<Paragraph>
		Interface de ligne de Commande pour intéragir avec Github. Compter le
		nombre d&apos;étoiles d&apos;un compte Github, modifier sa description (bio)
		ou son message et emoticone de statut utilisateur	depuis son terminal, et bien
		d&apos;autres fonctionalités prochainement.
		</Paragraph>
		<List ml={4} my={4}>

		<ListItem>
		<Meta>Pypi</Meta>
		<Link href='https://pypi.org/project/gh-star-count/'>Disponible comme package Python
		<ExternalLinkIcon mx="2px" />
		</Link>
		</ListItem>

		<ListItem>
		<Meta>Tech stack et Outils</Meta>
		<Paragraph>Python, Typer, Github Actions( CI/CD ), Lint (mypy, black, flake8, pylint),
		Tests Unitaires (pytest),	Deploiement et Versions (SemVer, twine, test-pypi, pypi)
		, Package management (poetry), API (Github API, GraphQL endpoint), Documentation
		(mkdocs, Changelogs, quickstart,...), Licence (MIT), Automatisation (Taskfile.yaml),...
		</Paragraph>
		</ListItem>

		<ListItem>
		<Meta>Blog Post</Meta>
		<Link href='/404'>
		En Construction (prochain projet Django)
		</Link>
		</ListItem>
		</List>

		<WorkImage src="/images/projets/thumbnail_gh_cli.png" alt="Starcount CLI" />

		</Container>
		</Layout>
	)
}

export default Projet;
