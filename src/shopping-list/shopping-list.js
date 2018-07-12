'use strict';

import templates from './shopping-list.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './shopping-list.scss';

class ShoppingList extends Component {
	created() {}
}
Soy.register(ShoppingList, templates);

ShoppingList.STATE = {
	list: {
		value: []
	}
}
export {
	ShoppingList
};
export default ShoppingList;
