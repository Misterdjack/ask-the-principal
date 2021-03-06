var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'question', label: "I've got a question for the Principal" },
		{ value: 'feedback', label: "Feedback" },
		{ value: 'other', label: "Other enquiries" }
	] },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now }
});

Enquiry.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
});

Enquiry.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Enquiry.schema.methods.sendNotificationEmail = function(callback) {

	var enqiury = this;

	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {

		if (err) return callback(err);

		// Email sending is disabled by default now that mandrill doesn't offer
		// a free account tier on heroku.

		new keystone.Email('enquiry-notification').send({
			to: admins,
			from: {
				name: 'Ask The Principal',
				email: 'contact@ask-the-principal.com'
			},
			subject: 'New Enquiry for Ask The Principal',
			enquiry: enqiury
		}, callback);


	});

};

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
