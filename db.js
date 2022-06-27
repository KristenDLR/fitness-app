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
      "description": "A dangerous thing indeed",
      "media_id": 1,
      "category": "official",
      "public": true
    },
    {
      "id": 2,
      "title": "Taunting Dragons",
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
      "name": "Getting wet",
      "routine_id": 1,
      "status":"completed"
    },
    {
      "id": 2,
      "user_id": 1,
      "name": "meeting trolls",
      "routine_id": 1,
      "status":"upcoming"
    },
    {
      "id": 3,
      "user_id": 1,
      "name": "climbing mountains",
      "routine_id": 1,
      "status":"upcoming"
    },
    {
      "id": 4,
      "user_id": 1,
      "name": "finding a ring",
      "routine_id": 1,
      "status":"upcoming"
    },
    {
      "id": 5,
      "user_id": 1,
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
