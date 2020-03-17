'use strict'

//Create pageView object for holding all functions for display tweaks and tab navigation.
var pageView = {};

pageView.setTeasers = function() {
  $('.project-description p:nth-of-type(n+2)').hide(); // Truncate logic to show only first two elements within the project-description body.
  $('article').on('click', '.read-on', function(e){ //event handler
    e.preventDefault(); //prevent default link action
    if ($(this).html() === 'Read on →') {
      $(this).html('Read less &larr;'); //in expanded view, show 'read less'
      $(this).siblings('section.project-description').children().fadeIn('fast'); //link action show all elements of the project-description
    }
    else {
      $(this).html('Read on →');  //otherwise (truncated view), show 'read on'
      $(this).parent().children('section.project-description').children('p:nth-of-type(n+2)').fadeOut('fast'); //link action shows only the first element of the project-description
    }
  });
};

pageView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var category, optionTag;
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

pageView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn('slow');
    } else {
      $('article').not('.template').fadeIn('slow'); //Show all the articles except the template
    }
    // $('#category-filter').val('');
  });
};
