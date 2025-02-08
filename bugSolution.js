const express = require('express');
const app = express();
const port = 3000;

const routes = [
  { path: '/route1', handler: (req, res) => res.send('Route 1') },
  { path: '/route2', handler: (req, res) => res.send('Route 2') },
  // Add more routes here...
];

function loadRoutes(router, routes) {
  routes.forEach(route => {
    router.get(route.path, route.handler);
  });
}

const router = express.Router();
loadRoutes(router, routes);

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This example uses express.Router() to group routes and a function to dynamically load them.  This approach makes the express app start faster.
//It will still have issues if the number of routes is extremely high.  Consider other strategies (like using a database to store and serve routes) for exceptionally large numbers of routes.