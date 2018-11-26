import React from "react";
import EmailInputFields from "./index";
import { render } from "enzyme";
import { action } from "@storybook/addon-actions";

import { I18nProvider } from "lingui-react";
import KudooThemeProvider, { theme } from "src/config/theme";
import toJson from "enzyme-to-json";

it("renders EmailInputFields", () => {
	const wrapper = render(
		<I18nProvider language="en" >
			<KudooThemeProvider theme={theme}>
				<div style={{ margin: 10 }}>
					<EmailInputFields />
				</div>
			</KudooThemeProvider>
		</I18nProvider>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});
