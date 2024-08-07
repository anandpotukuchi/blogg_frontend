#  Blogg

This project is a simple frontend application that interacts with a backend API to create and display posts.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is a basic frontend application built with HTML, CSS, and JavaScript. It allows users to create and view posts by interacting with a backend API.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/anandpotukuchi/fblogg-frontend.git 
  ``` 

2. Navigate to the project directory:

```
cd frontend-project
```

Open the `index.html` file in your preferred browser.

## Usage

To use the application:

1. Open the index.html file in your browser.
2. Fill in the form with the post details (title, content, author).
3. Click the "Submit" button to create a new post.
4. The post will be sent to the backend API and displayed on the page.

## Endpoints

The application interacts with the following backend API endpoints:

- Create Post: POST `/posts`
    - URL: `http://your-backend-endpoint/posts`   
    - Payload :
    - ``` {
      "title": "Sample Post",
      "content": "This is a sample post.",
      "author": "Author Name"
    } ```
- - Get Posts: `GET /posts`
    - URL: `http://your-backend-endpoint/posts`
    

## Dependencies
This project does not have any external dependencies. It uses vanilla HTML, CSS, and JavaScript.
