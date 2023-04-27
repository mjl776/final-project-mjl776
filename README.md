

# Paradise

## Overview

Traveling is a great way to enjoy your vacation as a break from work. However, traveling requires a lot of intense planning a
and often times, it is really hard to find where to travel to and where to look for places to travel? Most commonly, people use instagram or social media to find places to travel to. However there is not a specific social media site just catered to travelers looking for places to travel to. 

Paradise is a social media web application that is catered to travelers and aimed at allowing users to post about their travels through blog posts and photos. 

## Data Model

The application will store Users, Blog Posts, and the locations to the photos posted on the website, which will be stored on
AWS cloud storage.  

* users can have multiple blog posts
* each blog post will contain a optional text, a photo(s) (optional), and a creation time
* each photo will contain a location, creation time, and a caption (optional)


An Example User:

```javascript
{
  username: "michael_lee",
  hash: // a password hash,
  blogs: // an array of references to Blog documents
  photos: // an array of references to photo documents 
}
```

An Example Blog with Embedded Items:

```javascript
{
  user: // a reference to a User object
  name: "My trip to Milan",
  text: // text for the given blog post
  photos: // a optional list of photo references 
  createdAt: // timestamp
}
```

## [Link to Commented First Draft Schema](db.mjs) 

## https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-mjl776/blob/master/db.mjs

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/Account information Page

![list create](https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-mjl776/blob/master/documentation/Account%20Page.png)

/Blogs Page

![list create](https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-mjl776/blob/master/documentation/Blogs%20Page.png)

/Individual Blog Page

![list create](https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-mjl776/blob/master/documentation/Blog%20Page.png)

/Photos Page

![list create](https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-mjl776/blob/master/documentation/Photos%20page.png)

/Photo Page

![list create] (https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-mjl776/blob/master/documentation/Photos%20Page.png)

/Homepage Page

![list create](https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-mjl776/blob/master/documentation/Homepage.png)

## Site map

![list create](https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-mjl776/blob/master/documentation/Site%20Map.png)


## documentation/Site Map.png

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a registered user, I can create a new travel blog post
3. as a registered user, I can create a new travel photo post 
4. as a registered user, I can see all blogs and travel posts posted on the site

## Research Topics

* (5 points) Integrate user authentication
    * I'm going to be using passport for user authentication
* (4 points) Perform client side form validation using a Javascript library
* (5 points) React.js
    * I am going to learn React.js for my project as a frontend framework 

* (3 points) Unit testing with JavaScript
  * I am going to do unit testing using Jest

