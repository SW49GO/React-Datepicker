"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _fa = require("react-icons/fa");
var _dropdownReactSw49go = require("dropdown-react-sw49go");
var parms = _interopRequireWildcard(require("./parameters"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function DatePickerReact(_ref) {
  var _styleInput$width;
  let {
    onSelect,
    textLabel,
    styleLabel,
    styleInput,
    idInput,
    iconInputColor,
    language,
    positionDPR,
    bckColor,
    dateColor
  } = _ref;
  // Default French Values
  let objMonth = parms.frMonth;
  let days = parms.frDay;
  let textPlaceholder = parms.frPlaceholder;
  // Switch language to display informations
  switch (language) {
    case 'fr':
      objMonth = parms.frMonth;
      days = parms.frDay;
      textPlaceholder = parms.frPlaceholder;
      break;
    case 'en':
      objMonth = parms.enMonth;
      days = parms.enDay;
      textPlaceholder = parms.enPlaceholder;
      break;
    case 'de':
      objMonth = parms.deMonth;
      days = parms.deDay;
      textPlaceholder = parms.dePlaceholder;
      break;
    default:
  }
  // Position datepicker over or under the Input
  const position = positionDPR === 'top' ? {
    top: '-535%'
  } : {
    top: '120%'
  };
  const mergedContainer = {
    ...parms.styleDatepicker.container,
    backgroundColor: bckColor !== null && bckColor !== void 0 ? bckColor : parms.styleDatepicker.container,
    ...position
  };
  const mergedInputIcon = {
    ...parms.styleDatepicker.dateIcon,
    color: iconInputColor !== null && iconInputColor !== void 0 ? iconInputColor : parms.styleDatepicker.dateIcon
  };
  const mergedStyeInput = {
    ...parms.styleDatepicker.dateInputInput,
    ...styleInput
  };
  const mergedContainerInput = {
    ...parms.styleDatepicker.dateInput,
    width: (_styleInput$width = styleInput.width) !== null && _styleInput$width !== void 0 ? _styleInput$width : parms.styleDatepicker.dateInput
  };
  const mergedStyleLabel = {
    ...parms.styleDatepicker.labelStyle,
    ...styleLabel
  };

  // Default value for the Date
  const date = new Date();
  const todayDate = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  // States for Day/Month/year
  const [currentDate, setCurrentDate] = (0, _react.useState)(todayDate);
  const [choiceMonth, setChoiceMonth] = (0, _react.useState)(currentMonth);
  const [choiceYear, setChoiceYear] = (0, _react.useState)(currentYear);

  // Number of Days in the chosen month and year
  const nbDaysofMonth = new Date(choiceYear, choiceMonth + 1, 0).getDate();

  /**
   * Function to change the Month and Year after December or before January
   * @param {string} choice 
   */
  const ChangeMonth = choice => {
    let newMonth;
    let newYear = choiceYear;
    if (choice === 'next') {
      newMonth = (choiceMonth + 1) % 12;
      if (newMonth === 0) {
        newYear++;
      }
    } else {
      newMonth = (choiceMonth - 1 + 12) % 12;
      if (newMonth === 11) {
        newYear--;
      }
    }
    setChoiceMonth(newMonth);
    setChoiceYear(newYear);
  };
  // State for the firt day of the month chosed
  const [firstDaysMonth, setFirstDaysMonth] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    const firstDayOfMonth = new Date(choiceYear, choiceMonth, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    setFirstDaysMonth(dayOfWeek);
  }, [choiceYear, choiceMonth]);

  // State to store an array of years
  const [yearsDrop, setYearsDrop] = (0, _react.useState)([]);
  const startYear = 1950;
  (0, _react.useEffect)(() => {
    const yearArray = [];
    for (let i = startYear; i <= currentYear + 50; i++) {
      yearArray.push({
        name: "".concat(i)
      });
    }
    setYearsDrop(yearArray);
  }, [currentYear]);

  // State for the selected day
  const [selectedDay, setSelectedDay] = (0, _react.useState)(todayDate);
  // State opening of the DatePicker
  const [isDateOpen, setIsDateOpen] = (0, _react.useState)(false);
  const HandleDayClick = dayIndex => {
    setSelectedDay(dayIndex === selectedDay ? selectedDay : dayIndex);
    setCurrentDate(dayIndex);
  };
  const handleMonth = selectOption => {
    const selectedMonthIndex = objMonth.findIndex(month => month.name === selectOption);
    setChoiceMonth(selectedMonthIndex);
  };
  const handleYear = selectOption => {
    setChoiceYear(selectOption);
  };
  // When click on Icon Home
  const StartHomeDate = () => {
    setChoiceMonth(currentMonth);
    setChoiceYear(currentYear);
    setCurrentDate(todayDate);
    setSelectedDay(todayDate);
  };
  // When click on Cancel button
  const CancelDatePicker = () => {
    setIsDateOpen(false);
    StartHomeDate();
  };
  // State placeholder of the Input
  const [dateChoose, setDateChoose] = (0, _react.useState)('');

  // Ref for Input
  const inputRef = (0, _react.useRef)(null);

  // Handle Icon click
  const handleClickIcon = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const ValidDatePicker = () => {
    const currentMonth = choiceMonth + 1;
    const validDate = "".concat(selectedDay < 10 ? '0' + selectedDay : selectedDay, "/").concat(currentMonth < 10 ? '0' + currentMonth : currentMonth, "/").concat(choiceYear);
    setDateChoose(validDate);
    onSelect(validDate);
    setIsDateOpen(false);
    StartHomeDate();
  };
  const handleFocus = () => {
    setIsDateOpen(true);
  };
  // Manage Enter Key
  const handleKeyEnter = event => {
    if (event.keyCode === 13) {
      ValidDatePicker();
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: parms.styleDatepicker.datepickerStyle
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    style: mergedStyleLabel,
    htmlFor: idInput
  }, textLabel), /*#__PURE__*/_react.default.createElement("div", {
    style: mergedContainerInput
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: inputRef,
    id: idInput,
    style: mergedStyeInput,
    type: "text",
    placeholder: textPlaceholder,
    defaultValue: dateChoose,
    required: true,
    onClick: () => setIsDateOpen(true),
    onFocus: handleFocus,
    onKeyDown: handleKeyEnter
  }), /*#__PURE__*/_react.default.createElement(_fa.FaCalendarDay, {
    style: mergedInputIcon,
    onClick: handleClickIcon
  }))), isDateOpen && /*#__PURE__*/_react.default.createElement("div", {
    style: mergedContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: parms.styleDatepicker.header
  }, /*#__PURE__*/_react.default.createElement(_fa.FaCaretLeft, {
    onClick: () => ChangeMonth('preview'),
    style: {
      paddingRight: 5
    }
  }), /*#__PURE__*/_react.default.createElement(_dropdownReactSw49go.DropdownReact, {
    data: objMonth,
    initialOption: objMonth[choiceMonth].name,
    onSelect: handleMonth,
    styleContainer: {
      width: '10rem',
      paddingRight: '.3125rem'
    },
    styleHeader: {
      width: '6rem'
    },
    styleContainerList: {
      width: '87.5%',
      scrollbarWidth: 'thin'
    }
  }), yearsDrop.length > 0 && /*#__PURE__*/_react.default.createElement(_dropdownReactSw49go.DropdownReact, {
    data: yearsDrop,
    initialOption: choiceYear,
    onSelect: handleYear,
    styleContainer: {
      width: '4rem'
    },
    styleContainerList: {
      width: '85.5%',
      scrollbarWidth: 'thin'
    }
  }), /*#__PURE__*/_react.default.createElement(_fa.FaHome, {
    style: {
      padding: 5,
      fontSize: '2rem'
    },
    onClick: () => StartHomeDate()
  }), /*#__PURE__*/_react.default.createElement(_fa.FaCaretRight, {
    onClick: () => ChangeMonth('next')
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("table", {
    style: parms.styleDatepicker.calendar
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, days.map((item, index) => /*#__PURE__*/_react.default.createElement("th", {
    key: index
  }, item.slice(0, 2).toLowerCase(), " ")))), /*#__PURE__*/_react.default.createElement("tbody", null, (() => {
    const rows = [];

    // Loop for each week ->0 to firstDaysMonth = empty box
    for (let i = 0; i < Math.ceil((firstDaysMonth + nbDaysofMonth) / 7); i++) {
      const rowItems = [];

      // Loop for each day of the week
      for (let j = 0; j < 7; j++) {
        const dayIndex = i * 7 + j - firstDaysMonth + 1;

        //Check if it's a valid day of the month
        if (dayIndex > 0 && dayIndex <= nbDaysofMonth) {
          rowItems.push( /*#__PURE__*/_react.default.createElement("td", {
            key: dayIndex,
            style: {
              textAlign: 'center',
              color: dayIndex === currentDate ? '#fff' : '#000',
              backgroundColor: dayIndex === currentDate ? bckColor !== null && bckColor !== void 0 ? bckColor : '#8e8787' : dayIndex === selectedDay ? bckColor !== null && bckColor !== void 0 ? bckColor : '#8e8787' : '#fff',
              boxShadow: '3px 5px 3px #000',
              borderRadius: '5px',
              fontWeight: dayIndex === currentDate || dayIndex === selectedDay ? 'bold' : 'normal'
            },
            onClick: () => HandleDayClick(dayIndex),
            onMouseOver: event => {
              event.target.style.backgroundColor = dateColor !== null && dateColor !== void 0 ? dateColor : '#8e8787';
              event.target.style.color = '#fff';
            },
            onMouseOut: event => {
              event.target.style.backgroundColor = dayIndex === selectedDay ? bckColor !== null && bckColor !== void 0 ? bckColor : '8e8787' : '#fff';
              event.target.style.color = dayIndex === selectedDay ? '#fff' : '#000';
            }
          }, dayIndex));
        } else {
          rowItems.push( /*#__PURE__*/_react.default.createElement("td", {
            key: "empty-".concat(j),
            style: {
              backgroundColor: 'transparent'
            }
          }));
        }
      }
      rows.push( /*#__PURE__*/_react.default.createElement("tr", {
        key: i
      }, rowItems));
    }
    return rows;
  })())), /*#__PURE__*/_react.default.createElement("div", {
    style: parms.styleDatepicker.dateFooter
  }, /*#__PURE__*/_react.default.createElement("button", {
    style: parms.styleDatepicker.dateFooterButton,
    onClick: () => CancelDatePicker(),
    onMouseOver: event => {
      event.target.style.backgroundColor = '#8e8787';
      event.target.style.color = '#FFF';
    },
    onMouseOut: event => {
      event.target.style.backgroundColor = '#FFF';
      event.target.style.color = '#000';
    }
  }, "Annuler"), /*#__PURE__*/_react.default.createElement("button", {
    style: parms.styleDatepicker.dateFooterButton,
    onClick: () => ValidDatePicker(),
    onMouseOver: event => {
      event.target.style.backgroundColor = '#8e8787';
      event.target.style.color = '#FFF';
    },
    onMouseOut: event => {
      event.target.style.backgroundColor = '#FFF';
      event.target.style.color = '#000';
    }
  }, "Ok")))));
}
DatePickerReact.propTypes = {
  onSelect: _propTypes.default.func,
  textLabel: _propTypes.default.string,
  styleLabel: _propTypes.default.object,
  idInput: _propTypes.default.string,
  styleInput: _propTypes.default.object,
  language: _propTypes.default.string,
  positionCalendar: _propTypes.default.string,
  bckColor: _propTypes.default.string,
  dateColor: _propTypes.default.string,
  iconInputColor: _propTypes.default.string
};
var _default = exports.default = DatePickerReact;