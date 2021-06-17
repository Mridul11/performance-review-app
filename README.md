Welcome to Employee performance management App. \

PREREQUISITE: \
1. node > 12.x and npm install  \
2. yarn \
3. sequelize-cli \

Infrastructure: \
1. Server app is powered by expressJS. \
2. Client app is powered by reactJS. \
3. Sequelize for database ORM. \
4. sqlite as a database. \
5. i have also written seed file. \

How to work with app: \

===========================***  Admin user credentials :-> user2@qwe.com      ***===================
===========================***  Non-Admin user credentials :->  user1@qwe.com  ***==================
=============== if user is not in the system, he can not login or view pages ==================

1. cd server && yarn (please make sure to install sequelize-cli) \
    - sequelize db:migrate \
    - sequelize db:seed:all \
    - yarn start \
2. cd client && yarn start \
3. I have not written the unit test cases.(due to time crunch). \

About the App: \
1. This app contains server and client apps.\
2. In the client: \
    - Using context api for state management \
    - User can login  \
        - with the mock data from the seed file in server app. \
        - based on the admin status  \
            - If user is admin  \
                - User can \
                    - add employess \
                    - remove employees \
                    - update employees data \
                    - View the employee data \
            - If user is not Admin \
                - User can \
                    - View his own data. \
            - If user is not in the database  \
                - He will not be able to view any page other than landing page. \
3. In the Server: \
    - Have implementation of  \
        - Routes for admin \
            - Add employee \
            - Remove employee \
            - Update employee info \
            - Authenticate with email.  \
        - Route for employee \
            - user who does not have admin status \
            - Can view his own data \

Assumptions made: \
1. For the Auth: \
    - Very simple implementation of auth, where user gets data and based on admin status can navigate to different routes \
    - I am storing the user in localstorage and navigating the users around the app. \
2. For the admin: \
    - Every user with admin status can add, edit/update, delete, view other users. \
3. For the Normal employee(Non-admin): \
    - User can only view his data(upon login) \

NOTE: \
    - i have updated the views. \