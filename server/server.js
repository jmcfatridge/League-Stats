var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var mongoose = require('mongoose');
var Item = require('../database/models');


app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/items', (req, res) => {
  // axios.get('http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/item.json')
  //   .then((data) => {
  //     var items = data.data.data;
  //     for(var key in items) {
  //       var item = new Item({
  //         _id: key,
  //         name: items[key].name,
  //         ap: (items[key].stats.FlatMagicDamageMod || 0),
  //         ad: (items[key].stats.FlatPhysicalDamageMod || 0),
  //         atkSpeed: (items[key].stats.PercentAttackSpeedMod || 0),
  //         crit: (items[key].stats.FlatCritChanceMod || 0)
  //       }).save()
  //     }
  //     res.send(items).end();
  //   })
  //   .catch((err) => {
  //     res.send(err).end();
  //   })
  Item.find().then((data) => {
    res.send(data).end()
  })
})

module.exports = app;

