This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I decided to use react framework to do this project, because it's easy to do
a single page application style. <br />
Link hosting:
https://cse135-hw4-eb854.firebaseapp.com/

If you want to run this project locally, then

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

-   I use firebase authentication to sign in a user with an email address and password.
    First of all, I added firebase into my react app.<br />
    In the Login.js at src/components/pages/Login.js<br />
    it's basic that pass email and password value into signInWithEmailAndPassword function below:<br />

    ```
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;

    });```

-   To login, please go to https://cse135-hw4-eb854.firebaseapp.com/login and enter email and password below<br />
    ```
    Email: vtl017@ucsd.edu
    password: qwerty
    ```

-   Diagram that shows how your PoC examples work together including their routes:<br />
    It included in the folder that named as diagram_poc.jpg<br />
    https://github.com/breezyltv/cse135-hw4/blob/master/diagram_poc.jpg

-   Discussion of the grid library you used:<br />
    I use ZingGrid js to make the grid, the reason that why I use it because,
    It's work on all frameworks and it runs perfectly on route /reports/speed.
    The gird has some great features like search, sort and pagination.

-   Discussion of the chart library you used:<br />
    I use Chartjs from https://www.chartjs.org/, it has a version that is react-chartjs-2,
     so it will work on my react app, you can see the demonstration of chart at /reports/browsers<br />
    This chart library have many chart style like column, pie, line.
    I can edit the color chart, title or enable the tooltip.

-   Diagram and wireframes to implement for final project:<br />
    Two PDF named as architecture_hw4.pdf and wireframe.pdf in this folder<br />
    https://github.com/breezyltv/cse135-hw4/blob/master/architecture_hw4.pdf
    https://github.com/breezyltv/cse135-hw4/blob/master/wireframe.pdf
