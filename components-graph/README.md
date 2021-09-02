# Components graph

## Requirements

**Tools**

- React + Typescript
- Jest
- Cypress for end-to-end test
- Nyc for code coverage
- Nelify to host

- **Features**

- [x] Basic structure & elements from the wireframe.
- [x] Use D3.js to display the graph from "components.json" (d3js.org).
- [x] Name each component with the node.name provided.
- [x] Colour each component with the node.color provided.
- [x] Position each component vertically with the node.y values provided.
- [x] Position each component horizontally with the node.evolution values provided (0=left, 5=right)
- [x] Ensure nodes don't collide with each other.
- [x] Include a Readme that explains how to test the site.

**Nice to have**

- [x] Works on mobile (responsive)
- [x] Automated tests
- [x] Functional Search that highlights matching node names

## Kanban board

**Sprint 1**

- [x] Environment deployment
  - [x] Local dev
    - [x] Jest for unit and integration test
      - [x] Unit test with Jest
      - [x] Integration test with Jest
    - [x] Cypress for end-to-end test
      - [x] End-to-end tests with Cypress
    - [x] Code coverage for unit, and integration test
      - [x] Code coverage with jest
  - [x] CI
    - [x] Automate test and code coverage with Github actions
      - [x] Run unit and test with jest
      - [x] Run unit & integration test code coverage
      - [x] Run the end-to-end test cases
    - [x] Deploy to Netlify
      - [x] Trigger auto deployment to Netlify

**Sprint 2**

- [x] Basic structure & elements from the wireframe.
- [x] Use D3.js to display the graph from "components.json" (d3js.org).
- [x] Name each component with the node.name provided.
  - use label to add the node.name
- [x] Colour each component with the node.color provided.
- [ ] Position each component vertically with the node.y values provided.
  - y coordinate
- [ ] Position each component horizontally with the node.evolution values provided (0=left, 5=right)
  - x coordinate
  - 0, 1, 2, 3, 4, 5
- [x] Ensure nodes don't collide with each other.
- [ ] Include a Readme that explains how to test the site.

**Sprint 3**

- [ ] Works on mobile (responsive)
  - [ ] Grid or Flexbox for responsive design

**Sprint 3**

- [ ] Functional Search that highlights matching node names
  - [ ] Add a `highlightSearch: true` attribute to the nodes, hight the node with highlight color code on the graph.
  - [ ] Add a autocomplete search that user can select when the names is typed, returns not found if there is no match.
