var inputCount = 1;

function pageStart() {
    setTimeout(function() {
        $(".progress").animate({
            width: '25%'
        }, 500);
    }, 2000);
}

jQuery(document).ready(function($) {
    pageStart();

    $(".previous").click(function(event) {
        if (inputCount == 2) {
            setTimeout(function() {
                $("#arrivaltagline").animate({
                    marginLeft: '+=1000px',
                    opacity: '0'
                }, 400, function() {
                    $("#wheretagline").animate({
                        marginLeft: '+=1000px',
                        opacity: '1'
                    }, 400, function() {

                    });
                });
            }, 100);

            $("#arrival").animate({
                marginLeft: '+=1000px',
                opacity: '0'
            }, 400, function() {
                $("#where").animate({
                    marginLeft: '+=1000px',
                    opacity: '1'
                }, 400, function() {

                });
            });

            $(".progress").animate({
                backgroundColor: "#F2685C",
                width: "25%"
            }, 400);

            inputCount--;

            $(".previous").removeClass('grayedOut');
        }
        if (inputCount == 3) {
            setTimeout(function() {
                $("#departuretagline").animate({
                    marginLeft: '+=1000px',
                    opacity: '0'
                }, 400, function() {
                    $("#arrivaltagline").animate({
                        marginLeft: '+=1000px',
                        opacity: '1'
                    }, 400, function() {

                    });
                });
            }, 100);

            $("#departure").animate({
                marginLeft: '+=1000px',
                opacity: '0'
            }, 400, function() {
                $("#arrival").animate({
                    marginLeft: '+=1000px',
                    opacity: '1'
                }, 400, function() {

                });
            });

            $(".progress").animate({
                backgroundColor: "#F2BA13",
                width: "50%"
            }, 400);

            inputCount--;

            $(".previous").removeClass('grayedOut');
        }
    });

    $(".next").click(function(event) {
        if (inputCount == 1) {
            setTimeout(function() {
                $("#wheretagline").animate({
                    marginLeft: '-=1000px',
                    opacity: '0'
                }, 400, function() {
                    $("#arrivaltagline").animate({
                        marginLeft: '-=1000px',
                        opacity: '1'
                    }, 400, function() {

                    });
                });
            }, 100);

            $("#where").animate({
                marginLeft: '-=1000px',
                opacity: '0'
            }, 400, function() {
                $("#arrival").animate({
                    marginLeft: '-=1000px',
                    opacity: '1'
                }, 400, function() {

                });
            });

            $(".progress").animate({
                backgroundColor: "#F2BA13",
                width: "50%"
            }, 400);

            inputCount++;

            $(".previous").removeClass('grayedOut');
        } else if (inputCount == 2) {
            setTimeout(function() {
                $("#arrivaltagline").animate({
                    marginLeft: '-=1000px',
                    opacity: '0'
                }, 400, function() {
                    $("#departuretagline").animate({
                        marginLeft: '-=1000px',
                        opacity: '1'
                    }, 400, function() {

                    });
                });
            }, 100);

            $("#arrival").animate({
                marginLeft: '-=1000px',
                opacity: '0'
            }, 400, function() {
                $("#departure").animate({
                    marginLeft: '-=1000px',
                    opacity: '1'
                }, 400, function() {

                });
            });

            $(".progress").animate({
                backgroundColor: "#2ABF5E",
                width: "75%"
            }, 400);

            inputCount++;
        } else if (inputCount == 3) {
            setTimeout(function() {
                $("#departuretagline").animate({
                    marginLeft: '-=1000px',
                    opacity: '0'
                }, 400, function() {});
            }, 100);

            $("#departure").animate({
                marginLeft: '-=1000px',
                opacity: '0'
            }, 400, function() {});

            $(".progress").animate({
                backgroundColor: "#4FA6F2",
                width: "100%"
            }, 400, function() {
                $(".progressBar").animate({
                        width: '0',
                        marginLeft: '50%'
                    },
                    400, function() {
                        /* stuff to do after animation is complete */
                    });
                $(".navigation").animate({
                        opacity: '0'
                    },
                    200, function() {
                        /* stuff to do after animation is complete */
                    });
            });

            inputCount++;
        }
    });
});