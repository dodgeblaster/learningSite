"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/garyjennings/Desktop/saitcourse/saitsite/components/ChapterPage/SlideShow.js";

exports.default = function (_ref) {
    var url = _ref.url;
    return _react2.default.createElement("div", { style: style.slideshowContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    }, _react2.default.createElement("h1", { style: style.font, __source: {
            fileName: _jsxFileName,
            lineNumber: 3
        }
    }, "Slideshow"), _react2.default.createElement("div", { style: style.innerContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("iframe", {
        style: { border: 'none' },
        src: url,
        frameborder: "0",
        width: "840",
        height: "460",
        allowfullscreen: "true",
        mozallowfullscreen: "true",
        webkitallowfullscreen: "true",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    })));
};

var style = {
    slideshowContainer: {
        margin: '40px 40px'
    },

    font: {
        fontWeight: 900,
        fontSize: '1.7em'
    },

    innerContainer: {
        width: '100%'
    }
};