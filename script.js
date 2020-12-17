$(document).ready(function(){

    $(".update").change(function(){
        var sum = 0

        var vip = ($("#vip").val() === 'true')
        var affected = $("#affected").val()
        var size = $("#size").val()
        var productivity = ($("#productivity").val() === 'true')
        var bizfunc = ($("#bizfunc").val() === 'true')
        var workaround = ($("#workaround").val() === 'true')
        var intermittent = ($("#intermittent").val() === 'true')
        var old = ($("#old").val() === 'true')

        // Calc percent affected
        percent = affected / size
        if (productivity) {
            if (percent >= .1 && percent < .3) {
                if (sum < 20) {
                    var additional = 20 - sum
                    sum += additional
                }
                else {
                    sum += 5
                }
            }
            else if (percent >= .3 && percent < .6 ) {
                if (sum < 30) {
                    var additional = 30 - sum
                    sum += additional
                }
                else {
                    sum += 10
                }
            }
            else if (percent >= .6) {
                if (sum < 40) {
                    var additional = 40 - sum
                    sum += additional
                }
                else {
                    sum += 15
                }
            }
        }
        else {
            if (percent >= .1 && percent <= .3) {
                if (sum < 10) {
                    var additional = 10 - sum
                    sum += additional
                }
                else {
                    sum += 5
                }
            }
            else if (percent > .3) {
                if (sum < 15) {
                    var additional = 20 - sum
                    sum += additional
                }
                else {
                    sum += 10
                }
            }
        }

        

        // Calc business impact
        if (bizfunc) {
            if (sum < 30) {
                var additional = 30 - sum
                sum += additional
            }
            else {
                sum += 5
            }
        }
        // Calc VIP user
        if (vip) {
            if (sum < 30) {
                var additional = 30 - sum
                sum += additional
            }
            else {
                sum += 10
            }
        }
        // Calc productivity impact (vs. informational)
        if (productivity) {
            $("#issue").show()

            if (sum < 20) {
                var additional = 20 - sum
                sum += additional
            }
            else {
                sum += 5
            }
        }
        // Calc old issue
        if (old) { sum += 5 }

        // Discount workaround available
        if (workaround) { sum -= 5 }

        // Discount intermittent issue
        if (intermittent) { sum -= 5 }

        if (sum < 20) {
            $("body").css("background-color", "blue")
            $("body").css("color", "white")
            $("#resultval").text("Priority 4/5, your score is: " + sum)
        }
        if (sum >= 20 && sum < 30) {
            $("body").css("background-color", "yellow")
            $("body").css("color", "black")
            $("#resultval").text("Priority 3/5, your score is: " + sum)
        }
        if (sum >= 30 && sum < 40) {
            $("body").css("background-color", "orange")
            $("body").css("color", "black")
            $("#resultval").text("Priority 2/5, your score is: " + sum)
        }
        if (sum >= 40 ) {
            $("body").css("background-color", "red")
            $("body").css("color", "white")
            $("#resultval").text("Priority 1/5, your score is: " + sum)
        }
    });
});
