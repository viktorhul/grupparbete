function resetGame () {
    radio.setGroup(30)
    player_x = 2
    player_y = 2
    led.plot(player_x, player_y)
    for (let index = 0; index < 3; index++) {
        led.unplot(player_x, player_y)
        basic.pause(100)
        led.plot(player_x, player_y)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendValue("name", 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("name", 2)
})
radio.onReceivedValue(function (name, value) {
    led.unplot(player_x, player_y)
    if (value == 1 && player_x > 0) {
        player_x += -1
    } else if (value == 2 && player_x < 4) {
        player_x += 1
    } else if (value == 3 && player_y > 0) {
        player_y += -1
    } else if (value == 4 && player_y < 4) {
        player_y += 1
    } else {
    	
    }
    led.plot(player_x, player_y)
})
let player_y = 0
let player_x = 0
resetGame()
basic.forever(function () {
	
})
