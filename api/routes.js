const contactController = require('./controllers/contactController');
const analyticsController = require('./controllers/analyticsController');
const employeeController = require('./controllers/employeeController');
const authController = require('./controllers/authController');
const resetPasswordController = require('./controllers/resetPasswordController');

const assignRoutes = (app) => {
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', '*');
		if (req.method === 'options') {
			res.header('Access-Control-Allow-Methods', 'POST');
			return res.status(200).json({});
		}
		next();
	});
	app.use('/contact', contactController);
	app.use('/analytics', analyticsController);
	app.use('/employee', employeeController);
	app.use('/auth', authController);
	app.use('/reset-password', resetPasswordController);
};

module.exports = assignRoutes;