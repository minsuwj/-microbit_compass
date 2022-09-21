let cardinal = 0
let degree = 0
input.onButtonPressed(Button.A, function () {
    if (cardinal == 1) {
        basic.showString("north")
    } else if (cardinal == 2) {
        basic.showString("east")
    } else if (cardinal == 3) {
        basic.showString("south")
    } else {
        basic.showString("west")
    }
})
basic.forever(function () {
    degree = input.compassHeading()
    if (degree < 45) {
        cardinal = 1
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (degree < 135) {
        cardinal = 2
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (degree < 225) {
        cardinal = 3
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (degree < 315) {
        cardinal = 4
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
