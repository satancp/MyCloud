/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var Application = require('../api/application/application.model');
var Question = require('../api/question/question.model');

Application.find({}).remove()
  .then(() => {
    Application.create({
      name: 'Dota 2',
      description: 'Dota is a competitive game of action and strategy, ' + 
      'played both professionally and casually by millions of ' + 
      'passionate fans worldwide. Players pick from a pool ' + 
      'of over a hundred heroes, forming two teams of five ' + 
      'players.',
      stock_state: true,
      image:'http://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t=1457137796',
      price: 0,
      consumer_number: 513107,
      developer: null
    }, {
      name: 'Rise of the Tomb Raider',
      description: 'Featuring epic, high-octane action moments set in ' + 
      'the most beautiful hostile environments on earth, ' + 
      'Rise of the Tomb Raider delivers a cinematic survival ' + 
      'action adventure where you will join Lara Croft on her ' + 
      'first tomb raiding expedition as she seeks to discover ' + 
      'the secret of immortality.',
      stock_state: true,
      image:'http://cdn.akamai.steamstatic.com/steam/apps/391220/header.jpg?t=1457030769',
      price: 39.99,
      consumer_number: 10512,
      developer: null
    }, {
      name: 'Tom Clancy’s The Division',
      description: 'Black Friday – a devastating pandemic sweeps ' + 
      'through New York City, and one by one, basic ' + 
      'services fail. In only days, without food or water, ' + 
      'society collapses into chaos. The Division, an ' + 
      'autonomous unit of tactical agents, is activated.',
      stock_state: true,
      image:'http://cdn.akamai.steamstatic.com/steam/apps/365590/header.jpg?t=1457537972',
      price: 39.99,
      consumer_number: 11461,
      developer: null
    }, {
      name: 'The Elder Scrolls® Online: Tamriel Unlimited™',
      description: 'The Elder Scrolls® Online: Tamriel Unlimited™, the ' + 
      'latest chapter of the award-winning series, brings the ' + 
      'legendary experience online for the first time. Explore ' + 
      'the vast world with friends or embark upon the ' + 
      'adventure alone - the choices you will make will ' + 
      'shape your destiny. No game subscription required.',
      stock_state: true,
      image:'http://cdn.akamai.steamstatic.com/steam/apps/306130/header.jpg?t=1450415625',
      price: 24.99,
      consumer_number: 7411,
      developer: null
    }, {
      name: 'SMITE',
      description: "Rally here! Join millions of players in Smite, the " +
      "online battleground of the gods. Whether this is your " + 
      "first Multiplayer Online Battle Arena (MOBA) game or " + 
      "you're a seasoned veteran, the competitive action " + 
      "and irreverent mythology of SMITE will make you a " + 
      "believer.",
      stock_state: true,
      image:'http://cdn.akamai.steamstatic.com/steam/apps/386360/header.jpg?t=1456763461',
      price: 0,
      consumer_number: 11388,
      developer: null
    }, {
      name: 'Counter-Strike: Global Offensive',
      description: 'Counter-Strike: Global Offensive (CS: GO) will ' + 
      'expand upon the team-based action gameplay that it ' + 
      'pioneered when it was launched 14 years ago. CS: ' + 
      'GO features new maps, characters, and weapons ' + 
      'and delivers updated versions of the classic CS ' + 
      'content (de_dust, etc.).',
      stock_state: true,
      image:'http://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1457137786',
      price: 11.99,
      consumer_number: 1121892,
      developer: null
    });
  });

Question.find({}).remove()
  .then(() => {
    Question.create({
      content: 'What is your favourite film?',
    }, {
      content: "What is your father's name?",
    }, {
      content: "What is your pet's name?",
    }, {
      content: 'Where would you like to live?',
    });
  });


