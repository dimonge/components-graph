# Components graph

The component graph is powered by d3 Force API used to build network graph that has a relationship via links with the nodes.

## How to run the app

The application is built using React and in order to run the app, you need to have node installed on your machine.

You can find that [https://nodejs.org/en/download/](here)

Follow the setups to run the app

### Installation

```javascript
yarn;
```

### Run the app

```javascript
yarn start
```

The app will be running in the default url `http://localhost:3000`

### Test functionality

- The graph will be loaded once the app loaded. The label is visible ontop of the nodes.
- There is a search functionality. You can input for example `user`, then click the

**Run tests**

- You can run the unit and integration using

```javascript
yarn test
```

View the code coverage

```javascript
yarn;
```

## Running in production

The app is hosted on Netlify and can be viewed [here](https://elegant-bohr-f8ee99.netlify.app/)

## Requirements

**Tools**

- React + Typescript
- Jest
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

- [x] Functional Search that highlights matching node names
  - [x] Add a search that user can select when the names is typed, returns not found if there is no match.
- [x] Unit test the graph functions and React components

**Sprint 5**

- [x] Code Refactoring
