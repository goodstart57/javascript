/**
 * module:: 1.menu.js
 * */

var _ = require('lodash')
var menus = ['짜장면', '짬뽕', '볶음밥'] // Array 배열
// console.log(menus)
// ['짜장면', '짬뽕', '볶음밥']

var today_menu = _.sample(menus)
// console.log(today_menu)
// 짜장면