'use strict';

import templates from './shop-item.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './shop-item.scss';

class ShopItem extends Component {
	created() {}
}
Soy.register(ShopItem, templates);

export {
	ShopItem
};
export default ShopItem;
