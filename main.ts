input.onButtonPressed(Button.A, function () {
    кот = !(кот)
    if (кот) {
        basic.showIcon(IconNames.Target)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
let кот = false
кот = false
loops.everyInterval(60000, function () {
    if (кот) {
        let не = ""
        datalogger.log(
        datalogger.createCV(не, input.temperature()),
        datalogger.createCV(не, input.lightLevel())
        )
    }
})
basic.forever(function () {
	
})
