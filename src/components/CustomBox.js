import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"height": "70px",
	"border-style": "solid",
	"border-color": "--color-grey"
};
const overrides = {};

const CustomBox = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(CustomBox, { ...Box,
	defaultProps,
	overrides
});
export default CustomBox;