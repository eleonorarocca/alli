Router.configure({
	layoutTemplate: 'layout'
});
Router.route('/', function(){
	this.render('home');
});
Router.route('/hotels', function(){
	this.render('hotels');
});
Router.route('/restaurants', function(){
	this.render('restaurants');
});
Router.route('/cultural_events', function(){
	this.render('cultural_events');
});