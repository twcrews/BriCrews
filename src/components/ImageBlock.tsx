import { Grid, Box, Container, Typography } from "@mui/material";

export type ImageBlockProps = {};

export function ImageBlock({}: ImageBlockProps) {
	return (
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
							I've been blessed with the opportunity to volunteer my time and
							talents in my community.
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
	);
}
