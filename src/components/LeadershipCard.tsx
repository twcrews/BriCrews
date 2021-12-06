import { Card, Grid, Typography } from "@mui/material";
import { SxProps } from "@mui/system";

export type LeadershipCardProps = {
	children: string;
	title?: string;
	image?: string;
	square?: boolean;
	elevation?: number;
	variant?: "elevation" | "outlined";
	onClick?: () => void;
	sx?: SxProps;
};

export function LeadershipCard({
	children,
	title,
	image,
	square,
	elevation,
	variant,
	onClick,
	sx,
}: LeadershipCardProps) {
	return (
		<Card
			square={square}
			elevation={elevation}
			variant={variant}
			onClick={onClick}
			sx={sx}
		>
			<Grid container gap={2}>
				{image ? (
					<Grid item xs={12}>
						<div
							style={{
								backgroundImage: `url(${image})`,
								backgroundSize: "cover",
								height: "100px",
								width: "100px",
								backgroundRepeat: "no-repeat",
								borderRadius: "100%",
								margin: "0 auto",
							}}
						/>
					</Grid>
				) : null}
				{title ? (
					<Grid item xs={12}>
						<Typography variant="h5">{title}</Typography>
					</Grid>
				) : null}
				<Grid item xs={12}>
					<Typography>{children}</Typography>
				</Grid>
			</Grid>
		</Card>
	);
}
