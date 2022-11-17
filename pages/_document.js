// pour intégrer color mode: update theme.js (config)
// ajouter colormodescript à l'application (next.js -> _document.js)
import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

export default class Document extends NextDocument {
	render () {
		return (
			<Html lang='en'>
				<Head />
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColormode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
