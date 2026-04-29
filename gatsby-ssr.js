import React from "react";

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <link key="favicon" rel="icon" type="image/png" href="/favicon.png" />,
  ]);
}
