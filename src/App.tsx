import * as Material from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import { useMediaQuery } from "@material-ui/core";
import data from "./Data.json";
import * as Types from "./Types";

function App() {
	const desktop = useMediaQuery("(min-width: 960px)");

	const headerStyle: React.CSSProperties = {
		fontFamily: "Merriweather",
		fontWeight: "bold",
		wordWrap: "break-word",
	};

	const getSectionById = (id: string): Types.Section | undefined =>
		data.body.sections.find((section) => section.id === id);

	return (
		<Material.Box>
			<Material.Box height="600px">
				<Material.Grid container alignItems="center" style={{ height: "100%" }}>
					<Material.Grid item xs style={{ textAlign: "center" }}>
						<>
							<Material.Typography variant="h1" style={headerStyle}>
								{getSectionById("hero")?.title}
							</Material.Typography>
							<Material.Typography variant="h4" style={headerStyle}>
								{
									(getSectionById("hero")?.content[0] as Types.HeroContent)
										.subtitle
								}
							</Material.Typography>
							<Material.Grid
								container
								justifyContent="center"
								style={{ gap: "10px" }}
							>
								<Material.Grid item>
									<Material.Button
										size="large"
										variant="contained"
										disableElevation
										color="primary"
									>
										About Me
									</Material.Button>
								</Material.Grid>
								<Material.Grid item>
									<Material.Button size="large" variant="outlined">
										Contact
									</Material.Button>
								</Material.Grid>
							</Material.Grid>
						</>
					</Material.Grid>
					<Material.Grid item xs="auto">
						<img
							src={
								(getSectionById("hero")?.content[0] as Types.HeroContent).image
							}
							alt="brianne"
							height="600px"
						/>
					</Material.Grid>
				</Material.Grid>
			</Material.Box>
			<Material.Box style={{ backgroundColor: "#005588", padding: "24px" }}>
				<Material.Grid
					container
					spacing={3}
					style={{ height: "100%" }}
					justifyContent="center"
				>
					{(getSectionById("leadership")?.content as Types.PanelContent[]).map(
						(content) => (
							<Material.Grid item>
								<Material.Card
									style={{
										height: "300px",
										textAlign: "center",
										padding: "24px",
										width: "300px",
									}}
								>
									<img
										src={content.image}
										height="100"
										style={{ borderRadius: "100%" }}
									/>
									<Material.Typography variant="h5" style={headerStyle}>
										{content.title}
									</Material.Typography>
									<Material.Typography>
										{content.description}
									</Material.Typography>
								</Material.Card>
							</Material.Grid>
						)
					)}
				</Material.Grid>
			</Material.Box>
		</Material.Box>
	);
}

export default App;
