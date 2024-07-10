# API-PRO004

This is a simple user management API built using Node.js and Express.js. The API allows for creating, reading, updating, and deleting user data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aytekinkaplan/API-pro004.git
   ```
2. Navigate into the project directory:
   ```bash
   cd API-PRO004
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. The server will be running at:
   ```
   http://127.0.0.1:3000
   ```

## API Endpoints

- `GET /users` - Retrieves all users
- `GET /users/:id` - Retrieves a single user by ID
- `POST /users` - Creates a new user
- `PUT /users/:id` - Updates an existing user by ID
- `DELETE /users/:id` - Deletes a user by ID

### Example Requests

- **Get All Users**
  ```bash
  curl -X GET http://127.0.0.1:3000/users
  ```
- **Get One User**
  ```bash
  curl -X GET http://127.0.0.1:3000/users/5c8a1d5b0190b214360dc057
  ```
- **Create User**
  ```bash
  curl -X POST http://127.0.0.1:3000/users \
  -H "Content-Type: application/json" \
  -d '{"_id": "unique_id", "name": "John Doe", "email": "john@example.com", "role": "user", "active": true, "photo": "user.jpg", "password": "hashed_password"}'
  ```
- **Update User**
  ```bash
  curl -X PUT http://127.0.0.1:3000/users/5c8a1d5b0190b214360dc057 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Name", "email": "updated@example.com"}'
  ```
- **Delete User**
  ```bash
  curl -X DELETE http://127.0.0.1:3000/users/5c8a1d5b0190b214360dc057
  ```

## Project Structure

````

API-PRO004
│ README.md
│ package.json
│ server.js
│
├───controllers
│ userController.js
│
├───data
│ users.json
│
├───models
│ userModel.js
│
├───routes
│ userRouter.js
│
└───app.js

```

## License

This project is licensed under the MIT License.
```
````
