This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- I decided to use react framework to do this project, because it's easy to do
a single page application style. For homework 5, I have to spend more time to learn react-redux to pass data between components and also learn how to make an Admin by using Cloud Function. I think that use Reactjs, firebase, firestore and cloud funtions is convenient because you don't worry about CORS if you build traditional web by using endpoint, it may get more trouble. Also, Reactjs and firebase are built same language. It help the web run fast and firebase is asynchronous, so you don't worry about when update, create or delete data, it will automatically update the change immediately on your web <br />
- Link hosting:
  ```
  https://cse135-hw4-eb854.firebaseapp.com/
  ```

If you want to run this project locally, then

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

-   To login, please go to https://cse135-hw4-eb854.firebaseapp.com/login and enter email and password below<br />
    Admin account:
    ```
    Email: vtl017@ucsd.edu
    password: qwerty
    ```
    Normal account:
    ```
    Email: darthvader@galaxy.com
    password: qwerty
    ```
-   You can sign up a new account, go to /signup. When you signed in, you only view your performance, browser data
    and cannot see other user's information.
-   When you logged in by using Admin account, you can see all users and click detail button to show each user data.
    Admin can gain or delete other normal users or remove session and cannot delete or edit other Admin, please go to /manager page.

-   Diagram that shows how your PoC examples work together including their routes:<br />
    It included in the folder that named as diagram_poc.jpg<br />

-   Diagram and wireframes to implement for final project:<br />
    Two PDF named as architecture_hw5.pdf and wireframe.pdf in this folder<br />
