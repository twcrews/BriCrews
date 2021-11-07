import { Box } from "@mui/system";

export type SectionProps = {
	id?: string;
	title?: string;
	children?: React.ReactNode;
};

export function Section({children, id, title}: SectionProps) {
	return (
		<Box>
			<h2 id={id}>{title}</h2>
			{children}
		</Box>
	);
}
