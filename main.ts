// increases the number
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    numero += 1
    basic.showNumber(numero)
})
// shows if the the # is (P)ositive, (N)egative, or (Z)ero
input.onButtonPressed(Button.AB, function () {
    if (numero > 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            # . . . #
            . . # . .
            . # # # .
            . . # . .
            # . . . #
            `)
    }
    if (numero < 0) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . # # # .
            . . . . .
            # . . . #
            `)
    }
    if (numero == 0) {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
})
// decrease the number
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    numero += -1
    basic.showNumber(numero)
})
// sets variables back to 0
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Diamond)
    basic.pause(200)
    basic.clearScreen()
    numero = 0
})
// shows name of program; sets variables to 0
let numero = 0
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Target)
basic.showIcon(IconNames.SmallDiamond)
basic.pause(200)
basic.clearScreen()
basic.showString("Classifying Numbers")
basic.pause(200)
basic.clearScreen()
numero = 0
