module.exports = {
  "media": [
    {
      "id": 1,
      "url": "https://www.placehold.it/200x200",
      "title": "Great Gray Box",
      "description": "This is a square. It is gray. Or grey. It is 200 pixels wide by 200 pixels tall."
    }
  ],
  "routines": [
    {
      "id": 1,
      "title": "Walking Out Front Door",
      "time": "8am",
      "duration":"60min",
      "date":"June 6",
      "description": "A dangerous thing indeed",
      "media_id": 1,
      "category": "official",
      "public": true
    },
    {
      "id": 2,
      "title": "Taunting Dragons",
      "time": "9am",
      "duration":"45min",
      "date":"June 8",
      "description": "This seems like a smart decision",
      "media_id": 1,
      "status":"community",
      "public": true,
      "votes": 13
    }
  ],
  "sessions": [
    {
      "id": 1,
      "user_id": 1,
      "time": "10am",
      "duration":"45min",
      "date":"June 27",
      "name": "Getting wet",
      "routine_id": 1,
      "status":"completed"
    },
    {
      "id": 2,
      "user_id": 1,
      "time": "11am",
      "duration":"45min",
      "date":"July 5",
      "name": "meeting trolls",
      "routine_id": 1,
      "status":"upcoming"
    },
    {
      "id": 3,
      "user_id": 1,
      "time": "10am",
      "duration":"90min",
      "date":"July 10",
      "name": "climbing mountains",
      "routine_id": 1,
      "status":"upcoming"
    },
    {
      "id": 4,
      "user_id": 1,
      "time": "5pm",
      "duration":"10min",
      "date":"July 22",
      "name": "finding a ring",
      "routine_id": 1,
      "status":"upcoming"
    },
    {
      "id": 5,
      "user_id": 1,
      "time": "2pm",
      "duration":"45min",
      "date":"July 30",
      "name": "playing riddle master",
      "routine_id": 2,
      "status":"upcoming"
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "Bilbo Baggins",
      "email": "shouldastayedhome@notreal.com"
    },
    {
      "id": 2,
      "name": "Frodo Baggins",
      "email": "ninefingers@notreal.com"
    },
  ]
}
