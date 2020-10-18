import React from "react";
import theme from "theme";
import { Theme, Strong, Text, Box, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section } from "@quarkly/components";
import { MdFindReplace } from "react-icons/md";
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
			lg-height="400px"
			lg-padding="65px 0 64px 0"
		>
			<Override slot="SectionContent" lg-height="200px" lg-position="relative" lg-background="rgba(255, 255, 255, 0)" />
			<Box lg-display="flex" lg-height="100px" lg-background="rgba(202, 56, 56, 0)" lg-width="100%">
				<Box lg-width="33.33%">
					<Text lg-text-transform="uppercase" lg-font="200 25px/24px --fontFamily-sansVerdana">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							COMPANY NAME
						</Strong>
					</Text>
				</Box>
				<Box lg-width="33.33%" lg-background="rgba(64, 27, 27, 0)">
					<Menu lg-display="flex">
						<Override slot="link" lg-link-text-decoration-line="underline" lg-color="#ecf0f3" lg-font="300 16px/16px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif" />
						<Override slot="link-404">
							Home
						</Override>
						<Override slot="link-index">
							About
						</Override>
						<Override slot="item" lg-text-decoration-line="underline" />
						<Override slot="link-stage1">
							Products
						</Override>
					</Menu>
				</Box>
				<Box lg-width="33.33%" lg-display="inline">
					<Icon category="md" icon={MdFindReplace} lg-display="flex" lg-margin="15px 0px 0px 115px" />
					<Button
						lg-height="38px"
						lg-hover-background="#ccbf00"
						lg-border-width="1px"
						lg-border-style="solid"
						lg-border-color="#605c5c"
						lg-background="#252828"
						lg-padding="4px 24px 8px 24px"
						lg-text-align="center"
						lg-margin="-27px 0px 0px 150px"
						lg-display="flex"
					>
						Click Here!
					</Button>
				</Box>
			</Box>
			<Text lg-width="500px" lg-align-self="center" lg-position="relative" lg-top="60px">
				<Strong>
					We are giving you the best!
				</Strong>
			</Text>
			<Text lg-font="570 60px/3 --fontFamily-sansHeavy" lg-width="500px" lg-align-self="center">
				IT Products
			</Text>
			<Text lg-align-self="center" lg-width="500px" lg-height="7.988px" lg-margin="25px 0px 16px 0px">
				<Strong
					lg-height="auto"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 0px 0px 0px"
					lg-position="relative"
					lg-top="70px"
				>
					in the Shortest Time.
				</Strong>
			</Text>
			<Button lg-align-self="center">
				Button
			</Button>
		</Section>
	</Theme>;
});