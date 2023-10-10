# An almost simple server in Express.js
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


This project will allow you to practice setting up a server that will handle simple requests in Express.js.

## What you will be doing

You will be setting up a server with four **endpoints** using the Express.js framework.

The endpoints will only respond to **GET** requests, and send a **string** as a response.

## Tasks

### Task 1 - Getting ready

1. Install the express.js npm package `npm i express`.
2. Create a file for your server (`server.js`).

### Task 2 - Setting up your server

From the [SNIPPETS](/SNIPPETS.md) file use the snippet **starter code** to initialise your `server.js` file.

### Task 3 - Add a GET request to '/hello'

1. Using the snippet **GET request**, build an endpoint that will respond to the path `/hello`.
2. This middleware should send a **response** with a greeting message of your choice.

### Task 4 - Add a GET request to '/time'

1. Using the snippet **GET request**, build an endpoint that will respond to the path `/time`.
2. This middleware should return a `response` with the current time and date in [ISO format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) (`2011-10-05T14:48:00.000Z`).

> Research:
>
> [Date Object [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
>
> [Date Object [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Task 5 - Add a GET request to '/random'

1. Using the snippet **GET request**, build an endpoint that will respond to the path `/random`.
2. This middleware should send a **response** with the random number.

> Research:
>
> [Math.random() [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
>
> [Math.random() [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

### Task 6 - Add a GET request to '/isNumber'

1. Using the snippet **GET request**, build an endpoint that will respond to the path `/isNumber`
2. Modify the path to accept a **route parameter**
3. In your endpoint, read the route parameter which is sent as part of the URL. This parameter will contain a value.

   > Hint: Route parameters can be read with the `request.params` object

   > Hint: Route parameters are sometimes also called path parameters

4. Reading the value from the parameter, check that it can be converted to a number

   > Hint: You can use either the Math function `Number()` or the `isNaN()` function to see if the value can be converted to a number.

5. If it can be converted to a number, then send a **response** with the message:

   - **"This is a number"**

6. If it can not be converted to a number, then send a **response** with the message:

   - **"This is not a number"**

7. Test your endpoint;

- The url `http://localhost:3000/isNumber/123` should return the text **"This is a number"**
- The url `http://localhost:3000/isNumber/abc` should return the text **"This is not a number"**

> Research:
>
> [Number() [english]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
>
> [Number() [deutsch]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
>
> [isNaN() [english]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
>
> [isNaN() [deutsch]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### JS file

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `server.js` should exist |

### app

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | should be express instance |

### Endpoint `/hello`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | should respond |

### Endpoint `/time`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | should respond |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | should respond with time string in ISO format |

### Endpoint `/random`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | should respond |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | should respond with number |

### Endpoint `/isNumber/xx`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | should respond |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | should tell if its not a number |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | should tell if it is a number |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=BE-Express-Almost-Simple-Server)


[//]: # (autograding info end)