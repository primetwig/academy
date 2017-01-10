/*
var http = new XMLHttpRequest();

http.open("GET", "http://site.com", true, "admin", "megaPa$$word");
http.setRequestHeader('Content-type', 'application/json; charset=utf-8');

http.addEventListener('readystatechange', function () {
    console.log(this);
    console.log(this.readyState);
    console.log(this.status);
    console.log(this.responseText);
});
http.addEventListener('progress', function (e) {
    console.log('loaded: ', e.loaded);
    console.log('total: ', e.total);
});

http.send();
http.abort();
*/


var params = {
    action: 'opensearch',
    origin: '*',
    format: 'json',
    search: 'pepsi'
};

console.log('params: ', params);

var body = Object.keys(params)
    .map(function(prop) {
        return prop + '=' + params[prop];
    })
    .join('&');

console.log('body: ', body);



var http = new XMLHttpRequest();
http.open('POST', 'https://en.wikipedia.org/w/api.php');

function handleResponse() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            // success callback
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
        }
    }
}
http.addEventListener('readystatechange', handleResponse);


http.send(body);




