import * as Material from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import { useMediaQuery } from '@material-ui/core';
import Data from './Data.json';

function App() {
	const desktop = useMediaQuery("(min-width: 960px)");

	const headerStyle: React.CSSProperties = { 
		fontFamily: "Merriweather", 
		fontWeight: "bold",
		wordWrap: "break-word"
	};

	return (
		<Material.Box>
			
		</Material.Box>
	);
}

export default App;
