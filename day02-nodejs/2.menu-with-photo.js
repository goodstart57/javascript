/**
 * module:: 2.menu-with-photo.js
 * */

var _ = require('lodash')
var menus = ['짜장면', '짬뽕', '볶음밥'] // Array 배열
var today_menu = _.sample(menus)

// console.log(`오늘의 메뉴는 ${today_menu}`)
// 오늘의 메뉴는 볶음밥

var object = {
    짜장면:'http://ojsfile.ohmynews.com/STD_IMG_FILE/2016/1214/IE002069160_STD.jpg',
    짬뽕:'https://png.pngtree.com/element_origin_min_pic/00/00/11/095823383855d7e.jpg',
    볶음밥:'http://food.chosun.com/site/data/img_dir/2012/08/08/2012080802054_0.jpg'
}

// console.log(object[today_menu])
// https://png.pngtree.com/element_origin_min_pic/00/00/11/095823383855d7e.jpg
// console.log(object.today_menu)
// undefined

