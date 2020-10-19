import React from "react";
import theme from "theme";
import { Theme, Strong, Text, Box, Icon, Button, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section } from "@quarkly/components";
import { MdFindReplace, MdAdd } from "react-icons/md";
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
			height="450.41px"
		>
			<Override
				slot="SectionContent"
				lg-height="400px"
				lg-position="relative"
				lg-background="rgba(255, 255, 255, 0)"
				height="410.414px"
			/>
			<Box
				lg-display="flex"
				lg-height="100px"
				lg-background="rgba(202, 56, 56, 0)"
				lg-width="100%"
				display="flex"
			>
				<Box lg-width="33.33%" width="33.33%" display="flex" align-self="center">
					<Text lg-text-transform="uppercase" lg-font="200 25px/24px --fontFamily-sansVerdana">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-transform="uppercase"
							font="700 25px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
						>
							COMPANY NAME
						</Strong>
					</Text>
				</Box>
				<Box
					lg-width="33.33%"
					lg-background="rgba(64, 27, 27, 0)"
					width="33.33%"
					display="flex"
					position="relative"
					align-self="center"
					height="154.961px"
				>
					<Menu lg-display="flex" display="flex" align-self="center" text-decoration-line="underline">
						<Override
							slot="link"
							lg-link-text-decoration-line="underline"
							lg-color="#ecf0f3"
							lg-font="300 16px/16px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
							color="#d6dee3"
							link-color="#fbfbfb"
						/>
						<Override slot="link-404">
							Home
						</Override>
						<Override slot="link-index">
							About
						</Override>
						<Override slot="link-stage1">
							PRoducts
						</Override>
						<Override slot="link-contact">
							Contact
						</Override>
					</Menu>
				</Box>
				<Box
					lg-width="33.33%"
					lg-display="inline"
					width="33.33%"
					display="flex"
					position="relative"
				>
					<Icon
						category="md"
						icon={MdFindReplace}
						lg-display="flex"
						lg-margin="15px 0px 0px 115px"
						align-self="center"
						position="relative"
						left="236px"
					/>
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
						align-self="center"
						position="relative"
						left="257px"
						border-width="1px"
						border-style="solid"
						background="#282929"
					>
						Click to Login
					</Button>
				</Box>
			</Box>
			<Text
				lg-width="600px"
				lg-align-self="center"
				lg-position="relative"
				lg-top="59px"
				lg-bottom="-34px"
				align-self="center"
				width="850px"
			>
				<Strong width="950px" display="flex">
					We are giving you the best!
				</Strong>
			</Text>
			<Text
				lg-font="570 60px/3 --fontFamily-sansHeavy"
				lg-width="600px"
				lg-align-self="center"
				lg-position="relative"
				lg-height="84.098px"
				lg-top="-13px"
				align-self="center"
				width="850px"
				font="600 70px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
			>
				IT Products
			</Text>
			<Text
				lg-align-self="center"
				lg-width="600px"
				lg-height="7.988px"
				lg-margin="25px 0px 16px 0px"
				align-self="center"
				display="flex"
				width="850px"
			>
				<Strong
					lg-height="auto"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 0px 0px 0px"
					lg-position="relative"
					lg-top="-7px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					in the Shortest Time.
				</Strong>
			</Text>
			<Box
				lg-width="600px"
				lg-align-self="center"
				lg-height="50px"
				lg-position="relative"
				lg-top="11px"
				align-self="center"
				width="850px"
			>
				<Button lg-position="relative" lg-right="0px" background="#550c93">
					Click for More
				</Button>
				<Button
					lg-position="relative"
					lg-left="10px"
					lg-background="#131617"
					position="relative"
					left="15px"
					background="#2b2e30"
					border-width="1px"
					border-style="solid"
					border-color="#aca4a4"
				>
					Go to Next
				</Button>
			</Box>
		</Section>
		<Section
			padding="100px 0"
			sm-padding="40px 0"
			lg-background="rgba(24, 24, 25, 0.92)"
			height="230px"
			background="#464646"
		>
			<Override slot="SectionContent" align-items="center" lg-height="250px" height="245px" />
			<Box width="767px" height="230px" display="flex">
				<Box display="flex" width="30%" height="230px">
					<Text
						height="207px"
						position="relative"
						align-self="flex-start"
						width="200px"
						text-align="left"
						color="#f5eeee"
						font="15px sans-serif"
					>
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font-size="20px"
							>
								Custom Heading
							</Strong>
							<br />
							<br />
							This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.
						</Span>
					</Text>
				</Box>
				<Box display="flex" width="30%" height="230px" margin="0px 0px 0px 48px">
					<Text
						height="207px"
						position="relative"
						align-self="flex-start"
						width="200px"
						text-align="left"
						color="#f5eeee"
						font="15px sans-serif"
					>
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							margin="0px 0px 0px 1px"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font-size="20px"
							>
								Custom Heading
							</Strong>
							<br />
							<br />
							This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.
						</Span>
					</Text>
				</Box>
				<Box display="flex" width="30%" height="230px" margin="0px 0px 0px 40px">
					<Text
						height="207px"
						position="relative"
						align-self="flex-start"
						width="200px"
						text-align="left"
						color="#f5eeee"
						font="15px sans-serif"
					>
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font-size="20px"
							>
								Custom Heading
							</Strong>
							<br />
							<br />
							This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.
						</Span>
					</Text>
				</Box>
			</Box>
			<Box
				width="880px"
				height="250px"
				position="relative"
				top="152px"
				background="#075af7 linear-gradient(-50deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%) 0% 0%/cover no-repeat"
				display="flex"
			>
				<Box
					width="25%"
					height="80px"
					display="flex"
					align-self="center"
					position="relative"
					left="0px"
					border-right="1px solid"
					border-color="#ffffff"
				>
					<Text width="70%" color="#fff7f7" font="33px sans-serif" text-align="right">
						<Strong position="relative" right="0px" left="28px">
							350
						</Strong>
					</Text>
					<Text
						align-self="auto"
						order="0"
						display="block"
						position="relative"
						left="-43px"
						top="40px"
						width="128.344px"
						background="rgba(239, 230, 230, 0)"
						color="#ffffff"
					>
						Demonstration
					</Text>
					<Icon
						category="md"
						icon={MdAdd}
						color="#a6f306"
						position="relative"
						left="-47px"
					/>
				</Box>
				<Box
					width="25%"
					height="80px"
					display="flex"
					align-self="center"
					position="relative"
					left="0px"
					border-right="1px solid"
					border-color="#ffffff"
				>
					<Text width="70%" color="#fff7f7" font="33px sans-serif" text-align="right">
						<Strong
							position="relative"
							right="0px"
							left="28px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							275
						</Strong>
					</Text>
					<Text
						align-self="auto"
						order="0"
						display="block"
						position="relative"
						left="-43px"
						top="40px"
						width="128.344px"
						background="rgba(239, 230, 230, 0)"
						color="#ffffff"
					>
						Demonstration
					</Text>
					<Icon
						category="md"
						icon={MdAdd}
						color="#a6f306"
						position="relative"
						left="-47px"
					/>
				</Box>
				<Box
					width="25%"
					height="80px"
					display="flex"
					align-self="center"
					position="relative"
					left="0px"
					border-right="1px solid"
					border-color="#ffffff"
				>
					<Text width="70%" color="#fff7f7" font="33px sans-serif" text-align="right">
						<Strong
							position="relative"
							right="0px"
							left="28px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							512
						</Strong>
					</Text>
					<Text
						align-self="auto"
						order="0"
						display="block"
						position="relative"
						left="-43px"
						top="40px"
						width="128.344px"
						background="rgba(239, 230, 230, 0)"
						color="#ffffff"
					>
						Demonstration
					</Text>
					<Icon
						category="md"
						icon={MdAdd}
						color="#a6f306"
						position="relative"
						left="-47px"
					/>
				</Box>
				<Box
					width="25%"
					height="80px"
					display="flex"
					align-self="center"
					position="relative"
					left="0px"
					border-right="1px solid"
					border-color="#ffffff"
				>
					<Text width="70%" color="#fff7f7" font="33px sans-serif" text-align="right">
						<Strong
							position="relative"
							right="0px"
							left="28px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							489
						</Strong>
					</Text>
					<Text
						align-self="auto"
						order="0"
						display="block"
						position="relative"
						left="-43px"
						top="40px"
						width="128.344px"
						background="rgba(239, 230, 230, 0)"
						color="#ffffff"
					>
						Demonstration
					</Text>
					<Icon
						category="md"
						icon={MdAdd}
						color="#a6f306"
						position="relative"
						left="-47px"
					/>
				</Box>
			</Box>
		</Section>
		<Section background="#060606">
			<Override slot="SectionContent" height="500px" background="#060606" />
		</Section>
	</Theme>;
});