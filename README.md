This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Web tracker is a simple project that can track users' activities such as counting number of clicks, number of loading, keydown and getting browser's info. It's managed by admin and can see all of user's info.
- I decided to use react framework to do this project, because it's easy to do
  a single page application style. For homework 5, I have to spend more time to learn react-redux to pass data between components and also learn how to make an Admin by using Cloud Function.
- I think that use Reactjs, firebase, firestore and cloud funtions are convenient because they are built by the same Javascript language. It helps web developer that builds website faster, run faster and firebase supported real time database, so you don't worry about when update, create or delete data, it will automatically update the change immediately on your web. Asynchronous is a feature in javascript, we have to deal with it by using callback to solve or we can use Promise and async/await <br />
- Link hosting:
  ```
  https://cse135-hw4-eb854.firebaseapp.com/
  ```

If you want to run this project locally, then

In the project directory, you can run:

### 'npm install'

Then:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- To login, please go to https://cse135-hw4-eb854.firebaseapp.com/login and enter email and password below<br />
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
- You can sign up a new account, go to /signup. When you signed in, you only view your performance, browser data
  and cannot see other user's information.
- When you logged in by using Admin account, you can see all users and click detail button to show each user data.
  Admin can gain or delete other normal users or remove session and cannot delete or edit other Admin, please go to /manager page.

- Diagram that shows how your PoC examples work together including their routes:<br />
  It included in the folder that named as diagram_poc.jpg<br />

- Diagram and wireframes to implement for final project:<br />
  Two PDF named as architecture_hw5.pdf and wireframe.pdf in this folder<br />
