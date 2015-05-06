'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('update-test', 'root', '123qwe', {'define' : {'timestamps': false}});

var carEntity = {
  'id'   : Sequelize.INTEGER,
  'brand': Sequelize.STRING,
  'color': Sequelize.STRING
};

var Car = sequelize.define('Car', carEntity, {'tableName': 'CAR'});

Car.update({'color': 'Yellow'}, {'where': {'brand': 'ferrari'}});

