// custom next.js app: 
// pour annuler app par défaut on ajoute ce fichier
// dans folder 'pages' (pages/_app.js)


// Intégrer chakra-ui à notre app
import { ChakraProvider } from '@chakra-ui/react'

// importer nos composants
import Layout from '../components/layouts/main'

const SiteWeb = ({ Component, pageProps, router }) => {
				// prop component réfère à la page active
				// naviguer sur les routes change la page active
				// toute prop envoyé à component est reçu par la page active
				
	return (
		<ChakraProvider>
			<Layout router={router}>
			<Component {...pageProps} key={router.route}/>
			</Layout>
		</ChakraProvider>
	)
}

export default SiteWeb
