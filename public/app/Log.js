"use strict";
var Log = (function () {
    function Log(developer, message, _id, data) {
        this.developer = developer;
        this.message = message;
        this._id = _id;
        this.data = data;
    }
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=Log.js.map