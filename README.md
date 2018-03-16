# Vacation Planner - With Client

What is this project? Well, its partly a practical tool for people to plan their vacation at a shared location (like a summer house or similar). 

Its also an opportunity for me to show my skills in backend as well as frontend. The project is likely to be updated and changed in the future with new technology as I learn it and need a private project to hone my skills.


## Version

1.0.0 - This it not a finalised product yet, so its actually pre release and not 1.0.0, but I'm starting versioning when I release it, until then, please just follow the history below.


## Server

A REST-API built with Express running on Node with Mongodb (via mongoose) and authentication with Passport (local and google, currently).


## Client

A so called "Single Page Application", built with React (16) and Redux using `Create React App` and `React Script` for setup.

### Misc
- Unit Testing: Jest, Enzyme
- Type Checking: Flow
- Linting: ESLint


## History

### 2018-03-16

Researching alternatives for form input validation. Joi is a strong contendor, but a bit exhaustive to get a grip on, so I'm considering using Yup client-side and perhaps reconsider in backend-validation in the future. We'll see. 

- https://github.com/jquense/yup
- https://github.com/hapijs/joi
- https://github.com/mafintosh/is-my-json-valid
