import * as Icon from "@material-ui/icons";
import {
	Button,
	Card,
	createTheme,
	Grid,
	Typography,
	useMediaQuery,
} from "@material-ui/core";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

function App() {
	const desktop = useMediaQuery("(min-width: 960px)");
	const mobile = useMediaQuery("(max-width: 600px)");
	const tablet = useMediaQuery("(min-width: 601px) and (max-width: 959px)");

	const theme = createTheme({
		typography: {
			h1: {
				fontSize: "3rem",
				fontWeight: "bold",
			},
			fontFamily: "Roboto",
			fontSize: 14,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
		},
	});

	const headerStyle: React.CSSProperties = {
		fontFamily: "Merriweather",
		fontWeight: "bold",
		wordWrap: "break-word",
	};

	return (
		<Box>
			<Box height="600px">
				<Grid container alignItems="center" style={{ height: "100%" }}>
					<Grid item xs style={{ textAlign: "center" }}>
						<>
							<Typography variant="h1" style={headerStyle}>
								Brianne Crews
							</Typography>
							<Typography variant="h4" style={headerStyle}>
								2022 Pharm.D./MBA Candidate
							</Typography>
							<Grid container justifyContent="center" style={{ gap: "10px" }}>
								<Grid item>
									<Button
										size="large"
										variant="contained"
										disableElevation
										color="primary"
									>
										About Me
									</Button>
								</Grid>
								<Grid item>
									<Button size="large" variant="outlined">
										Contact
									</Button>
								</Grid>
							</Grid>
						</>
					</Grid>
					<Grid item xs="auto">
						<img src="res/hero.png" alt="brianne" height="600px" />
					</Grid>
				</Grid>
			</Box>
			<Box style={{ backgroundColor: "#005588", padding: "24px" }}>
				<Grid
					container
					spacing={3}
					style={{ height: "100%" }}
					justifyContent="center"
				>
					{[
						{ title: "yes", image: "res/cpfi-logo.png", description: "yes" },
					].map((content) => (
						<Grid item key={content.title}>
							<Card
								style={{
									height: "300px",
									textAlign: "center",
									padding: "24px",
									width: "300px",
								}}
							>
								<img
									src={content.image}
									alt={content.title}
									height="100"
									style={{ borderRadius: "100%" }}
								/>
								<Typography variant="h5" style={headerStyle}>
									{content.title}
								</Typography>
								<Typography>{content.description}</Typography>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}

export default App;
