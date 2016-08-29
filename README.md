# Passport

User stories for auth practice with Passport.


## Install

Enter the commands below in your terminal to get started:

```shell
git clone https://github.com/dev-academy-challenges/boilerplate-knex
mv boilerplate-knex passport-practice
cd passport-practice
npm install
npm run knex migrate:latest
npm run knex seed:run
npm start
```

If you would like to push changes back to your own repository, you'll need to create an empty repository in your GitHub and [change](https://help.github.com/articles/changing-a-remote-s-url/) the `origin` remote to point to that repo:

```shell
git remote set-url origin https://github.com/YOUR-USERNAME/passport-practice
```


## MVP

_As a user, I want to load the list of users on the `/` route, but display them on the `/display` route. Don't ask why, just do it!_
 - Sometimes client demands can be capricious. Store the list of users in `req.session` and redirect to the other route.

_As a user, I want to see a login form whenever I visit `/login` so that I can enter my username and password._
 - Create the form, providing two input fields: one named 'username' and one named 'password'.
 - Make the form's action `/login`, and use method `POST`.

_As an administrator, I only want to allow access to `/secret` to user `aardvark@example.org`, so that I can limit access to the awesome secret inside._
 - Implement Passport's local strategy, protecting `/secret`. Don't worry too much about passwords just yet: return a user object from the database if `username` is `aardvark@example.org`.

_As an administrator, I've decided to be more lenient. Any recognised user can have access to `/secret` so long as their username (email) exists in the database._
 - Make a database call inside your strategy function to check the username against the list of email addresses.

_As a user, your security isn't strict enough! Check my password: only users with the correct password should have access to `/secret` so that I can be assured my secrets are secret._
 - Add a `password` column to the users table with a Knex migration.
 - Modify the seed to populate the password column. (You can make most of them the same if you like, but make a few different to ensure your code is working.)
 - Only let the user see `/secret` if their entered password matches.
 - Why is storing plain text passwords poor practice? Discuss with your pair.

_As a user, I want to submit a form at `/register` so that I can sign up for the amazing secret-viewing site._


## Stretch

_As an administrator, I'd like passwords to be properly hashed because plaintext storage is very poor practice._
 - Hash the passwords using Argon2, scrypt, or bcrypt.

_As an administrator, I'd like to expose an API route using basic authentication because I want to allow registered users to view the user list._
 - Protect the route using basic strategy without sessions.

_As an administrator, I hear digest auth on API routes is awesome! Make it so._

If you still have time, try playing around with JWT auth!
