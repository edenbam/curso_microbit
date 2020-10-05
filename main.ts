input.onGesture(Gesture.TiltLeft, function () {
    led.unplot(x, y)
    x = x - 1
})
input.onGesture(Gesture.TiltRight, function () {
    led.unplot(x, y)
    x = x + 1
})
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
    led.plot(x, y)
    basic.pause(200)
    led.unplot(x, y)
    basic.pause(200)
})
