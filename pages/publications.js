import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbDash from '../public/images/projets/thumbnail_dash.png'
import thumbCLI from '../public/images/projets/thumbnail_gh_cli.png'

const Publications = () => (
	<Layout title="publications">
	<Container>
	<Heading as="h3" fontSize={20} mb={3}>
	Publications populaires
	</Heading>

	<Section delay={0.1}>

	<SimpleGrid columns={[1,2,2]} gap={6}>
		<GridItem title="Mon Dashboard Streamlit"
		thumbnail={thumbDash} href="/404" />

		<GridItem title="Mon Interface Github"
		thumbnail={thumbCLI} href="/404" />

	</SimpleGrid>

	</Section>

	</Container>
	</Layout>
)

export default Publications;
