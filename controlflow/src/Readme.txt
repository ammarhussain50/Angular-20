for bootsrtrap:
npm install bootstrap


in angular.json

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],


in main.ts
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
for Bootstrap components to work properly, you need to include the Bootstrap JavaScript file in your project.