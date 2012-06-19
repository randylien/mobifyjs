(function() {
    var config = Mobify.config = Mobify.config || {};

    // configFile my already exists if rendering server side, so only grab mobify.js script tag 
    // if configFile is undefined.
    // V6 moved mobify.js to the first script.
    if (!config.configFile) {
        config.configFile = Mobify.$('script[src*="mobify.js"]').first().attr('src') || '';
    }
    
    config.configDir = config.cssDir = config.configFile.replace(/\/[^\/]*$/, '/');
    config.imageDir = config.configDir + 'i/';
    config.ajs = Mobify.ajs;
})();