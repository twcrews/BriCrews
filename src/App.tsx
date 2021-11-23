import {
	Button,
	Card,
	Container,
	Grid,
	Tooltip,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import {
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
} from "@mui/material/styles";
import { Leadership, About, Volunteer, Certifications } from "./Content";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
	const desktop = useMediaQuery("(min-width: 960px)");
	const mobile = useMediaQuery("(max-width: 600px)");
	const tablet = useMediaQuery("(min-width: 601px) and (max-width: 959px)");

	let appTheme = createTheme({
		typography: {
			h1: { fontFamily: "Merriweather", fontWeight: "bold" },
			h2: { fontFamily: "Merriweather", fontWeight: "bold" },
			h3: { fontFamily: "Merriweather", fontWeight: "bold" },
			h4: { fontFamily: "Merriweather", fontWeight: "bold" },
			h5: { fontFamily: "Merriweather" },
			h6: { fontFamily: "Merriweather" },
		},
	});
	appTheme = responsiveFontSizes(appTheme);

	return (
		<ThemeProvider theme={appTheme}>
			<Box sx={{ minHeight: "100vh", position: "relative" }}>
				<Box sx={{ paddingBottom: "170px" }}>
					<Box>
						<Grid container alignItems={"center"}>
							<Grid
								item
								xs
								sx={{
									textAlign: "center",
									paddingTop: mobile ? "32px" : undefined,
								}}
							>
								<>
									<Typography variant="h1">Brianne Crews</Typography>
									<Typography variant="h4">
										2022 Pharm.D./MBA Candidate
									</Typography>
									<Grid
										container
										justifyContent="center"
										gap={2}
										sx={{
											margin: "16px 0",
											marginBottom: mobile ? "32px" : undefined,
										}}
									>
										<Grid item>
											<Button
												size="large"
												variant="contained"
												disableElevation
												color="primary"
												href="#about"
											>
												About Me
											</Button>
										</Grid>
										<Grid item>
											<Tooltip title="Coming soon!">
												<div>
													<Button size="large" variant="outlined" disabled>
														Contact
													</Button>
												</div>
											</Tooltip>
										</Grid>
									</Grid>
								</>
							</Grid>
							{!mobile ? (
								<Grid item xs="auto" sx={{ marginBottom: "-4px" }}>
									<img
										src="res/hero.png"
										alt="brianne"
										height={tablet ? "400px" : "600px"}
									/>
								</Grid>
							) : null}
						</Grid>
					</Box>
					<Box
						sx={{
							backgroundColor: "#68c",
							padding: desktop ? "48px" : undefined,
						}}
					>
						<div style={{ marginBottom: mobile ? "-4px" : undefined }}>
							<Slider
								dots
								slidesToShow={6}
								slidesToScroll={6}
								autoplay
								autoplaySpeed={6000}
								responsive={[
									{
										breakpoint: 1920,
										settings: {
											slidesToShow: 5,
											slidesToScroll: 5,
										},
									},
									{
										breakpoint: 1600,
										settings: {
											slidesToShow: 4,
											slidesToScroll: 4,
										},
									},
									{
										breakpoint: 1300,
										settings: {
											slidesToShow: 3,
											slidesToScroll: 3,
										},
									},
									{
										breakpoint: 1000,
										settings: {
											slidesToShow: 2,
											slidesToScroll: 2,
										},
									},
									{
										breakpoint: 800,
										settings: {
											arrows: false,
											slidesToShow: 2,
											slidesToScroll: 2,
										},
									},
									{
										breakpoint: 600,
										settings: {
											arrows: false,
											slidesToShow: 1,
											slidesToScroll: 1,
										},
									},
								]}
							>
								{Leadership.map((content) => (
									<Box
										key={content.title}
										sx={{
											padding: mobile ? undefined : "16px",
											boxSizing: "border-box",
										}}
									>
										<Card
											square={mobile}
											elevation={mobile ? 0 : undefined}
											variant={mobile ? "outlined" : undefined}
											sx={{
												height: "400px",
												textAlign: "center",
												padding: "24px",
												boxSizing: "border-box",
												marginBottom: mobile ? "-4px" : undefined,
											}}
										>
											<Grid container gap={2}>
												<Grid item xs={12}>
													<div
														style={{
															backgroundImage: `url(${content.image})`,
															backgroundSize: "cover",
															height: "100px",
															width: "100px",
															backgroundRepeat: "no-repeat",
															borderRadius: "100%",
															margin: "0 auto",
														}}
													/>
												</Grid>
												<Grid item xs={12}>
													<Typography variant="h5">{content.title}</Typography>
												</Grid>
												<Grid item xs={12}>
													<Typography>{content.description}</Typography>
												</Grid>
											</Grid>
										</Card>
									</Box>
								))}
							</Slider>
						</div>
					</Box>
					<Box
						id="about"
						sx={{
							textAlign: "center",
							padding: "96px 0",
						}}
					>
						<Container>
							<Typography variant="h2" paragraph>
								{About.title}
							</Typography>
							<Typography variant="h6" paragraph>
								{About.description}
							</Typography>
						</Container>
					</Box>
					<Grid container spacing={{ xs: 0, xl: 2 }}>
						<Grid item xs={12} xl={6}>
							<Box
								sx={{
									backgroundColor: "#ccc",
								}}
							>
								<Grid container direction={{ xs: "row", sm: "row-reverse" }}>
									<Grid item xs={12} sm={6}>
										<Container sx={{ padding: `16px ${mobile ? "8px" : "0"}` }}>
											<Typography variant="h4" paragraph>
												Giving Back
											</Typography>
											<Typography paragraph>
												I've been blessed with the opportunity to volunteer my
												time and talents in my community.
											</Typography>
											{Volunteer.map((content) => (
												<div key={content.title}>
													<Typography variant="h6">{content.title}</Typography>
													<Typography variant="body2" paragraph>
														{content.description}
													</Typography>
												</div>
											))}
										</Container>
									</Grid>
									<Grid item xs={12} sm={6}>
										<img
											style={{
												height: "100%",
												width: "100%",
												marginBottom: "-4px",
												objectFit: "cover",
											}}
											src="res/covid-clinic.jpg"
											alt="covid clinic"
										/>
									</Grid>
								</Grid>
							</Box>
						</Grid>
						<Grid item xs={12} xl={6}>
							<Box
								sx={{
									backgroundColor: "#1b365d",
									color: "rgba(255, 255, 255, 0.8)",
								}}
							>
								<Grid container>
									<Grid item xs={12} sm={6}>
										<Container sx={{ padding: `16px ${mobile ? "8px" : "0"}` }}>
											<Typography variant="h4" paragraph>
												Certifications
											</Typography>
											{Certifications.map((content) => (
												<Grid container key={content} spacing={2}>
													<Grid item xs="auto">
														<Typography variant="h6">•</Typography>
													</Grid>
													<Grid item xs>
														<Typography variant="h6" paragraph>
															{content}
														</Typography>
													</Grid>
												</Grid>
											))}
										</Container>
									</Grid>
									<Grid item xs={12} sm={6}>
										<img
											style={{
												height: "100%",
												width: "100%",
												marginBottom: "-4px",
												objectFit: "cover",
											}}
											src="res/hazmat.jpg"
											alt="covid clinic"
										/>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Box>
				<footer
					style={{
						position: "absolute",
						bottom: 0,
						width: "100%",
						height: "130px",
						backgroundColor: "#ddd",
						padding: "40px 0 0",
						textAlign: "center",
					}}
				>
					<Typography paragraph variant="caption" style={{ color: "#666" }}>
						Created with ❤ by Brianne's husband
					</Typography>
					<Button
						variant="contained"
						disableElevation
						size="small"
						href="https://github.com/twcrews/BriCrews"
					>
						View Source
					</Button>
				</footer>
			</Box>
		</ThemeProvider>
	);
}

export default App;
