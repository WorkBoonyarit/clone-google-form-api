# Clone Google Form (Vite)

## Features

- CRUD database on mysql

## Library

- expressJs
- jsonwebtoken
- cors
- typescript
- bcrypt


## Installation


```sh
git clone https://github.com/WorkBoonyarit/clone-google-form-api.git
npm install
```


## User test


```sh
username : user_test
password : user_test
```

## Api


| API | Endpoint | Method |
| ------ | ------ | ------ |
| Get all polls | http://localhost:3000/v1/poll | GET |
| Get One polls | http://localhost:3000/v1/poll/:id | GET |
| Update One polls | http://localhost:3000/v1/poll/:id | PUT |
| Delete One polls | http://localhost:3000/v1/poll/:id | DELETE |
| Create polls | http://localhost:3000/v1/poll | POST |
| Login | http://localhost:3000/v1/user/login | POST |
| Register | http://localhost:3000/v1/user/register | POST |
| VerifyToken | http://localhost:3000/v1/user/verify-token | POST |

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
localhost:3000
```
