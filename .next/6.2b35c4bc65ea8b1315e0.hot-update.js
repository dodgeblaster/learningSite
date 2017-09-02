webpackHotUpdate(6,{

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _Page = __webpack_require__(559);

var _Page2 = _interopRequireDefault(_Page);

var _NavBar = __webpack_require__(560);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _SideBar = __webpack_require__(580);

var _SideBar2 = _interopRequireDefault(_SideBar);

var _Hero = __webpack_require__(581);

var _Hero2 = _interopRequireDefault(_Hero);

var _SlideShow = __webpack_require__(582);

var _SlideShow2 = _interopRequireDefault(_SlideShow);

var _Section = __webpack_require__(583);

var _Section2 = _interopRequireDefault(_Section);

var _sections = __webpack_require__(575);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/garyjennings/Desktop/saitcourse/saitsite/pages/chapter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/garyjennings/Desktop/saitcourse/saitsite/pages/chapter.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(108)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/chapter")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4yYjM1YzRiYzY1ZWE4YjEzMTVlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hhcHRlci5qcz9hMjU1OTM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlICAgICAgICAgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlLmpzJ1xuaW1wb3J0IE5hdkJhciAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci5qcydcbmltcG9ydCBTaWRlQmFyICAgICAgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFwdGVyUGFnZS9TaWRlQmFyLmpzJ1xuaW1wb3J0IEhlcm8gICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL0NoYXB0ZXJQYWdlL0hlcm8uanMnXG5pbXBvcnQgU2xpZGVTaG93ICAgIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcHRlclBhZ2UvU2xpZGVTaG93LmpzJ1xuaW1wb3J0IFNlY3Rpb24gICAgICBmcm9tICcuLi9jb21wb25lbnRzL0NoYXB0ZXJQYWdlL1NlY3Rpb24uanMnXG5pbXBvcnQgc2VjdGlvbnMgICAgIGZyb20gJy4uL2RhdGEvc2VjdGlvbnMuanMnXG5cbmNvbnN0IHJlbmRlclNsaWRlc2hvdyAgID0geCA9PiB4LnNsaWRlc2hvdyAgPyA8U2xpZGVTaG93IHVybD17eC5zbGlkZXNob3d9Lz4gOiAnJ1xuY29uc3QgcmVuZGVyTm90ZXMgICAgICAgPSB4ID0+IHgubm90ZXMgICAgICA/IDxTZWN0aW9uIHRpdGxlPXsnTm90ZXMnfT48YSBocmVmPXsgeC5ub3RlcyB9PkdpdEJvb2sgTm90ZXM8L2E+PC9TZWN0aW9uPiA6ICcnXG5jb25zdCByZW5kZXJDb2RlICAgICAgICA9IHggPT4geC5jb2RlICAgICAgID8gPFNlY3Rpb24gdGl0bGU9eydDb2RlJ30+PGEgaHJlZj17IHguY29kZSB9PkdpdEh1YiBDb2RlPC9hPjwvU2VjdGlvbj4gOiAnJ1xuY29uc3QgcmVuZGVyUmVzb3VyY2VzICAgPSB4ID0+IHgucmVzb3VyY2VzICA/IDxTZWN0aW9uIHRpdGxlPXsnUmVzb3VyY2VzJ30+eyB4LnJlc291cmNlcyB9PC9TZWN0aW9uPiA6ICcnXG5jb25zdCByZW5kZXJFeGVyY2lzZSAgICA9IHggPT4geC5leGVyY2lzZSAgID8gPFNlY3Rpb24gdGl0bGU9eydFeGVyY2lzZSd9PnsgeC5leGVyY2lzZSB9PC9TZWN0aW9uPiA6ICcnXG5cbmNvbnN0IHJlbmRlckNvbnRlbnQgPSBjaGFwdGVyID0+IChcbiAgICA8ZGl2PlxuICAgICAgICB7IHJlbmRlclNsaWRlc2hvdyhjaGFwdGVyKSB9XG4gICAgICAgIHsgcmVuZGVyTm90ZXMoY2hhcHRlcikgfVxuICAgICAgICB7IHJlbmRlckNvZGUoY2hhcHRlcikgfVxuICAgICAgICB7IHJlbmRlclJlc291cmNlcyhjaGFwdGVyKSB9XG4gICAgICAgIHsgcmVuZGVyRXhlcmNpc2UoY2hhcHRlcikgfVxuICAgIDwvZGl2PlxuKVxuXG5jb25zdCByZW5kZXJOb3RSZWFkeVlldCA9ICgpID0+IChcbiAgICA8U2VjdGlvbiB0aXRsZT17J0NoYXB0ZXIgY29udGVudCBjb21pbmcgc29vbid9PlxuICAgIDwvU2VjdGlvbj5cbilcblxuZXhwb3J0IGRlZmF1bHQgKHt1cmx9KSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbk5hbWUgICA9IHNlY3Rpb25zLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHVybC5xdWVyeS5zZWN0aW9uKS5uYW1lXG4gICAgY29uc3QgY2hhcHRlcnMgICAgICA9IHNlY3Rpb25zLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHVybC5xdWVyeS5zZWN0aW9uKS5jaGFwdGVyc1xuICAgIGNvbnN0IGNoYXB0ZXIgICAgICAgPSBjaGFwdGVycy5maW5kKHggPT4geC5udW1iZXIgPT0gdXJsLnF1ZXJ5LmNoYXB0ZXIpXG5cbiAgICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgICA8TmF2QmFyLz5cblxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5tYWluQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLnNpZGViYXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxTaWRlQmFyIHNlY3Rpb25zPXtzZWN0aW9uc30vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNvbnRlbnRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxIZXJvXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb249e3NlY3Rpb25OYW1lfVxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyPXtgJHtjaGFwdGVyLm51bWJlcn0uICR7Y2hhcHRlci5uYW1lfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7IGNoYXB0ZXIucmVhZHkgPyByZW5kZXJDb250ZW50KGNoYXB0ZXIpIDogcmVuZGVyTm90UmVhZHlZZXQoKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9QYWdlPlxuKX1cblxuY29uc3Qgc3R5bGUgPSB7XG4gICAgYmxvY2tDb250YWluZXI6IHtcbiAgICAgICAgcGFkZGluZzogJzIwcHggMCA4MHB4IDAnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcblxuICAgIG1haW5Db250YWluZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNjBweCknLFxuICAgICAgICBtaW5XaWR0aDogJzEwMDBweCdcbiAgICB9LFxuXG4gICAgc2lkZWJhckNvbnRhaW5lcjoge1xuICAgICAgICBmbGV4OiAnMCAzMDBweCcsXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCdcbiAgICB9LFxuXG4gICAgY29udGVudENvbnRhaW5lcjoge1xuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2hhcHRlci5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFoQkE7QUFDQTtBQXdCQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFDQTs7QUFRQTtBQUNBO0FBR0E7QUFMQTtBQUNBOztBQU1BO0FBR0E7QUFKQTtBQUNBOztBQUtBO0FBQ0E7QUFBQTtBQUZBO0FBcEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=