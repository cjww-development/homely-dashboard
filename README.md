

![homely logo](https://homely-public-assets.s3.eu-west-2.amazonaws.com/homely_logo.png)




# Homely

The Homely project aims to bring together disparate smart home solutions under one flag. Homely aims to be the all in one smart home solution.
 
 
### How to run

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

You also need a `.env` file in the root of your project following the structure below.
```dotenv
REACT_APP_AWS_REGION=<AWS_REGION>
REACT_APP_USER_POOL_ID=<AWS_COGNITO_POOL_ID>
REACT_APP_USER_POOL_CLIENT_ID=<AWS_COGNITO_APP_CLIENT_ID>
```

You will need your own AWS account with permissions to create a cognito user pool. The cognito user pool will need to verify users on email address. Verification codes will be sent to a users email.

### How to test
### `yarn test:unit`


License
=======
This code is open source software licensed under the Apache 2.0 License
