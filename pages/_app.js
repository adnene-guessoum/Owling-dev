// custom next.js app:
// pour annuler app par défaut on ajoute ce fichier
// dans folder 'pages' (pages/_app.js)

// Intégrer chakra-ui à notre app
import { ChakraProvider } from '@chakra-ui/react';

// importer nos composants
import Layout from '../components/layouts/main';

// compatibilité chakra mode nuit
import theme from '../libs/theme';

// fonts google API
import Fonts from '../components/fonts';

// transition animée entre les pages
import { AnimatePresence } from 'framer-motion';

const SiteWeb = ({ Component, pageProps, router }) => {
  // prop component réfère à la page active
  // naviguer sur les routes change la page active
  // toute prop envoyé à component est reçu par la page active

  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default SiteWeb;
