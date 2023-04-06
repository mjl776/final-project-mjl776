

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

## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)

1. [passport.js authentication docs](http://passportjs.org/docs) - ()
2. [tutorial on react.js](https://www.w3schools.com/REACT/DEFAULT.ASP) 
3. [docs on jest unit testing](https://jestjs.io/docs/tutorial-react)
4. [docs on bootstrap] (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
