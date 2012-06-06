define('app/views/machines_number_view', ['ember'],
	/**
	 *
	 * Machine count on home page
	 *
	 * @returns Class
	 */
	function() {
		return Ember.View.extend({
			app: null,
			numberBinding: 'Mist.backendsController.machineCount',
			tagName: 'span',
			classNames: 'ui-li-count',
		    template: Ember.Handlebars.compile('{{number}}'),
		    didInsertElement: function(e){
		    	try{
		    	  $("#home-menu").listview('refresh');
		    	} catch(e) {}
		    },
			
			init: function() {
				this._super();
				this.appendTo('#machines-count');
			}
		});
	}
);