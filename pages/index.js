import NextLink from 'next/link';
import {
	Button,
	Container,
	Box,
	Heading,
	Image,
	Link,
	List,
	ListItem,
	SimpleGrid,
	Icon,
	useColorModeValue
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

import { GridItem } from '../components/grid-item'
import {
	IoLogoTwitter,
	IoLogoGithub,
	IoLogoDiscord,
	IoMailOutline
} from 'react-icons/io5'


const Page = () => {
	return (
		<Layout>
		<Container>
		<Box
		borderRadius="md"
		bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
		p={4}
		mb={6}
		align="center"
		>
		Bienvenue sur Owling dev! Je suis Adnene, développeur Python et
		javascript.
		</Box>
		<Box display={{ md: 'flex' }}>
		<Box flexGrow={1}>
		<Heading as="h2" variant="page-title">
		Adnene Guessoum
		</Heading>
		<p>
		Owling dev ( Développeur / Data Scientist / Lecteur passionée et
			joueur assidue )
		</p>
		</Box>

		<Box
		flexShrink={0}
		mt={{ base: 4, md: 0 }}
		ml={{ md: 6 }}
		align="center"
		>
		<Image
		borderColor="whiteAlpha.800"
		borderWidth={2}
		borderStyle="solid"
		maxWidth="100px"
		display="inline-block"
		borderRadius="full"
		src="/images/adnene.jpg"
		alt="Avatar"
		/>
		</Box>
		</Box>

		<Section delay={0.1}>
		<Heading as="h3" variant="section-title">
		Présentation
		</Heading>
		<Paragraph>
		Je suis un développeur Python et Javascript, orienté full-stack,
		ayant découvert les joies du code lors de ma formation en data
		science. Je me lance donc désormais dans toutes sortes de projets
		impliquant de construire des produits et des services digitaux
		(applications web, sites internets, tableau de bords pour analyse de
			données, et autres joyeuseries). Sur ce site, Je compte montrer un
		peu ce que je sais faire et ce sur quoi je travaille selon mes
		envies du moment.
		</Paragraph>
		<Box align="center" my={3}>
		<NextLink href="/projets">
		<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
		Portfolio
		</Button>
		</NextLink>
		</Box>
		</Section>

		<Section delay={0.2}>
		<Heading as="h3" variant="section-title">
		Technologies de prédilection:
		</Heading>
		<Paragraph>
		Je suis surtout habitué à Python et Javascript. Mon but est systématiquement
		de progresser en conduisant les projets de bout-en-bout jusqu&apos;au déploiement
		et en respectant les meilleurs pratiques de dévelopement dont j&apos;ai connaissance.		Chaque projet est ainsi l&apos;occasion pour moi d&apos;intégrer une technologie nouvelle	ou un outils nouveau à mon workflow. Prochain en lice: Développer un blog Django
		en utilisant Docker.
		</Paragraph>
	  </Section>	



		<Section delay={0.3}>
		<Heading as="h3" variant="section-title">
		Contacts et Réseaux sociaux
		</Heading>
		<Paragraph>
		Vous cherchez à embaucher un dévelopeur junior ou un data scientist? Vous
		recherchez un freelance pour des missions spécifiques ?
		Parlons-en ! N&apos;hésitez pas à me contacter :
		</Paragraph>
		<List>

		<ListItem>
		<Link href="https://github.com/adnene-guessoum" target="_blank">
		<Button
		variant="ghost"
		colorScheme="teal"
		leftIcon={<Icon as={IoLogoGithub} />}>
		Github (@adnene-guessoum)
		</Button>
		</Link>
		</ListItem>

		<ListItem>
		<Link href="https://twitter.com/GuessoumAdnene" target="_blank">
		<Button
		variant="ghost"
		colorScheme="teal"
		leftIcon={<Icon as={IoLogoTwitter} />}>
		Twitter (@GuessoumAdnene)
		</Button>
		</Link>
		</ListItem>

		<ListItem>
		<Link href="mailto:adnen.guessoum@gmail.com" target="_blank">
		<Button
		variant="ghost"
		colorScheme="teal"
		leftIcon={<Icon as={IoMailOutline} />}>
		adnen.guessoum@gmail.com
		</Button>
		</Link>
		</ListItem>

		<ListItem>
		<Link href="https://discordapp.com/users/738598257659346964" target="_blank">
		<Button
		variant="ghost"
		colorScheme="teal"
		leftIcon={<Icon as={IoLogoDiscord} />}>
		Discord (@Adnene)
		</Button>
		</Link>
		</ListItem>
		</List>
		</Section>



		<Section delay={0.4}>
		<Heading as="h3" variant="section-title">
		Mes Centres d&apos;intérêts
		</Heading>
		<Paragraph mb={18}>
		- Lire, Ecrire et Compter : Philosophie, Sciences humaines et
		sociales, Economie et essais politiques principalement, mais je suis
		pas contre un peu de littérature et de poésie de temps en temps.
		(N&apos;hésitez pas à venir faire un tour sur mon tout nouveau blog
			Django pour en parler!)
		</Paragraph>

		<Paragraph>
		- Jeux Vidéos : quand je trouve un peu de temps, j&apos;aime
		m&apos;arracher les cheveux qui me restent sur les boss des jeux
		FromSoftware.
		</Paragraph>

		<Paragraph>
		- Eternel étudiants de langues étrangères et de guitare : Je ne suis
		pas du tout doué mais l&apos;espoir fait vivre :).
		</Paragraph>
		</Section>


		<Section delay={0.5}>
		<Heading as="h3" variant="section-title">
		Ma Formation
		</Heading>

		<BioSection>
		<BioYear>2022</BioYear>
		Titre RNCP-7 Data Science - Formation Centrale Supélec /
		Openclassrooms
		</BioSection>

		<BioSection>
		<BioYear>2019</BioYear>
		Maitrise Econométrie et Statistiques - Université Paris I
	Panthéon-Sorbonne
		</BioSection>

		<BioSection>
		<BioYear>2015</BioYear>
		Licence Economie - Université Paris I Panthéon Sorbonne
		</BioSection>

		<BioSection>
		<BioYear>2013</BioYear>
		Reçu au concours d&apos;entrée à l&apos;Ecole Normale Supérieur de
	Cachan (désormais ENS Paris-Saclay), section Lettres et Sciences
	sociales.
		</BioSection>

		<BioSection>
		<BioYear>1993</BioYear>
		Né à Noisy-le-Sec (93, France)
		</BioSection>
		</Section>
		</Container>
		</Layout>
);
};

export default Page;
