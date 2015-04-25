var csv;
var csvArray;
var i;

$(document).ready(function() {

    $.get("shoutout9-24.csv", {}, function (data) {
        //console.log("Data: ", data);
        csvArray = $.csv.toArrays(data);
        console.log("HERE IS THE AFTER TOARRAYS THING: ", csvArray);
        csvArray = shuffleArray(csvArray);
        console.log("Newly shuffled: ", csvArray);

        for (i = 0; i < csvArray.length; i++) {
            //style='display:none'
            $("#quotes").append("<div style='display:none' id='quote" + i + "'><div class = 'thisQuote'>" + csvArray[i][1] +
                "</div><div class='date'>" + csvArray[i][0] + "</div></div>");
        }
        i = 0;
        setInterval(function() {
            $("#quote" + i).fadeIn(1500).delay(2000).slideUp(1000).delay(1500);
            i++
            if (i == csvArray.length) {
                i = 0;
            }
        }, 4000);

         /* var eachQuote;eachQuote = $("#quotes").children("#quote" + i);
            eachQuote.show(800).delay(1500).hide(800);
            //eachQuote.fadeIn(800).delay(1500).fadeOut(800);
        }*/

    });


    /*$("#quotes").children(".thisQuote").each(function() {

    });*/
    console.log("so, does csvArray work?: ", csvArray)

    //shuffleArray function: implementation of Fisher-Yates shuffle algorithm
    //Found at: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    //Gets a random index number adjusting for length + 1, then switches a randomly selected array[j]
    //into the current array[i] position and the current array[i] into the place formerly held by the
    // randomly found array[j].
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    /*console.log("Response Text: ", csv[responseText]);
    csv = csv[responseText];
    console.log(csv);*/

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
});


