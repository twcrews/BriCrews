import {
	Button,
	Card,
	Container,
	Grid,
	Icon,
	TextField,
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
import {
	Leadership,
	About,
	Volunteer,
	Certifications,
	Honors,
} from "./Content";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import { CheckCircle } from "@mui/icons-material";

function App() {
	const [name, setName] = React.useState<string>("");
	const [email, setEmail] = React.useState<string>("");
	const [message, setMessage] = React.useState<string>("");
	const [submitAttempted, setSubmitAttempted] = React.useState<boolean>(false);
	const [submitted, setSubmitted] = React.useState<boolean>(false);

	const emailValid =
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 255;
	const nameValid = name.length > 0 && name.length <= 50;
	const messageValid = message.length > 0 && message.length <= 1000;

	const handleSubmit = () => {
		setSubmitAttempted(true);
		if (emailValid && nameValid && messageValid) {
			setSubmitted(true);
			// submit logic
		}
	};

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
													<Button
														size="large"
														variant="outlined"
														href="#contact"
													>
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
					<Box>
						<Grid container spacing={{ xs: 0, xl: 2 }}>
							<Grid item xs={12} xl={6}>
								<Box
									sx={{
										backgroundColor: "#ccc",
									}}
								>
									<Grid container direction={{ xs: "row", sm: "row-reverse" }}>
										<Grid item xs={12} sm={6}>
											<Container
												sx={{ padding: `16px ${mobile ? "8px" : "0"}` }}
											>
												<Typography variant="h4" paragraph>
													Giving Back
												</Typography>
												<Typography paragraph>
													I've been blessed with the opportunity to volunteer my
													time and talents in my community.
												</Typography>
												{Volunteer.map((content) => (
													<div key={content.title}>
														<Typography variant="h6">
															{content.title}
														</Typography>
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
											<Container
												sx={{ padding: `16px ${mobile ? "8px" : "0"}` }}
											>
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
					<Box
						sx={{
							textAlign: "center",
							padding: "24px",
						}}
					>
						<Typography variant="h3" paragraph>
							Academic Honors
						</Typography>
						<Grid container spacing={2} justifyContent="center">
							{Honors.map((content) => (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									lg={3}
									xl={2}
									key={content.description}
									sx={{ color: content.color }}
								>
									<Card
										square
										sx={{
											height: "200px",
											color: content.color,
											borderBottom: `5px solid ${content.color}`,
										}}
									>
										<Box
											sx={{
												padding: "24px",
												height: "100%",
												boxSizing: "border-box",
											}}
										>
											<Grid
												container
												direction="column"
												spacing={0}
												sx={{ height: "100%" }}
											>
												<Grid item xs>
													<Icon fontSize="large" color="inherit">
														{content.icon}
													</Icon>
													<Typography color="WindowText">
														{content.description}
													</Typography>
												</Grid>
												<Grid item xs="auto">
													<Typography variant="h4" variantMapping={{ h4: "p" }}>
														{content.year}
													</Typography>
												</Grid>
											</Grid>
										</Box>
									</Card>
								</Grid>
							))}
						</Grid>
					</Box>
					<Box sx={{ backgroundColor: "white" }}>
						<Box
							sx={{
								textAlign: "center",
								padding: "24px",
								maxWidth: "540px",
								margin: "0 auto",
							}}
						>
							<Typography id="contact" variant="h2" paragraph>
								Contact
							</Typography>
							<Typography paragraph>
								Send me a message below and I'll get back to you as soon as
								possible!
							</Typography>
							<Grid container spacing={2} justifyContent="center">
								<Grid item xs={12} sm={6}>
									<TextField
										id="name-field"
										type="text"
										label="Name"
										required
										fullWidth
										value={name}
										onChange={(e) => setName(e.target.value.substring(0, 50))}
										error={!nameValid && submitAttempted}
										disabled={submitted}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="email-field"
										type="email"
										label="Email"
										required
										fullWidth
										value={email}
										onChange={(e) => setEmail(e.target.value.substring(0, 255))}
										error={!emailValid && submitAttempted}
										disabled={submitted}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										id="message-field"
										type="text"
										label="Message"
										required
										fullWidth
										multiline
										rows={8}
										helperText={`${(
											1000 - message.length
										).toLocaleString()} characters remaining`}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										error={!messageValid && submitAttempted}
										disabled={submitted}
									/>
								</Grid>
								<Grid item xs="auto">
									{submitted ? (
										<Grid
											container
											alignItems="center"
											justifyContent="center"
											spacing={1}
										>
											<Grid item xs="auto">
												<CheckCircle color="success" />
											</Grid>
											<Grid item xs>
												<Typography> Message sent</Typography>
											</Grid>
										</Grid>
									) : (
										<Button
											variant="contained"
											disableElevation
											color="primary"
											onClick={handleSubmit}
										>
											Send Message
										</Button>
									)}
								</Grid>
							</Grid>
						</Box>
					</Box>
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
