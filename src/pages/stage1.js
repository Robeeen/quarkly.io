import React from "react";
import theme from "theme";
import { Theme, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Override slot="SectionContent" lg-height="200px" lg-position="relative" lg-background="rgba(255, 255, 255, 0)" />
			<Box lg-display="flex" lg-height="100px" lg-background="#e82f2f">
				<Box lg-width="33.33%" lg-background="#cbb2b2" />
				<Box lg-width="33.33%" lg-background="#401b1b" />
				<Box lg-width="33.33%" />
			</Box>
		</Section>
		<Button>
			Button
		</Button>
	</Theme>;
});