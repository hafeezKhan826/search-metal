'use strict';

import templates from './searchbox.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './searchbox.scss';

class SearchBox extends Component {
	created() {}

	performSearch(event) {
		this.searchText = document.getElementById('search').value;
		this.emit('search', {
			search: this.searchText
		})
	}
}
Soy.register(SearchBox, templates);

SearchBox.STATE = {
	search: ''
};

export {
	SearchBox
};
export default SearchBox;
