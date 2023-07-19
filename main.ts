input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Temperatura = input.temperature()
    Temperatura += -3
    basic.showString("Temperatura")
    basic.showNumber(Temperatura)
    basic.showString("Cº")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        servos.P1.setAngle(0)
        basic.pause(500)
        servos.P1.setAngle(90)
        basic.pause(500)
    }
})
let Temperatura = 0
servos.P1.setAngle(0)
basic.showString("Hola")
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
