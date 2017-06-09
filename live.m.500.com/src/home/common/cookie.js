var Cookies = function (key, value, options) {
    return arguments.length === 1
        ? Cookies.get(key) : Cookies.set(key, value, options);
};

// Allows for setter injection in unit tests
Cookies._document = document;
Cookies._navigator = navigator;

Cookies.defaults = {
    path: '/'
};

Cookies.get = function (key) {
    if (Cookies._cachedDocumentCookie !== Cookies._document.cookie) {
        Cookies._renewCache();
    }

    return Cookies._cache[key];
};

Cookies.set = function (key, value, options) {
    options = Cookies._getExtendedOptions(options);
    options.expires = Cookies._getExpiresDate(value === undefined ? -1 : options.expires);

    Cookies._document.cookie = Cookies._generateCookieString(key, value, options);

    return Cookies;
};

Cookies.expire = function (key, options) {
    return Cookies.set(key, undefined, options);
};

Cookies._getExtendedOptions = function (options) {
    return {
        path: options && options.path || Cookies.defaults.path,
        domain: options && options.domain || Cookies.defaults.domain,
        expires: options && options.expires || Cookies.defaults.expires,
        secure: options && options.secure !== undefined ? options.secure : Cookies.defaults.secure
    };
};

Cookies._isValidDate = function (date) {
    return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
};

Cookies._getExpiresDate = function (expires, now) {
    now = now || new Date();
    switch (typeof expires) {
        case 'number': expires = new Date(now.getTime() + expires * 1000); break;
        case 'string': expires = new Date(expires); break;
    }

    if (expires && !Cookies._isValidDate(expires)) {
        throw new Error('`expires` parameter cannot be converted to a valid Date instance');
    }

    return expires;
};

Cookies._generateCookieString = function (key, value, options) {
    key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
    key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
    // 根据https://wiki.apache.org/tomcat/Cookies的
    // Generating the Set-Cookie header by Tomcat下面的说明，
    //  （
    //      The value can be anything the server chooses to send. With Version 0 cookies, values should not contain
    //      white space, brackets, parentheses, equals signs, commas, double quotes, slashes,
    //      question marks, at signs, colons, and semicolons.
    //      Empty values may not behave the same way on all browsers.
    //  ）

    // 许多符号tomcat都不支持，所有需要进行encode，现在先只加上对 equals signs 的encode，
    // 如果以后有需求，可以考虑直接encode整个value字符串
    value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]|=/g, encodeURIComponent);
    options = options || {};

    var cookieString = key + '=' + value;
    cookieString += options.path ? ';path=' + options.path : '';
    cookieString += options.domain ? ';domain=' + options.domain : '';
    cookieString += options.expires ? ';expires=' + options.expires.toUTCString() : '';
    cookieString += options.secure ? ';secure' : '';

    return cookieString;
};

Cookies._getCookieObjectFromString = function (documentCookie) {
    var cookieObject = {};
    var cookiesArray = documentCookie ? documentCookie.split('; ') : [];

    for (var i = 0; i < cookiesArray.length; i++) {
        var cookieKvp = Cookies._getKeyValuePairFromCookieString(cookiesArray[i]);

        if (cookieObject[cookieKvp.key] === undefined) {
            cookieObject[cookieKvp.key] = cookieKvp.value;
        }
    }

    return cookieObject;
};

function tryDecodeURIComponent(s) {
    try {
        return decodeURIComponent(s);
    } catch (e) {
        return s;
    }
}

Cookies._getKeyValuePairFromCookieString = function (cookieString) {
    // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`
    var separatorIndex = cookieString.indexOf('=');

    // IE omits the "=" when the cookie value is an empty string
    separatorIndex = separatorIndex < 0 ? cookieString.length : separatorIndex;

    return {
        key: tryDecodeURIComponent(cookieString.substr(0, separatorIndex)),
        value: tryDecodeURIComponent(cookieString.substr(separatorIndex + 1))
    };
};

Cookies._renewCache = function () {
    Cookies._cache = Cookies._getCookieObjectFromString(Cookies._document.cookie);
    Cookies._cachedDocumentCookie = Cookies._document.cookie;
};

Cookies._areEnabled = function () {
    var testKey = 'cookies.js';
    var areEnabled = Cookies.set(testKey, 1).get(testKey) === '1';
    Cookies.expire(testKey);
    return areEnabled;
};

Cookies.enabled = Cookies._areEnabled();

export default Cookies;