let second = 0
basic.forever(function () {
    second = 500
    basic.clearScreen()
    basic.pause(second)
    led.setBrightness(255)
    led.plot(1, 1)
    basic.pause(second)
    led.plot(2, 1)
    basic.pause(second)
    led.plot(3, 1)
    basic.pause(second)
    led.plot(3, 2)
    basic.pause(second)
    led.plot(3, 3)
    basic.pause(second)
    led.plot(2, 3)
    basic.pause(second)
    led.plot(1, 3)
    basic.pause(second)
    led.plot(1, 2)
    basic.pause(second)
})
