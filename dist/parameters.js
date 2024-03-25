"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleDatepicker = exports.frPlaceholder = exports.frMonth = exports.frDay = exports.enPlaceholder = exports.enMonth = exports.enDay = exports.dePlaceholder = exports.deMonth = exports.deDay = void 0;
const frMonth = exports.frMonth = [{
  'name': 'Janvier'
}, {
  'name': 'Février'
}, {
  'name': 'Mars'
}, {
  'name': 'Avril'
}, {
  'name': 'Mai'
}, {
  'name': 'Juin'
}, {
  'name': 'Juillet'
}, {
  'name': 'Août'
}, {
  'name': 'Septembre'
}, {
  'name': 'Octobre'
}, {
  'name': 'Novembre'
}, {
  'name': 'Décembre'
}];
const frDay = exports.frDay = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const frPlaceholder = exports.frPlaceholder = ['jj / mm / aaaa'];
const enMonth = exports.enMonth = [{
  'name': 'January'
}, {
  'name': 'February'
}, {
  'name': 'March'
}, {
  'name': 'April'
}, {
  'name': 'May'
}, {
  'name': 'June'
}, {
  'name': 'July'
}, {
  'name': 'August'
}, {
  'name': 'Septembrer'
}, {
  'name': 'October'
}, {
  'name': 'November'
}, {
  'name': 'December'
}];
const enDay = exports.enDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const enPlaceholder = exports.enPlaceholder = ['dd / mm / yyyy'];
const deMonth = exports.deMonth = [{
  'name': 'Januar'
}, {
  'name': 'Februar'
}, {
  'name': 'März'
}, {
  'name': 'April'
}, {
  'name': 'Mai'
}, {
  'name': 'Juni'
}, {
  'name': 'Juli'
}, {
  'name': 'August'
}, {
  'name': 'Septembrer'
}, {
  'name': 'Oktober'
}, {
  'name': 'November'
}, {
  'name': 'Dezember'
}];
const deDay = exports.deDay = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const dePlaceholder = exports.dePlaceholder = ['tt / mm / jjjj'];
const styleDatepicker = exports.styleDatepicker = {
  datepickerStyle: {
    position: 'relative',
    width: '13rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  container: {
    position: 'absolute',
    top: '120%',
    left: '1%',
    width: '13rem',
    padding: '.3125rem',
    border: '.0625rem solid #000',
    borderRadius: '.3125rem',
    background: '#aaa4a4',
    zIndex: '20'
  },
  calendar: {
    width: '100%',
    fontSize: '.8rem',
    margin: '1rem 0 0.2rem 0'
  },
  dateInput: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '8rem',
    margin: '0 auto'
  },
  dateInputInput: {
    width: '8rem',
    paddingLeft: '.3125rem'
  },
  dateIcon: {
    position: 'absolute',
    top: '.125rem',
    right: '0'
  },
  dateFooter: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.6rem',
    marginTop: '0.6rem'
  },
  dateFooterButton: {
    borderRadius: '.3125rem',
    boxShadow: '2px 2px 2px #000'
  },
  labelStyle: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '.3125rem'
  }
};