
var emptyRow = 300;
var emptyColumn = 300;
const PUZZLE_NUMBER = 4;
const tileSize = 100;

$(document).ready(function(){

    $("#puzzlearea div").each(function (idx){
        // calculate x and y for this piece
        var row = idx % PUZZLE_NUMBER;
        var col = Math.floor(idx / PUZZLE_NUMBER);
        var x = (row * tileSize);
        var y = (col * tileSize);

        // set basic style and background
        this.className = "puzzlepiece";
        this.id = "square_" + row + "_" + col;
        this.style.left = x + 'px';
        this.style.top = y + 'px';
        this.style.backgroundImage = 'url("background.jpg")';
        this.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        $(this).click(function () {
            var currentLeft = $(this).position().left;
            var currentTop = $(this).position().top;
            if (currentLeft === emptyRow) {
                if (Math.abs(emptyColumn - currentTop) === tileSize) {
                    if (emptyColumn === currentTop + tileSize) {
                        $(this).animate({top: currentTop + tileSize});
                    }
                    else {
                        $(this).animate({top: currentTop - tileSize});
                    }
                    emptyColumn = currentTop;
                }
            }
            else if (currentTop === emptyColumn) {
                if (Math.abs(emptyRow - currentLeft) === tileSize) {
                    if (emptyRow === currentLeft + tileSize) {
                        $(this).animate({left: currentLeft + tileSize});
                    } else {
                        $(this).animate({left: currentLeft - tileSize});
                    }
                    emptyRow = currentLeft;
                }
            }
        });

        $(this).hover(function () {
            if (possiableMove($(this))) {
                $(this).addClass("movablepiece");
            }
        },
        function () {
            $(this).removeClass("movablepiece");
        });

        var possiableMove = function(object){
            var currentLeft = object.position().left;
            var currentTop = object.position().top;

            if(currentLeft === emptyRow || currentTop === emptyColumn){
                if(Math.abs(emptyRow - currentLeft) === tileSize || Math.abs(emptyColumn - currentTop) === tileSize){
                    return true;
                }
            }
            return false;
        };
    });

    $("#shufflebutton").click(function(){
        const timeout = 1000;
        const timeShuffle = 10;
        var timer = setInterval(shuffle, timeShuffle);

        setTimeout(function (){
            clearTimeout(timer);
        }, timeout);

    });

    var shuffle = function (){
        var itemArr = [];

        // above the blank square
        if (emptyRow - tileSize >= 0) {
            var rowIndex = (emptyRow - tileSize) / tileSize;
            itemArr.push("#square_" + rowIndex + "_" + (emptyColumn / tileSize));
        }

        // below the blank square
        if (emptyRow + tileSize < tileSize * PUZZLE_NUMBER) {
            var rowIndex = (emptyRow + tileSize) / tileSize;
            itemArr.push("#square_" + rowIndex + "_" + (emptyColumn / tileSize));
        }

        // left of the blank square
        if (emptyColumn - tileSize >= 0) {
            var columnIndex = (emptyColumn - tileSize) / tileSize;
            itemArr.push("#square_" + (emptyRow / tileSize) + "_" + columnIndex);
        }

        // right of the blank square
        if (emptyColumn + tileSize < tileSize * PUZZLE_NUMBER) {
            var columnIndex = (emptyColumn + tileSize) / tileSize;
            itemArr.push("#square_" + (emptyRow / tileSize) + "_" + columnIndex);
        }

        // random select neighbor of the blank square
        var randomIndex = Math.floor(Math.random() * itemArr.size());
        var tLeft = $(itemArr[randomIndex]).position().left;
        var tTop = $(itemArr[randomIndex]).position().top;

        // move it to the blank square position
        $(itemArr[randomIndex]).css({"left": emptyRow, "top": emptyColumn});

        // keep tracking the blank square
        emptyColumn = tTop;
        emptyRow = tLeft;

    };



});
