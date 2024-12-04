# AnswersAi Frontend Technical Assessment

## Setup Instructions

### Prerequisites

You will need to set up a Supabase project and OAuth credentials with Google before beginning.

##### [_Are you looking for development instructions? Click here._](#local-development-instructions)

```bash
# clone production branch
$ git clone https://github.com/taeyangcode/data-viz-platform
$ cd data-viz-platform

# install dependenices
$ npm install

# initialize secrets from template
$ cp .env.template .env.local

# build and preview local emulation of production
$ npm run build
$ npm run preview
```

## Features

- Google OAuth 2.0 Authentication w/ Supabase
- Zustand Session State Management
- React Router
- Dashboard Screen
- Slide Over Card
- Integration of Component Libraries (shadcn/ui, Origin UI)

## Technical Decisions & Trade-offs

- I chose Supabase as my means for user authentication which comes with a variety of trade-offs. Supabase provides a simple and robust interface to set up user authentication and data storage without the developer having to worry about a backend. Of course the immediate downside of a DBaaS is also apparent as the service will couple the codebase with the platform - posing potential issues with migration and experimenting down the road. Since this project was ultimately a demo, I decided that functionality and time to code was of greater importance and stook with Supabase. Although Supabase also provides an interface for email logins, I decided to defer integrating this feature until other larger components of the project were complete, though due to time constraints I was unable to implement it.
- When I was first building out the dashboard, I wanted to create a modular and reusable component structure to not just promote code readability, but also to demonstrate my ability to construct a fluid component system with great DX. This design choice ended up creating more overhead than I could properly handle for the limited time I had to spend on the project, and resulted in a working - yet much to be desired component structure.

## Known Limitations

- Authentication only with Google (no email login)
- Slide over card incomplete
- Dashboard content (specifically graph and performance boxes) not properly formatted
- Graph chart has some aesthetic differences
- Context window not implemented

## Time Spent

- 12 hours on and off
- 6 consistent hours

## Local Development Instructions

```bash
# clone development branch
$ git clone https://github.com/taeyangcode/data-viz-platform -b dev
$ cd data-viz-platform

# install dependenices
$ npm install

# initialize secrets from template
$ cp .env.template .env.local

# start development server
$ npm run dev
```
