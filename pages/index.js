import { Container, Box, Heading } from '@chakra-ui/react'


const Page = () => {
	return (
		<Container>
			<Box borderRadius='md' bg='red' p={4} mb={6} align="center">
				Bienvenue sur Owling dev! Je suis Adnene,
				développeur Python et javascript.
			</Box>

			<Box display={{md:'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Adnene Guessoum
					</Heading>
		<p>Owling dev (Développeur / Data Scientist / Lecteur passionée
			et joueur assidue)</p>
				</Box>
			</Box>
		</Container>
	) 
}

export default Page
