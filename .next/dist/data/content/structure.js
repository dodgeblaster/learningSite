'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/garyjennings/Desktop/saitcourse/saitsite/data/content/structure.js';

var unitsAndMeasurements = {
    ready: false,
    number: '6',
    name: 'Units and Measurements',
    slideshow: '',
    notes: '',
    resources: _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }),
    exercise: _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    })
};

var boxModel = {
    ready: false,
    number: '7',
    name: 'Box Model',
    slideshow: 'https://docs.google.com/presentation/d/1FXRpCBZ92A5XQkTIbXCcsOCb9t62cdWpBsSzFVWunVk/embed?start=false&loop=false&delayms=3000',
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/5-box-model.html',
    exercise: _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('h2', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, 'Exercise - Try out the Box Model'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, 'Make a new project with an index.html file. Inside this index file we will have 3 containing divs: a header, section, and footer div, each with a different background color. Each Section should have an h1 tag labeling the section, and each section should have some padding to give some white space between the text and the edge of the container. Click ', _react2.default.createElement('a', { href: '../../img/boxmodelmockup.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'here'), ' for a reference.'))
};

var displayType = {
    ready: false,
    number: '8',
    name: 'Display Type',
    slideshow: '',
    notes: '',
    resources: _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }),
    exercise: _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    })
};

var positioning = {
    ready: false,
    number: '9',
    name: 'Positioning',
    slideshow: '',
    notes: '',
    resources: _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }),
    exercise: _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    })
};

var images = {
    ready: false,
    number: '10',
    name: 'Images',
    slideshow: 'https://docs.google.com/presentation/d/1sIaVn2izbxuHh74Xq7kCQ0S4EsgGSxcCgDklrwYSBZI/embed?start=false&loop=false&delayms=3000',
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/6-html-images.html',
    resources: _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, _react2.default.createElement('h2', { style: { marginTop: '20px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, 'Landing Page Code'), _react2.default.createElement('a', { href: 'https://github.com/dodgeblaster/landing-page', __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }, 'Click Here')),
    exercise: _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, _react2.default.createElement('h2', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }, 'Exercise - Make a Landing Page'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }, 'For this excercise, we are going to make a landing page. This should an image from unsplash as the background. The image should resize itself when you adjust the width fo the browser window and stay cetnered. This page should have an h1 tag and some lorem ipsum text, along with an anchor tag that looks like a button. Click ', _react2.default.createElement('a', { href: '../../img/imgmock.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, 'here'), ' for reference.'))
};

exports.default = {
    name: 'Structure',
    color: '#AA30FD',
    chapters: [unitsAndMeasurements, boxModel, displayType, positioning, images]
};