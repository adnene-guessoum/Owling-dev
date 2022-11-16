// Composant 'built-in' next.js pour ajouter (append) éléments à 'Head'
import Head from 'next/head'

// Box pour page d'accueil et Container pour cotrôler largeur d'un contenu
// cf composants chakra-ui
import { Box, Container } from '@chakra-ui/react'

const Main = ({children, router}) => {
	return (
		// main box avec padding-bottom
		<Box as="main" pb = {8}>
			<Head>
				// viewport basique tenant compte des écrans smartphone
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<title>Adnene Guessoum - Accueil</title>

				// width max taille medium (props du composant) + padding-top
				<Container maxW="container.md" pt={14}>
					{children}
				</Container>
			</Head>
		</Box>
	)
}

export default Main
