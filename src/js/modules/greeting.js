//Sample function being exported as default.

/**
 * Greeting for a user  
 * @param {String} name
 * @returns {String} greeting with name
 */
function greeting(name) {
    return `Hello ${name}`;
}

export default greeting;