'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/garyjennings/Desktop/saitcourse/saitsite/components/ChapterPage/Section.js';

exports.default = function (_ref) {
    var title = _ref.title,
        children = _ref.children;
    return _react2.default.createElement('div', { style: style.sectionContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    }, _react2.default.createElement('div', { style: style.innerContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement('h1', { style: style.font, __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, title), children));
};

var style = {
    sectionContainer: {
        margin: '40px 40px'
    },

    font: {
        fontWeight: 900,
        fontSize: '1.7em'
    },

    innerContainer: {
        background: '#eee',
        width: '100%',
        padding: '30px'
    }
};