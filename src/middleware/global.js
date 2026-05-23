import { formatMonth, yenToUsd } from '../includes/helpers.js';

/**
 * Helper function to set all expected res.locals values
 */
const setLocalVariables = (req, res, next) => {
    // Make NODE_ENV available to all templates
    res.locals.NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';

    // Make any query parameters available to all templates
    res.locals.query = req.query;

    // Expose helper functions to templates
    res.locals.formatMonth = formatMonth;
    res.locals.yenToUsd = yenToUsd;

    next();
};

export default setLocalVariables;