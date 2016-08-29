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


## Stretch

