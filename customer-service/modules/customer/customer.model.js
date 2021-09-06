(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var CustomerSchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        address: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    });

    // hash user password before saving into database
    CustomerSchema.pre('save', function(next){
        this.password = bcrypt.hashSync(this.password, saltRounds);
        next();
    });


    module.exports = mongoose.model('customers', CustomerSchema);
})();
