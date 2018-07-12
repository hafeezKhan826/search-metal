'use strict';

import templates from './shopping-layout.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import Ajax from 'metal-ajax';
import * as _ from 'lodash';
import './shopping-layout.scss';
import '../searchbox/searchbox';
import '../services/service';
import '../filters/filter';
import '../shopping-list/shopping-list';
import {
	MultiMap
} from 'metal-structs';


const headers = new MultiMap();
const params = new MultiMap();
class ShoppingLayout extends Component {
	created() {
		this.searchKey = 'Puma';
		this.result = [];
		this.filteredResult = [];
		this.response;
		this.filters = [];
		this.resultant = [];
		this.availableBrands = [];
		this.availableRatings = [];
		this.brandFilter = [];
		this.ratingFilter = [];
	}

	makeApiCall(searchKey) {
		if (searchKey) {
			Ajax.request('https://next.json-generator.com/api/json/get/41MRoCJ7H', 'get', searchKey, headers)
				.then(xhrResponse => {
					if (_.isString(xhrResponse.response)) {
						this.result = JSON.parse(xhrResponse.response);
						this.filteredResult = this.result;
					} else {
						this.result = xhrResponse.response;
						this.filteredResult = this.result;
						this.filterSearchResult();
					}
					this.generateFilters();
				}, error => {
					console.log('Error: ', error);
				});
		}
	}


	filterSearchResult() {
		this.filteredResult.filter
	}


	handleSearch(event) {
		this.makeApiCall(event.search);
	}
	handleFilterEmitter(event) {
		this.filteredResult = this.result;
		if (event.filter) {
			this.filteredBrands = [];
			this.filteredResult = [];
			this.filters = event.filter;
			this.filters.forEach(eachFilterElement => {
				this.result.forEach(itemElement => {
					if ((eachFilterElement.item === itemElement.brand)) {
						this.filteredBrands.push(itemElement);
					}

				});
			});

			if (this.filteredBrands.length === 0) {
				this.filteredBrands = this.result;
			}

			this.filters.forEach(eachFilterElement => {
				this.filteredBrands.forEach(itemElement => {
					if ((Number(eachFilterElement.item) === itemElement.ratings)) {
						this.filteredResult.push(itemElement);
					}
				});
			});

			if (this.filteredResult.length === 0) {
				this.filteredResult = this.filteredBrands;
			}
		}
	}
	generateFilters() {
		for (let i = 0; i < this.result.length; i++) {
			if (this.result[i].hasOwnProperty('brand')) {
				const brandName = this.result[i].brand;
				if (this.availableBrands.indexOf(brandName) === -1) {
					this.availableBrands.push(brandName);
				}
			}
			if (this.result[i].hasOwnProperty('ratings')) {
				const rating = this.result[i].ratings;
				if (this.availableRatings.indexOf(rating) === -1) {
					this.availableRatings.push(rating);
				}
			}
		}
	}

}
Soy.register(ShoppingLayout, templates);

export {
	ShoppingLayout
};

export default ShoppingLayout;
