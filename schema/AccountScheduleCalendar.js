'use strict';

const accountPlanning = require('./AccountPlanning');

exports = module.exports = function(params) {

	let acSchema = accountPlanning(params);

    params.db.model('AccountScheduleCalendar', acSchema);
};

