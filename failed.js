'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('update-test', 'root', '123qwe', {'define' : {'timestamps': false}});

var carEntity = {
  'id'   : {
    'type'         : Sequelize.INTEGER,
    'field'        : 'ID',
    'primaryKey'   : true,
    'autoIncrement': true
  },
  'brand': {
    'type'         : Sequelize.STRING,
    'field'        : 'BRAND'
  },
  'color': {
    'type'         : Sequelize.STRING,
    'field'        : 'COLOR'
  }
};

var Car = sequelize.define('Car', carEntity, {'tableName': 'CAR'});

Car.update({'color': 'Yellow'}, {'where': {'brand': 'ferrari'}});

