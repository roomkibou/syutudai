radio.onReceivedString(function (receivedString) {
    while (true) {
        katakana.showString(receivedString)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
