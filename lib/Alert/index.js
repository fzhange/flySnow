'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../index-ecdf2389.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var css_248z = ".index_div_style__cKDa8 {\n  background-color: lightgoldenrodyellow;\n}\n.index_div_style__cKDa8 .index_hi__3YzxA {\n  color: aqua;\n}\n";
var style = {"div_style":"index_div_style__cKDa8","hi":"index_hi__3YzxA","divStyle":"index_div_style__cKDa8"};
index.styleInject(css_248z);

var Alert = /*#__PURE__*/function (_React$Component) {
  index.inheritsLoose(Alert, _React$Component);

  function Alert(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = Alert.prototype;

  _proto.doClick = function doClick() {
    alert('12345678');
  };

  _proto.render = function render() {
    var _context;

    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: style.div_style
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: style.hi,
      onClick: index.bind(_context = this.doClick).call(_context, this)
    }, " this is alert "), /*#__PURE__*/React__default['default'].createElement(index.Button, null));
  };

  return Alert;
}(React__default['default'].Component);

exports.default = Alert;
//# sourceMappingURL=index.js.map
