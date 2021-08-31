import React from "react";
import { mount } from "@cypress/react";
import App from "../src/App";
test("renders learn react link", () => {
  mount(<App />);
  cy.get("a").contains("Learn React");
});
