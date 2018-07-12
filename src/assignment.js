'use strict';

import templates from './assignment.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './assignment.scss';
import './searchbox/searchbox';
import './shopping-list/shopping-list';
import './shopping-layout/shopping-layout';

class assignment extends Component {
	created() {}
}
Soy.register(assignment, templates);

export {
	assignment
};
export default assignment;
