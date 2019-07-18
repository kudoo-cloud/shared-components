import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { BrowserRouter as Router } from "react-router-dom";
import License from "./index";

storiesOf("License", module)
  .add("Default", withInfo("Default License")(() => <License />))
  .add(
    "with Custom Pricing",
    withInfo("with Custom Pricing")(() => (
      <License
        currency="AUD"
        tiersPricing={[
          { pricing: 0, currency: "AUD" },
          { pricing: 25, currency: "AUD" },
          { pricing: 100, currency: "AUD" }
        ]}
      />
    ))
  );
