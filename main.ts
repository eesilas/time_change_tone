let startime = input.runningTime()
while (input.runningTime() - startime < 60000) {
    music.play(music.tonePlayable(input.runningTime() - startime, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
}
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
