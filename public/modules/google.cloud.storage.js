// google cloud storage
// 1. firebase get download json file my key
// 2. set projectID and keyFilename
// 3. google cloud platpom
var fs = require('fs');
var gcs = require('@google-cloud/storage')({
    projectId:"kb141-17d6a",
    keyFilename: "/Users/juyoungjung/Downloads/KB141-ee115063fbe4.json"
});
var googleStorage = (function () {
    var bucket = gcs.bucket("kb141-17d6a.appspot.com/AD_File");
    function downloadFile(fileName) {
        console.log(fileName);
        var stream = bucket.file(fileName).createReadStream();
        var localWrite = fs.createWriteStream('/Users/juyoungjung/Documents/' + fileName);
        stream.pipe(localWrite);
    }
    return {downloadFile : downloadFile}
})();
module.exports = googleStorage;
