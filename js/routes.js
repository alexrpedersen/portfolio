'use strict';

(function(module) {
  var controller = {};
    // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
    // code that used to be in index.html.
    // Also be sure to hide all the main section elements, and reveal the #articles section:

  controller.showProjects = function() {
    // console.log('using page js');
    $('#projects').fadeIn('slow');
    $('#resume').hide();
    $('#about').hide();
    $('#contact').hide();
  }

  controller.showResume = function() {
    $('#projects').hide();
    $('#resume').fadeIn('slow');
    $('#about').hide();
    $('#contact').hide();
  }

  controller.showAbout = function() {
    $('#projects').hide();
    $('#resume').hide();
    $('#about').fadeIn('slow');
    $('#contact').hide();
  }

  controller.showContact = function() {
    $('#projects').hide();
    $('#resume').hide();
    $('#about').hide();
    $('#contact').fadeIn('slow');
  }
  module.controller = controller;
})(window);

page.base('');

page('/', controller.showProjects);
page('/resume', controller.showResume);
page('/about', controller.showAbout);
page('/contact', controller.showContact);

page();