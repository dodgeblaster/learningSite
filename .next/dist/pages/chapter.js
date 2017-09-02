'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('../components/Page.js');

var _Page2 = _interopRequireDefault(_Page);

var _NavBar = require('../components/NavBar.js');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _SideBar = require('../components/ChapterPage/SideBar.js');

var _SideBar2 = _interopRequireDefault(_SideBar);

var _Hero = require('../components/ChapterPage/Hero.js');

var _Hero2 = _interopRequireDefault(_Hero);

var _SlideShow = require('../components/ChapterPage/SlideShow.js');

var _SlideShow2 = _interopRequireDefault(_SlideShow);

var _Section = require('../components/ChapterPage/Section.js');

var _Section2 = _interopRequireDefault(_Section);

var _sections = require('../data/sections.js');

var _sections2 = _interopRequireDefault(_sections);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/garyjennings/Desktop/saitcourse/saitsite/pages/chapter.js?entry';


var renderSlideshow = function renderSlideshow(x) {
    return x.slideshow ? _react2.default.createElement(_SlideShow2.default, { url: x.slideshow, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }) : '';
};
var renderNotes = function renderNotes(x) {
    return x.notes ? _react2.default.createElement(_Section2.default, { title: 'Notes', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('a', { href: x.notes, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, 'GitBook Notes')) : '';
};
var renderCode = function renderCode(x) {
    return x.code ? _react2.default.createElement(_Section2.default, { title: 'Code', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('a', { href: x.code, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, 'GitHub Code')) : '';
};
var renderResources = function renderResources(x) {
    return x.resources ? _react2.default.createElement(_Section2.default, { title: 'Resources', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, x.resources) : '';
};
var renderExercise = function renderExercise(x) {
    return x.exercise ? _react2.default.createElement(_Section2.default, { title: 'Exercise', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, x.exercise) : '';
};

var renderContent = function renderContent(chapter) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, renderSlideshow(chapter), renderNotes(chapter), renderCode(chapter), renderResources(chapter), renderExercise(chapter));
};

var renderNotReadyYet = function renderNotReadyYet() {
    return _react2.default.createElement(_Section2.default, { title: 'Chapter content coming soon', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    });
};

exports.default = function (_ref) {
    var url = _ref.url;

    var sectionName = _sections2.default.find(function (x) {
        return x.name === url.query.section;
    }).name;
    var chapters = _sections2.default.find(function (x) {
        return x.name === url.query.section;
    }).chapters;
    var chapter = chapters.find(function (x) {
        return x.number == url.query.chapter;
    });

    return _react2.default.createElement(_Page2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement(_NavBar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }), _react2.default.createElement('div', { style: style.mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement('div', { style: style.sidebarContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement(_SideBar2.default, { sections: _sections2.default, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    })), _react2.default.createElement('div', { style: style.contentContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement(_Hero2.default, {
        section: sectionName,
        chapter: chapter.number + '. ' + chapter.name,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }), chapter.ready ? renderContent(chapter) : renderNotReadyYet())));
};

var style = {
    blockContainer: {
        padding: '20px 0 80px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainContainer: {
        display: 'flex',
        height: 'calc(100vh - 60px)',
        minWidth: '1000px'
    },

    sidebarContainer: {
        flex: '0 300px',
        overflowY: 'scroll'
    },

    contentContainer: {
        flex: 1,
        background: 'white',
        overflowY: 'scroll'
    }
};