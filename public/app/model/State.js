Ext.define('AddressBook.model.State', {
	extend : 'AddressBook.model.Base',

	proxy : {
		type : 'ajax',
		url : 'states',
		reader : {
			type : 'json',
			rootProperty : 'states',
			successProperty : 'success'
		}
	}
});

