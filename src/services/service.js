'use strict';

import Component from 'metal-component';
import Ajax from 'metal-ajax';
import * as _ from 'lodash';
import {
	MultiMap
} from 'metal-structs';


const headers = new MultiMap();
const params = new MultiMap();

headers.add('content-type', 'application/json');
headers.add('accept', 'application/json');

class Service extends Component {
	created() {
		console.log('Search created() block');
	}

	performSearch(seacrhKey) {
		if (seacrhKey) {
			this.makeApiCall();
		}
		console.log(document.getElementById('search').value, event);
		this.emit('search', {
			search: this.search
		})
	}

	makeApiCall() {
		Ajax.request('https://next.json-generator.com/api/json/get/41MRoCJ7H', 'get', null, headers)
			.then(xhrResponse => {
				if (_.isString(xhrResponse.response)) {
					this.reply = JSON.parse(xhrResponse.response);
				} else {
					this.reply = xhrResponse.response;
				}
				this.generateFilters();
				// Handle response
			}, error => {
				console.log('Error: ', error);
			});
	}
}
export {
	Service
};
export default Service;
