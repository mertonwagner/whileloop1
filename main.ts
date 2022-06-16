let item = 0
input.onButtonPressed(Button.A, function () {
    item = 0
    basic.showNumber(item)
})
input.onButtonPressed(Button.B, function () {
    item = 1
    basic.showNumber(item)
})
basic.forever(function () {
    if (item == 0) {
        basic.showIcon(IconNames.Meh)
    } else if (item == 1) {
        basic.showIcon(IconNames.Angry)
    }
})
