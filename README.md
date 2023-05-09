# Marvel App!

This application is dockerized, to run it simply run the following command from the root folder:

' docker-compose up '

NB: You will need to create a .env file in the root folder and use this template:

```
REACT_APP_PRIVATE_KEY={YOUR_KEY}
REACT_APP_PUBLIC_KEY={YOUR_KEY}
REACT_APP_API_URL=http://gateway.marvel.com/v1/public/
```

You can get a public and private api key from the marvel website by signing up: https://developer.marvel.com/

### End to End Testing

This app uses the cypress testing framework so to run the tests run the following command in the root folder:

' npx cypress run '

### Unit Testing

The below command will run all the tests. This app uses create react app's built test runner Jest along with
React Testing library.

npm run test

This command will get you code coverage of the entire application

npm run test -- --coverage --watchAll

I added this to the tsConfig: (Need to research it)

"suppressImplicitAnyIndexErrors": true,
