'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/garyjennings/Desktop/saitcourse/saitsite/components/ChapterPage/SideBar.js';


var renderLink = function renderLink(chapter, section) {
    return _react2.default.createElement(_link2.default, { href: { pathname: chapter.url ? chapter.url : '/chapter', query: { section: section, chapter: chapter.number } }, __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement('a', {
        href: chapter.link,
        style: style.link, __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, chapter.number, '. ', chapter.name));
};

var renderSection = function renderSection(section) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('p', { style: style.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, section.name), _react2.default.createElement('div', { style: (0, _assign2.default)({}, style.chapterBlock, { borderLeftColor: section.color }), __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, section.chapters.map(function (x) {
        return renderLink(x, section.name);
    })));
};

exports.default = function (_ref) {
    var sections = _ref.sections,
        selected = _ref.selected;
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement('div', { style: style.chapterBlockContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, sections.map(function (x) {
        return renderSection(x);
    })));
};

var style = {
    chapterBlockContainer: {
        padding: '10px 40px 40px 40px'
    },

    chapterBlock: {
        borderLeftStyle: 'solid',
        borderLeftWidth: '4px',
        fontFamily: "'Lato', sans-serif",
        padding: '0 0 0 15px'
    },

    title: {
        fontWeight: 900,
        margin: '40px 0 10px 0'
    },

    link: {
        fontWeight: 300,
        color: '#222',
        display: 'block',
        margin: '5px 0'
    }
};