* (2 points) Use a CSS framework or UI toolkit, use a reasonable of customization of the framework (don't just use stock Bootstrap - minimally configure a theme):
  * I am going to use Bootstrap for the UI of my project

## [Link to Initial Main Project File](app.mjs) 

## https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-mjl776/blob/master/app.mjs

## Milestone 2

## What I have done 

For milestone 2 I have done the following:

- created a EC2 running instance 
- configured a build and deploy pipeline using my ec2 instance
- integrated next.js into my code 

## Milestone 3

## What I have done (research)

For my milestone 3, I was mainly doing a lot of research and refinement on my project in the following areas:

- EC2 Deployment, AWS Amplify deployment and Vercel Deployment (Where I suceeeded)

- MongoDB 

- Firebase Auth 

- I added citations for all the research and articles I read when researching these topics and discussed with Professor Versoza about these research topics for AWS

- The EC2 deployment configuration files are also still present within my repo 

## What form(s) I made for part 2

I made a Sign-up and Sign-in form for users to authenticate into my website. For the final project milestone, I plan to have the blogs users post visible on the deployed website itself. 


## Scope of my project

Nothing has changed in plans for the scope of my project

## Brief Description of Frontend and backend

Frontend: Next.js with Vercel Deployment 

Backend:

 MongoDB to store auth user data and also data for website
  - The specific auth data it stores is the user's username, email, and ID created when the data is posted to the 
  DB

Firebase Auth:
  - Stores the User's email and password hash used to authenticate


## Milestone 4:

## What I have done 
 
 - From the previous iteration I have added the following: 

    - A show blogs page that shows the title, text and user of each blog post 
    - A create blogs page that allows a user to create a blog

## System Architecture of my website

Frontend: 

Next.js 

Backend: 

MongoDB 
- for data storage

Authentication: 

Firebase Authentication 
- for storing senstive user auth data 

## How the frontend and backend interact per each form: 

- Sign up page: 

  When a User signs up and enters their information, a post request is made to the firebase authenication API endpoinn and after that a post request is then triggered to the MongoDB API endpoint where all the non-sensitive information of the user is stored

- Create Post Page 

  When a User is authenticated, a create post page button is availible where users can click on and direct them to a form where they are able to create a post. When a user enters the post information, a API request is triggered to the mongoDB API endpoint, where the users object id and username is stored for reference 

## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)

1. [passport.js authentication docs](http://passportjs.org/docs) - ()
2. [tutorial on react.js](https://www.w3schools.com/REACT/DEFAULT.ASP) 
3. [docs on jest unit testing](https://jestjs.io/docs/tutorial-react)
4. [docs on bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
5. [tutorial on react express frontend and backend](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)
6. [tutorial on how to connect express app with ec2](https://gist.github.com/rmiyazaki6499/b564b40e306707c8ff6ca9c67d38fb6f?permalink_comment_id=3846281)
7. [MongoDB + Next.JS tutorial](https://blog.openreplay.com/a-complete-guide-to-nextjs-plus-mongodb/)
8. [AWS EC2 + ReactJS](https://blog.devgenius.io/deploy-a-reactjs-application-to-aws-ec2-instance-using-aws-codepipeline-3df5e4157028)
9. [Roboto font Google fonts import](https://fonts.google.com/specimen/Roboto)
10. [Routing Next.js](https://nextjs.org/docs/routing/introduction)
11. [AWS Connection to Github](https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-github.html)
12. [AWS buildspec-file](https://www.youtube.com/watch?v=yJe4ynOBzXA)
13. [useEffect block](https://legacy.reactjs.org/docs/hooks-effect.html); 
14. [next.js + mongodb](https://www.youtube.com/watch?v=mOvW3iheF14&t=397s);
15. [Next.js + mongodb](https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/#pagesindexjs)
16. [Next.js + mongodb offical docs](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/)
17. [Next.js mongodb](https://stackoverflow.com/questions/69851595/aws-codebuild-node-version-update-not-working)
18. [MongoDB + vercel](https://www.mongodb.com/developer/products/atlas/how-to-connect-mongodb-atlas-to-vercel-using-the-new-integration/)
19. [Routing for next.js](https://nextjs.org/docs/routing/introduction)
20. [Login form render](https://github.com/vercel/next.js/blob/canary/examples/with-passport/components/form.js)
21. [Firebase auth](https://firebase.google.com/docs/auth)
22. [Auth0 authentication nextjs](https://www.youtube.com/watch?v=yufqeJLP1rI)
23. [Firebase auth](https://www.youtube.com/watch?v=BQrE98bP6m4)
24. [Navbar help](https://github.com/CodeWithMarish/responsive-navbar/blob/main/styles/globals.css)
25. [Public URL env variable](https://dev.to/n1ru4l/configure-the-cra-public-url-post-build-with-node-js-and-express-4n8)
26. [submit form debugging](https://daily-dev-tips.com/posts/using-forms-in-nextjs/)
27. [mongoose connect with mongodb](https://jasonwatmore.com/next-js-11-mongodb-connect-to-mongo-database-with-mongoose)
28. [CORS policy nextjs NOTE: I lost the url but was within this section](https://nextjs.org/docs/advanced-features/security-headers)
29. [Showing pages based on auth state](https://stackoverflow.com/questions/74357551/nextjs-routing-in-react-render-a-page-if-the-user-is-authenticated);
30. [useEffect blocks use case](https://stackoverflow.com/questions/65216193/blocking-vs-non-blocking-effects-in-react-does-useeffect-run-asynchronously-imp)
31. [Component level CSS nextjs](https://github.com/iamshaunjp/nextjs-tutorial/blob/lesson-12/pages/_app.js)
32. [Top-Level-Await-workaround](https://github.com/vercel/next.js/issues/43382);
33. [Finding objects in mongoDB](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/)
34. [Global Authentication](https://egghead.io/lessonsnext-js-make-user-state-globally-accessible-in-next-js-with-react-context-and-providers)
35. [Global Authentication solution](https://stackoverflow.com/questions/67410324/next-js-with-firebase-onauthstatechanged);
36. [All documents in mongoDB](https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/mongodb/mongodb-quiz.md)
37. [All documents in Col, Row](https://getbootstrap.com/docs/4.0/layout/grid/)
38. [BootStrap] (https://stackoverflow.com/questions/55288819/container-row-col-in-react-bootstrap-not-working);
39. [Border-box](https://developer.mozilla.org/en-US/docs/Web/CSS/border)

