// Entry point for the build script in your package.json
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import jquery from "jquery";

Rails.start();
Turbolinks.start();
window.jQuery = jquery;
window.$ = jquery;

import "bootstrap";
import("flatpickr");
import("chartkick");
import("chart.js");

import("./flatpickr");
import("./workouts");
import("./welcome");

import {config, library, dom} from '@fortawesome/fontawesome-svg-core'
import {faHospital as fasFaHospital} from '@fortawesome/free-solid-svg-icons'
import {faUser as fasFaUser} from '@fortawesome/free-solid-svg-icons'
import {faChartBar as fasFaChartBar} from '@fortawesome/free-solid-svg-icons'
import {faSignature as fasFaSignature} from '@fortawesome/free-solid-svg-icons'
import {faLaptopHouse as fasFaLaptopHouse} from '@fortawesome/free-solid-svg-icons'
import {faDirections as fasFaDirections} from '@fortawesome/free-solid-svg-icons'
import {faUserMd as fasFaUserMd} from '@fortawesome/free-solid-svg-icons'
import {faExclamationCircle as fasFaExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {faClock as fasFaClock} from '@fortawesome/free-solid-svg-icons'
import {faCar as fasFaCar} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt as fasFaTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {faTachometerAlt as fasFaTachometerAlt} from '@fortawesome/free-solid-svg-icons'
import {faSearch as fasFaSearch} from '@fortawesome/free-solid-svg-icons'
import {faCheckDouble as fasFaCheckDouble} from '@fortawesome/free-solid-svg-icons'
import {faPlus as fasFaPlus} from '@fortawesome/free-solid-svg-icons'
import {faListUl as fasFaListUl} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft as fasFaArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faEllipsisV as fasFaEllipsisV} from '@fortawesome/free-solid-svg-icons'
import {faStickyNote as fasFaStickyNote} from '@fortawesome/free-solid-svg-icons'
import {faBell as fasFaBell} from '@fortawesome/free-solid-svg-icons'
import {faPlusCircle as fasFaPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {faCity as fasFaCity} from '@fortawesome/free-solid-svg-icons'
import {faFilter as fasFaFilter} from '@fortawesome/free-solid-svg-icons'
import {faTools as fasFaTools} from '@fortawesome/free-solid-svg-icons'
import {faClipboardList as fasFaClipboardList} from '@fortawesome/free-solid-svg-icons'
import {faCog as fasFaCog} from '@fortawesome/free-solid-svg-icons'
import {faEdit as fasFaEdit} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt as fasFaSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {faUsers as fasFaUsers} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight as fasFaChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faEye as fasFaEye} from '@fortawesome/free-solid-svg-icons'
import {faPencilAlt as fasFaPencilAlt} from '@fortawesome/free-solid-svg-icons'
import {faFileExport as fasFaFileExport} from '@fortawesome/free-solid-svg-icons'
import {faArrowCircleDown as fasFaArrowCircleDown} from '@fortawesome/free-solid-svg-icons'
import {faQuestionCircle as fasFaQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import {faTag as fasFaTag} from '@fortawesome/free-solid-svg-icons'
import {faMedkit as fasFaMedkit} from '@fortawesome/free-solid-svg-icons'
import {faBusinessTime as fasFaBusinessTime} from '@fortawesome/free-solid-svg-icons'
import {faFlag as fasFaFlag} from '@fortawesome/free-solid-svg-icons'
import {faHome as fasFaHome} from '@fortawesome/free-solid-svg-icons'
import {faAddressCard as fasFaAddressCard} from '@fortawesome/free-solid-svg-icons'
import {faPhone as fasFaPhone} from '@fortawesome/free-solid-svg-icons'
import {faMoon as fasFaMoon} from '@fortawesome/free-solid-svg-icons'
import {faFax as fasFaFax} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope as fasFaEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle as fasFaUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBill as fasFaMoneyBill} from '@fortawesome/free-solid-svg-icons'
import {faIdBadge as fasFaIdBadge} from '@fortawesome/free-solid-svg-icons'
import {faKey as fasFaKey} from '@fortawesome/free-solid-svg-icons'
import {faStar as fasFaStar} from '@fortawesome/free-solid-svg-icons'
import {faClipboard as fasFaClipboard} from '@fortawesome/free-solid-svg-icons'
import {faRoute as fasFaRoute} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft as fasFaChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faBullseye as fasFaBullseye} from '@fortawesome/free-solid-svg-icons'
import {faMapMarkerAlt as fasFaMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faSpinner as fasFaSpinner} from '@fortawesome/free-solid-svg-icons'
import {faGlobe as fasFaGlobe} from '@fortawesome/free-solid-svg-icons'

import {faClock as farFaClock} from '@fortawesome/free-regular-svg-icons'
import {faCalendarAlt as farFaCalendarAlt} from '@fortawesome/free-regular-svg-icons'
import {faBell as farFaBell} from '@fortawesome/free-regular-svg-icons'
import {faUser as farFaUser} from '@fortawesome/free-regular-svg-icons'

config.mutateApproach = 'sync'
library.add(fasFaHospital, fasFaUser, fasFaChartBar, fasFaSignature, farFaClock, fasFaLaptopHouse, fasFaDirections,
  fasFaUserMd, fasFaExclamationCircle, fasFaClock, fasFaCar, fasFaTrashAlt, fasFaTachometerAlt, fasFaSearch,
  fasFaCheckDouble, fasFaPlus, farFaCalendarAlt, farFaBell, farFaUser, fasFaListUl, fasFaArrowLeft, fasFaEllipsisV,
  fasFaStickyNote, fasFaBell, fasFaPlusCircle, fasFaCity, fasFaFilter, fasFaTools, fasFaClipboardList, fasFaCog,
  fasFaEdit, fasFaSignOutAlt, fasFaUsers, fasFaChevronRight, fasFaEye, fasFaPencilAlt, fasFaFileExport, fasFaGlobe,
  fasFaArrowCircleDown, fasFaQuestionCircle, fasFaTag, fasFaMedkit, fasFaBusinessTime, fasFaFlag, fasFaHome,
  fasFaAddressCard, fasFaPhone, fasFaMoon, fasFaFax, fasFaEnvelope, fasFaUserCircle, fasFaMoneyBill, fasFaIdBadge,
  fasFaKey, fasFaStar, fasFaClipboard, fasFaRoute, fasFaChevronLeft, fasFaBullseye, fasFaMapMarkerAlt, fasFaSpinner)
dom.watch()
