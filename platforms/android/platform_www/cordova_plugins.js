cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-simplelogin.SimpleLogin",
      "file": "plugins/cordova-plugin-simplelogin/www/simplelogin.js",
      "pluginId": "cordova-plugin-simplelogin",
      "clobbers": [
        "SimpleLogin"
      ],
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-simplelogin": "1.0.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});