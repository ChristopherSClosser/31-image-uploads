'use strict';

require('./scss/main.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');

// require('jquery');
// require('bootstrap');
// require('angular-ui-bootstrap');
// require('bootstrap-css');
require('angular-touch');
require('angular-animate');

require('ng-file-upload');
require('@uirouter/angularjs');

const cfgram = angular.module('cfgram', ['ui.router', 'ngFileUpload', 'ngTouch', 'ngAnimate']);

let context = require.context('./config/', true, /\.js$/);
console.log(context);
context.keys().forEach( path => cfgram.config(context(path)));

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => cfgram.controller(pascalcase(path.basename(key, '.js')),  context(key)));

context = require.context('./service/', true, /\.js$/);
context.keys().forEach( key => cfgram.service(camelcase(path.basename(key, '.js')), context(key)));

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => cfgram.component(camelcase(path.basename(key, '.js')), context(key)));

context = require.context('./filter/', true, /\.js$/);
context.keys().forEach(key => cfgram.filter(camelcase(path.basename(key, '.js')), context(key)));
