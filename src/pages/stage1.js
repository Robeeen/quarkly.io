import React from "react";
import theme from "theme";
import { Theme, Text, Box, Strong, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
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
			<Box
				lg-width="150px"
				lg-height="25px"
				lg-align-self="flex-end"
				lg-border-width="1px"
				lg-border-style="solid"
				lg-position="relative"
				lg-top="42px"
			>
				<Text
					lg-position="relative"
					lg-top="-15px"
					lg-left="19px"
					lg-width="120px"
					lg-margin="14px 0px 16px 0px"
				>
					Click to Login
				</Text>
			</Box>
			<Menu lg-display="flex" lg-width="350px" lg-align-self="center">
				<Override slot="link-404">
					Home
				</Override>
				<Override slot="link-index">
					Company
				</Override>
				<Override slot="link-stage1">
					About
				</Override>
				<Override
					slot="link"
					lg-link-text-decoration-line="initial"
					lg-link-color="#bdc7d1"
					lg-text-decoration-line="underline"
					lg-color="#fff"
				/>
			</Menu>
			<Text
				lg-margin="-36px 0px 16px 0px"
				lg-width="180px"
				lg-display="flex"
				lg-align-self="flex-start"
				lg-text-transform="uppercase"
				lg-font="300 20px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					lg-width="180px"
				>
					COMPANY NAME
				</Strong>
			</Text>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Box />
	</Theme>;
});