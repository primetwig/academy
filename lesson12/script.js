//// Generator
//function* GenRandomId() {
//    let prefix = '';
//    while (true) {
//        prefix = yield prefix + Math.random().toString(36).substr(2, 10);
//    }
//}
//
//const genId = GenRandomId();
//
//console.log(genId.next().value);
//console.log(genId.next().value);
//console.log(genId.next().value);



//// Generator params
//function* GenRandomId() {
//    let i = 10;
//    while (i--) {
//        yield prefix + Math.random().toString(36).substr(2, 10);
//    }
//    return 777;
//}
//
//const genId = GenRandomId();
//
//console.log(genId.next('one--').value); // { "done": false, "value": "r8ustd2xz1" }
//console.log(genId.next('two--').value); // { "done": false, "value": "two--ubskjf2xz1" }
//console.log(genId.next().value);



//// FileReader
//var input = document.querySelector('input[type="file"]');
//var holder = document.querySelector('.images');
//input.addEventListener('change', function (e) { // or 'drop'
//    var files = e.target.files;
//    console.log("--- files");
//    console.log(files);
//
//    if (files.length) {
//        [].forEach.call(files, function (file) {
//            console.log("--- file");
//            console.log(file);
//
//            var reader = new FileReader();
//
//            reader.onload = function(e) {
//                var fileData = e.target.result;
//                //console.log("--- fileData");
//                //console.log(fileData);
//
//                var error = e.target.error;
//                console.log("--- error");
//                console.log(error);
//
//                var img = document.createElement('img');
//                img.src = fileData;
//                holder.appendChild(img);
//            };
//
//            reader.readAsDataURL(file);
//            //readAsText
//            //readAsDataURL
//            //readAsArrayBuffer
//            //readAsBinaryString
//        });
//
//        console.log("--- this");
//        console.log(this);
//        this.value = '';
//    }
//});



//// audio and video
//var audio = document.querySelector('audio');
//audio.volume
//audio.muted
//audio.controls
//audio.currentTime
//audio.duration
//audio.paused
//audio.play()
//audio.pause()
//
//({}).toString.call(audio); // HTMLAudioElement
//HTMLAudioElement.prototype.stop = function() {
//    !this.paused && this.pause();
//    this.currentTime = 0;
//};
//
//var video = document.querySelector('video');
//video.addEventListener('canplaythrough', function(e) {});
//canplay
//progress
//loadeddata // first frame
//loadedmetadata



//// Sets
//var names = new Set();
//
//names.add("Andy")
//    .add("Tom")
//    .add("Lisa")
//    .add("Tom");
//
//console.log(names);      // Set {"Andy", "Tom", "Lisa"}
//console.log(names.size); // 3
//
//names.has("Andy");    // true
//
//names.delete("Lisa"); // true. Set {"Andy", "Tom"}
//names.clear();        // Set {}
//
//var days = ["Sunday", "Monday", "Tuesday", "Monday", "Sunday", "Sunday"];
//var set = new Set(days); // Set {"Sunday", "Monday", "Tuesday"}
//var filtered = [...set];
//console.log(filtered); // ["Sunday", "Monday", "Tuesday"]
//
//days.filter(function (el, i, arr) {
//    return arr.indexOf(el) == i;
//});



//// Maps
//let map = new Map();
//map.set(1, 'number');
//map.set('1', 'string');
//
//map.get(1);   // number
//map.get('1'); // string
//
//map.has('1');    // true
//map.delete('1'); // true
//map.clear();
//
//
//let days = new Map([
//    ['Sun', 'Sunday'],
//    ['Mon', 'Monday'],
//    ['Tue', 'Tuesday']
//]);
//
//days.forEach(console.log);




// Styles
var styleTags = document.querySelectorAll('.styles');

[].forEach.call(document.styleSheets, function(sheet) {
    var index = [].indexOf.call(styleTags, sheet.ownerNode);

    if (index > -1) {
        console.log("--- sheet");
        console.log(sheet);
        var rules = sheet.cssRules;

        console.log("--- loop over rules");
        [].forEach.call(rules, function (rule) {
            var selector = rule.selectorText;
            var elements = document.querySelectorAll(selector);
            console.log("selector:", selector);

            [].forEach.call(rule.style, function (property) {
                console.log("property:", property);
                console.log("value:", rule.style[property]);

                [].forEach.call(elements, function (el) {
                    el.style[property] = rule.style[property];
                })
            });
        });
    }
});





