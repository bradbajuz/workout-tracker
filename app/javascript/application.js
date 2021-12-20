// Entry point for the build script in your package.json
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import jquery from "jquery";

Rails.start();
Turbolinks.start();
window.jQuery = jquery;
window.$ = jquery;

import("bootstrap");
import("flatpickr");
import("chartkick");
import("chart.js");

import("./flatpickr");
import("./workouts");
import("./welcome");

import {config, library, dom} from '@fortawesome/fontawesome-svg-core'
import {faUser as fasFaUser} from '@fortawesome/free-solid-svg-icons'
import {faCog as fasFaCog} from '@fortawesome/free-solid-svg-icons'
import {faEdit as fasFaEdit} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt as fasFaSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight as fasFaChevronRight} from '@fortawesome/free-solid-svg-icons'

import {faClock as farFaClock} from '@fortawesome/free-regular-svg-icons'
import {faUser as farFaUser} from '@fortawesome/free-regular-svg-icons'

config.mutateApproach = 'sync'
library.add(fasFaUser, farFaClock, farFaUser, fasFaCog, fasFaEdit, fasFaSignOutAlt, fasFaChevronRight)
dom.watch()
