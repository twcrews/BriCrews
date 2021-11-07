import React from "react";
import { ButtonProps } from "@material-ui/core";

export type Body = {
	owner: string;
	title: string;
	header: string;
	tagline: string;
	sections: Section[];
};

export type Section = {
	id: string;
	type: string;
	title: string;
	content:
		| HeroContent[]
		| PanelContent[]
		| TextContent[]
		| TileContent[]
		| ContactContent[]
		| FooterContent[];
};

export type HeroContent = {
	subtitle?: string;
	buttons?: ButtonContent[];
	image?: ImageContent;
};

export type ButtonContent = {
	buttonProps?: ButtonProps;
	anchor?: string;
};

export type ImageContent = {
	source?: string;
	alt?: string;
	containerStyle?: React.CSSProperties;
	imageStyle?: React.CSSProperties;
};

export type PanelContent = {
	title?: string;
	description?: string;
	image?: ImageContent;
};

export type TextContent = {
	title?: string;
	paragraphs?: ParagraphContent[];
};

export type TileContent = {
	title?: string;
	description?: string;
};

export type ContactContent = {
	// TODO
};

export type FooterContent = {
	// TODO
};

export type ParagraphContent = {
	heading?: string;
	text?: string;
	topPhoto?: ImageContent;
	bottomPhoto?: ImageContent;
	leftPhoto?: ImageContent;
	rightPhoto?: ImageContent;
};
