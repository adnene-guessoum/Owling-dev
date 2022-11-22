import NextLink from 'next/link'
import {
	Box,
	Heading,
	Text,
	Container,
	Divider,
	Button
} from '@chakra-ui/react'

const NotFound = () => {
	return (

		<Container>
			<Heading as="h1">Page Indisponible</Heading>
		<Text>La page demandée est introuvable.</Text>
		<Divider my={6} />

		<Box my={6} align="center">
			<NextLink href="/">
		<Button colorScheme="teal">Retourner sur la page d&apos;accueil</Button>
		</NextLink>
		</Box>
		</Container>
	)
}

export default NotFound
