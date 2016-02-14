cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
        "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
        "pluginId": "cordova-plugin-wkwebview-engine",
        "clobbers": [
            "cordova.exec"
        ]
    },
    {
        "file": "plugins/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
             "device"
        ]
    }
];
    module.exports.metadata =
    // TOP OF METADATA
    {
        "org.apache.cordova.device": "0.3.0"
    }
// BOTTOM OF METADATA
});