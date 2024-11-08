# Backend Assignment

Given the JSON structure belows, build a backend service using TypeScript that 
provides the following functionalities via API:

- return reachable URL(s), ordered by `priority` where 1 is highest.
- return reachable URL(s) by querying priority number.

```json
[
  {
    "url": "https://does-not-work.perfume.new",
    "priority": 1
  },
  {
    "url": "https://gitlab.com",
    "priority": 4
  },
  {
    "url": "https://github.com",
    "priority": 4
  },
  {
    "url": "https://doesnt-work.github.com",
    "priority": 4
  },
  {
    "url": "http://app.scnt.me",
    "priority": 3
  },
  {
    "url": "https://offline.scentronix.com",
    "priority": 2
  }
]
```

## Functional Requirements

- The API can be run locally.
- The API endpoint(s) should be well structured and follow HTTP specification.
- The API's input(s) should be validated.
- All requests to check server's availability should be run in parallel.

## Non-functional Requirements

- Some documentation - README, code function documentation etc..
- Request checking server's availability should timeout after 5 seconds.
- Server's respond with HTTP code between 200-299 it is considered online.
- Unit test(s) that checks all the underlying components/requirements.
    - The server requests can be mocked.

## What are we expecting

- Neatly written and formatted code for production level environment.
- Demonstration of knowledge on NodeJS.
- Demonstration of knowledge on Promises.
- Demonstration of knowledge on Unit Testing including experience with mocking
target server(s).


## Completed Backend Task.

## Description
This service provides an API to check reachable URLs, ordered by priority, or filtered by priority level.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server with `npm start`.
4. Run tests with `npm test`.

## API Endpoints

- **GET** `/api/urls/reachable`: Returns reachable URLs ordered by priority.
- **GET** `/api/urls/priority/:priority`: Returns reachable URLs for the specified priority.

## Notes

- The reachable check for each URL has a timeout of 5 seconds.
- The service uses Jest for unit tests, with mocked HTTP requests.
