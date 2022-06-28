# fitness-app

## New Feature Request

Users have requested a feature that allows them to schedule a “session” which describes a future date/time that they want to complete a given routine. `The PM has asked you to start work on the view that will show the user’s sessions.`

They want a way for a user to see their already schedule
It must include a record of whether the session has been completed or not and some sort of easy to identify means of recognizing completed sessions.

Using the boilerplate, create a react app that will load a single page that renders the sessions from the provided graphQL server. Look in the readme for instructions on how to start the graphQL server.

- Some of the data provided in the mock endpoint is incomplete. Feel free to add relevant fields to the schema.
- UI/UX design of the display is up to you.
- Take the design and functionality as far as you desire.


______________
# Completed:
* User can see already scheduled and completed sessions.
* Hardcoded Upcoming element to display same text and button format as Figma
* User can see map of upcoming events
* Explored GraphQL queries in playground.
* Passes props to map through db.js and render elements


# Assumtions/Finds:
* Date, Time, Duration are missing from query, need to update schema

# Ice-box:
* User logs in and sees all associated sessions.
* Onclick for upcomiing button, so user can add to their schedule.
* Need to complete logic to sort sessions by date.
* Capitalize first letter of session name
* Use graphQL mutations to update data instead of editing db.json




![Image of Front-end](./public/images/fitness-app.png)

