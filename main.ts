basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
