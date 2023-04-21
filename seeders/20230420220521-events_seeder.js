'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('events', [{
      name: " Summerfest ",
      date: new Date(),
      start_time: new Date(),
      end_time: new Date()
    },
    {
      name: " Springfest ",
      date: new Date(),
      start_time: new Date(),
      end_time: new Date()
    },
  ]);
},
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
