# MVP #

As a user, I want to load the list of users on the / route, but display them on the /display route. Don't ask why, just do it!
- Sometimes client demands can be capricious. Store the list of users in req.session and redirect to the other route.

As a user, I want to see a login form whenever I visit /login so that I can enter my username and password.
- Create the form, providing two input fields: one named 'username' and one named 'password'.
- Make the form's action /login, and use method POST.

As an administrator, I only want to allow access to /secret to user aardvark@example.org, so that I can limit access to the awesome secret inside.
- Implement Passport's local strategy, protecting /secret. Don't worry too much about passwords just yet: return a user object from the database if username is aardvark@example.org.

As an administrator, I've decided to be more lenient. Any recognised user can have access to /secret so long as their username (email) exists in the database.
- Make a database call inside your strategy function to check the username against the list of email addresses.

As a user, your security isn't strict enough! Check my password: only users with the correct password should have access to /secret so that I can be assured my secrets are secret.
- Add a password column to the users table with a Knex migration.
- Modify the seed to populate the password column. (You can make most of them the same if you like, but make a few different to ensure your code is working.)
- Only let the user see /secret if their entered password matches.
- Why is storing plain text passwords poor practice? Discuss with your pair.

As a user, I want to submit a form at /register so that I can sign up for the amazing secret-viewing site.

# Stretch #

As an administrator, I'd like passwords to be properly hashed because plaintext storage is very poor practice.

- Hash the passwords using Argon2, scrypt, or bcrypt.

As an administrator, I'd like to expose an API route using basic authentication because I want to allow registered users to view the user list.

- Protect the route using basic strategy without sessions.
As an administrator, I hear digest auth on API routes is awesome! Make it so.

If you still have time, try playing around with JWT auth!
