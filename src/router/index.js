// Controllers
const GenerativeController = require('../controller/controller.generative');

// Routes
const router = (app) => {
    app.use('/gemini', GenerativeController);
}

module.exports = router;