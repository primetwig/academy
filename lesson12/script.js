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



