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

To Do:
* set up the project
* Must include: Record of whether session has been completed or not
* single page that renders the sessions from the provided graphQL server


?? Do I need to set up Global State Object/Store
For the scope of this assessment, assume workout sessions have the following values:

- User ID
- Session title (defaults to name of the routine)
- The routine for the session (none is a valid selection)
- Timestamp to start the routine
- Session duration (defaults to length of selected routine, but overridable by user)
- Frequency - 1 time, specific cadence (daily, weekly, monthly, or set weekdays)
- Reminders - The session needs to have the ability to add an arbitrary number of reminders. These can be set at absolute times (fire reminder on the 18th @ 5:00 PM), or relative (send reminder 1 hour before session).
- Notes - arbitrary text the user can add to the session before, during, or after the actual event

?? What would I need to do to successfully run GraphQL?
- MVC architecture helps
- Actions, that will define the type of event to update state
    --Schedule a session, describes future date/time
    --View schedule, shows whether sessions completed or not
- Reducers, the actual functionality to update state

- Schema
    -- explore graphQL
    -- Feel free to add relevant fields to the schema---- need to add date time.


?? State
- This is a single page App component
- Session component keeps track of the available sessions
- Schedule component displays the selected sessions and wether completed

!! Openedd GraphQL Query
Able to query the user status of completed sessions and routines
 query{
		User(id:1){
    name,
    email, 
    Sessions{
      user_id,
      name,
      routine_id,
      status
    }
  }
}

JSON response:
{
  "data": {
    "User": {
      "name": "Bilbo Baggins",
      "email": "shouldastayedhome@notreal.com",
      "Sessions": [
        {
          "user_id": "1",
          "name": "Getting wet",
          "routine_id": "1",
          "status": "completed"
        },
        {
          "user_id": "1",
          "name": "meeting trolls",
          "routine_id": "1",
          "status": "upcoming"
        },
        {
          "user_id": "1",
          "name": "climbing mountains",
          "routine_id": "1",
          "status": "upcoming"
        },
        {
          "user_id": "1",
          "name": "finding a ring",
          "routine_id": "1",
          "status": "upcoming"
        },
        {
          "user_id": "1",
          "name": "playing riddle master",
          "routine_id": "2",
          "status": "upcoming"
        }
      ]
    }
  }
}

* user with id 2 nothing complete or upcoming
_____
   query{
	Routine(id:2){
      title,
      description,
 	    media_id,
    category,
    public,
    status,
    votes,
    
    }

  }
  
  JSON response: 
  {
  "data": {
    "Routine": {
      "title": "Taunting Dragons",
      "description": "This seems like a smart decision",
      "media_id": "1",
      "category": null,
      "public": true,
      "status": "community",
      "votes": 13
    }
  }
}


  * ???Can not find date and time in db.js or GrpahQL