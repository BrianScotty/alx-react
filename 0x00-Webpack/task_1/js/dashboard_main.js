'use strict';
import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - ALX</p>');

const updateCounter = () => {
  let times = $('#count').html() || 0;
  $('button').on('click', () => {
    times++;
    $('#count').html(`${times} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();
<<<<<<< HEAD
=======

>>>>>>> ed735ee0ac3293aa22e5ff07bb687be8a854fc43
