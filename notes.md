## Note

---

- **This work is still in progress, post links, login, register and few won't work.**
- Rectangles at left and right side of topbar -- kept for understanding. They can be disabled from CSS (Look for the comment of removal in `topbar.css`)
- `aboutUs` is not developed, will just get a blank page if tried to access.
- For checking the functionality of user -login status, toggle the `userLoginStatus` in `App.js` and `Topbar.jsx`

## Bugs

---

- In the login and register pages, getting the same background, even though the baackground-url's are different.

-- Reached #MileStone1, by **grace**.

## Tools

- Context API: For state management, can also use other tools like Redux.
  - **Why..??**
  - The user information is needed in almost all the cases. Like..
    - In topbar, for settings - profile picture -- user settings
    - While viewing posts, for determining the rights
    - for writing a new post, whether logged in or not.
  - Can do via, updating the props.. but that's not the best practise.

## Notes on contextAPI
- Before logging in, the `INITIAL_STATE` in `Context.js` will be default.
- Login process in 3 actions..
  1. Enters details and clicks on "Login". Now it might result in action-2 or action-3.
  2. When the details are correct, and no problem at server or database(MongoDB), will get the details.
  3. When **either** details are incorrect or some issue at server, failure. Now we set the `error` to `true`.
- All these actions are **LISTED** in `Actions.js`.
- The states are updated based on `Action.js` in `Reducer.js`