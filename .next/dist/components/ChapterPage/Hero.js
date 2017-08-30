'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/garyjennings/Desktop/saitcourse/saitsite/components/ChapterPage/Hero.js';

exports.default = function (_ref) {
    var section = _ref.section,
        chapter = _ref.chapter;
    return _react2.default.createElement('div', { style: style.hero, __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 3
        }
    }, _react2.default.createElement('h1', { style: style.font, __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, section), _react2.default.createElement('h1', { style: style.font, __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, chapter)));
};

var style = {
    hero: {
        width: '100%',
        height: '350px',
        display: 'flex',
        justifyContent: 'start',
        paddingLeft: '20%',
        alignItems: 'center',
        backgroundImage: 'url("/static/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        color: 'white'
    },

    font: {
        fontWeight: 900,
        fontSize: '3.6em'
    }
};