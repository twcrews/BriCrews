export type Body = {
	owner: string,
	title: string,
	header: string,
	tagline: string,
	sections: Section[]
};

export type Section = {
	id: string,
	type: string,
	title: string,
	content: HeroContent[] | PanelContent[] | TextContent[] | TileContent[] | ContactContent[] | FooterContent[]
};

export type HeroContent = {
	subtitle: string,
	buttons: ButtonContent[],
	image: string
};

export type PanelContent = {
	title: string,
	description: string,
	image: string
};

export type TextContent = {
	title: string,
	paragraphs: ParagraphContent[]
};

export type TileContent = {
	title: string,
	description: string
};

export type ContactContent = {
	// TODO
};

export type FooterContent = {
	// TODO
};

export type ButtonContent = {
	label: string,
	variant: string,
	anchor: string
};

export type ParagraphContent = {
	heading: string,
	text: string
}