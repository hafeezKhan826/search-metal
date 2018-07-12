'use strict';

import templates from './filter.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './filter.scss';

class Filter extends Component {
	created() {
		this.filters = [];
	}

	close(event) {


		//Reset Filter
		this.filters = [];
		// Brand
		let brand = document.getElementsByName('brand');
		brand.forEach(item => {
			if (item.checked) {
				let data = {
					item: item.value,
					name: item.name,
				};
				this.filters.push(data);
			}
		})
		// Ratings
		let rating = document.getElementsByName('rating');
		rating.forEach(item => {
			if (item.checked) {
				let data = {
					item: item.value,
					name: item.name,
				}
				this.filters.push(data)
			}
		})

		this.emit('emitFilter', {
			filter: this.filters
		});
	}
}
Soy.register(Filter, templates);

Filter.STATE = {
	availableRatings: {
		value: []
	},
	availableBrands: {
		value: []
	}
};

export {
	Filter
};
export default Filter;
