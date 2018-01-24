// extensions
//document.querySelector('form').elements['name'];
$.fn.serializeObject = function() {
    var result = {};
    var array = this.serializeArray();

    $.each(array, function() {
        if (typeof result[this.name] !== "undefined") { // already have value with this name

            if (!result[this.name].push) { // not array yet
                result[this.name] = [result[this.name]]; // convert value to array
            }
            result[this.name].push(this.value || ''); // add new value
        } else {
            result[this.name] = this.value || ''; // set value
        }
    });

    return result;
};



//// ajax
//$.ajax({
//        method: "POST",
//        url:    "some.php",
//        data: {
//            name: "Andy",
//            password: "pa$$w0rd"
//        }
//    })
//    .done(function (data) {
//        alert("success");
//    })
//    .fail(function (error) {
//        alert("error");
//    })
//    .always(function (response) {
//        alert("complete");
//    });



// animate
$(".animate").click(function () {
    $(this).animate({
        width: 500
    }, 1000);
});

$(".animate-2").animate(
    { opacity: 0 },
    1000,
    "linear",
    function () { console.log("done."); }
);

$(".animate-3").click(function () {
    var $el = $(this);

    //$el.stop(1, 1).css("text-indent", 0).animate({
    //$el.css("text-indent", 0).animate({
    $el.animate({
        "text-indent": 100
        //, "left": 100
    }, {
        duration: 5000,
        step: function (value, ui) {
            $el.css("transform", "rotate("+value+"deg)");
        }
        //, complete: function () {
        //    $el.css("transform", "");
        //}
    });
});



// draggable
$(function () {
    $(".draggable").draggable();

    $(".draggable-2").draggable({ axis: "y" });

    $(".draggable-3").draggable({ axis: "x" });

    $(".draggable-4").draggable({
        //containment: "#containment-wrapper",
        containment: $(".draggable-4").closest('section'),
        scroll:      false
    });
});



// droppable
$(".droppable").droppable({
    drop: function(e, ui) {
        var $el = $(this);
        $el.addClass("state-highlight");

        setTimeout(function () {
            $el.removeClass("state-highlight");
        }, 200);
    }
});



// datepicker
$(".datepicker").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    changeMonth: true,
    changeYear: true
});



// slider
$(".slider").slider({
    min:   0,
    max:   100,
    value: 20,
    slide: function(e, ui) {
        console.log(ui.value);
    }
});

$(".slider-2").slider({
    min:   0,
    max:   100,
    value: 30,
    step:  10
});

$(".slider-3").slider({
    range:  true,
    min:    0,
    max:    500,
    values: [75, 300],
    slide: function(e, ui) {
        console.log(ui.value);
    }
});



