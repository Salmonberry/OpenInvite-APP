export default function  getJumpBaseUrl(toUrl) {

    var bundleUrl = weex.config.bundleUrl;

    var isnav = true
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var native;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = "local://" + 'file://assets/dist/';
        native = nativeBase + toUrl + ".js";
    } else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        native = nativeBase + toUrl + ".js";
    } else {
        var host = 'localhost:8081';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if (typeof window === 'object') {
            nativeBase = 'http://' + host + '/';
        } else {
            nativeBase = 'http://' + host + '/';
        }

        native = nativeBase + toUrl + ".html";
    }
    return native;
};