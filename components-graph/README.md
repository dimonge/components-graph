# Components graph

This is a network graph powered by d3 Force API.

## How to run the app

The application is built using React and in order to run the app, you need to have node installed on your machine.

You can find that [https://nodejs.org/en/download/](here)

Follow the setups to run the app

1. Install the packages using the command `yarn`

```javascript
yarn;
```

2. Run the app using

```javascript
yarn start
```

3. The app will be running in the default url `http://localhost:3000`

4. The graph should be visible for you to see with the label

5. The search functionality

**Run tests**

- You can run the unit and integration using

```javascript
yarn test
```

- Run the end-to-end test

```javascript
yarn cypress-headless:test

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
- [x] Position each component vertically with the node.y values provided.
  - y coordinate
- [x] Position each component horizontally with the node.evolution values provided (0=left, 5=right)
- [x] Ensure nodes don't collide with each other.
- [x] Include a Readme that explains how to test the site.

**Sprint 3**

- [x] Works on mobile (responsive)
  - [x] Grid or Flexbox for responsive design

**Sprint 4**

- [ ] Functional Search that highlights matching node names
  - [ ] Add a `highlightSearch: true` attribute to the nodes, hight the node with highlight color code on the graph.
  - [ ] Add a autocomplete search that user can select when the names is typed, returns not found if there is no match.
```
