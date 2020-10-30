const contactController = require('./controllers/contactController');
const analyticsController = require('./controllers/analyticsController');

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
};

module.exports = assignRoutes;