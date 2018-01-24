

//// classes
//var cls = 'color-red';
//
//$('button').addClass('color-red size-wide');
//$('button').removeClass(cls);
//$('button').hasClass(cls);
//
//
//
//$('button').toggleClass('color-red');
//
//$('button').toggleClass('color-red').toggleClass('size-wide');
//
//$('button').toggleClass('color-red');
//$('button').toggleClass('size-wide');
//
//$('button').toggleClass('color-red size-wide');




//// selectors
//$('button')
//
//var btns = $('button');
//$(btns)
//
//$('div')
//$('.class')
//$('#id')
//
//$('[class=color-red]')
//
//
//$('[type]')                     //  - has attr with any value
//
//$('[name="value"]')             //  - is equal
//$('[name!="value"]')            //  - not equal
//
//$('[class*="color"]')             //  - contains
//$('[name~="color-red"]')        //  - contains, delimited by spaces
//
//$('[name^="value"]')            //  - starts
//$('[name$="value"]')            //  - ends
//
//$('[name|="color-orange"]')     //  - equal or starts with and followed by a '-'
//
//'color-orange'
//'color-orange-red'
//
//
//$('p:not(:first-child)')
//
//$('li:even')
//$('li:odd')
//
//$('button[class*=color]')




//// relationship
//var divs = $('div');
//divs.filter('.section');
//
//divs.filter(function (i) {
//    if (i % 2) {
//        return true;
//    } else {
//        return false;
//    }
//});
//
//$("li").has("ul").css("background-color", "red");
//
//
//divs.find('button.size-big')
//divs.closest('div.container')
//
//
//$('li').closest('div')
//
//var activeLi = $('li.is-active')
//
//
//$('li').eq(0)
//$('li').first()
//$('li').last()
//$('li').index(activeLi)
//
//
//$('li').get(0)
//
//// Question: find vs filter?
//
//$('button')
//    .filter('.color-red').css('color', 'red').end()
//    .filter('.size-wide').css('color', 'green').end();




////// actions
//$('input').val();
//$('input').val('hello');
//
//$('div').text();
//$('div').text('hello');
//
//$('div').html();
//$('div').html('hello');
//
//$('div').empty();
//
//
//$('input').attr('name');
//$('input').attr('name', 'password');
//
//$('input').attr('data-scrollto');
//$('input').data('scrollto');
//
//
//$('input').offset(); // { top: 175, left: 621 }
//$('input').width();  // 150
//$('input').height(); // 20
//
//
//$('input').css('color');
//$('input').css(['width', 'height']); // { width: "180px", height: "25px" }
//
//$('input').css('color', 'red');
//$('input').css('color', '');
//$('input').css({
//    "margin-left":  "20px",
//    "margin-right": "30px"
//});
//$('input').css('width', function (i, v) {
//    console.log("index: ", i);
//    console.log("value: ", v);
//});





//// forms
//var data = $('form').serialize();
//// name=Andy&email=andy@a.com
//
//var data = $('form').serializeArray();
//// [
////     {
////         name:  "name",
////         value: "Andy"
////     },
////     {
////         name:  "email",
////         value: "andy@a.com"
////     }
//// ]
//
//function serializeObject($form) {
//    // ...
//}
//
//var data = serializeObject($('form'));
//// {
////     name:  "Andy",
////     email: "andy@a.com"
//// }



//// events
//[].forEach.call(document.querySelectorAll('button'), function (el) {
//    el.addEventListener('click', function () {
//        // show popup
//        console.log('click');
//    })
//});
//
//$('button').click(function () {
//    console.log('click');
//});
//
//$('button').on('click', console.log);
//$('button').off('click', console.log);
//
//
//
//$('form').submit(function () {
//    var form = this;
//    var data = form.serialize();
//    //'name=Andy&email=email@example.com'
//
//    // validate
//    var inputs = this.find('input');
//    var errors = [];
//    inputs.each(function (i, el) {
//        if (!el.val()) {
//            errors.push(el.attr("name"));
//        }
//    });
//
//    if (errors.length) {
//
//        // error
//        form.addClass('is-error');
//        // or
//        errors.forEach(function (inputName, i) {
//            form.find('input[name='+inputName+']').addClass('is-error');
//        });
//    } else {
//
//        // send
//        this.addClass('is-loading');
//        console.log("data: ", data);
//    }
//});


