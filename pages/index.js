import { Container, Box, Heading, Image, useColorModeValue} from '@chakra-ui/react';

const Page = () => {
	return (
		<Container>
		<Box borderRadius="md"
		bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
		p={4}
		mb={6}
		align="center">
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
		<Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
		<Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid"
		maxWidth="100px" display="inline-block" borderRadius="full"
		src="/images/adnene.jpg" alt="Avatar" />
		</Box>
		</Box>
		</Container>
	)
}

export default Page
