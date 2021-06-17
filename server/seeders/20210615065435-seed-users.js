'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     return queryInterface.bulkInsert('Users', [{
        firstName: 'Snoop',
        lastName: 'Dog',
        email: 'user1@qwe.com',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        firstName: 'Scooby',
        lastName: 'Doo',
        email: 'user2@qwe.com',
        admin: 1,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        firstName: 'Herbie',
        lastName: 'Husker',
        email: 'user3@qwe.edu',
        admin: 1,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstName: 'Johny',
        lastName: 'depp',
        email: 'user4@qwe.edu',
        admin: 1,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstName: 'harry',
        lastName: 'potter',
        email: 'user5@qwe.edu',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstName: 'user2',
        lastName: 'bravo',
        email: 'user6@qwe.edu',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstName: 'user3',
        lastName: 'bravo',
        email: 'user7@qwe.edu',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstName: 'user4',
        lastName: 'bravo',
        email: 'user8@qwe.edu',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstName: 'user5',
        lastName: 'bravo',
        email: 'user9@qwe.edu',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstName: 'user6',
        lastName: 'bravo',
        email: 'user10@qwe.edu',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstName: 'user7',
        lastName: 'bravo',
        email: 'user11@qwe.edu',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },{
        firstName: 'user8',
        lastName: 'bravo',
        email: 'user12@qwe.edu',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstName: 'user9',
        lastName: 'bravo',
        email: 'user13@qwe.edu',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },{
        firstName: 'user10',
        lastName: 'bravo',
        email: 'user14@qwe.edu',
        admin: 0,
        rating: 5,
        userReview:"Excellent",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
