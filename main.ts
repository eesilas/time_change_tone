let startime = 0
basic.forever(function () {
    startime = input.runningTime()
    while (input.runningTime() - startime < 60) {
        music.play(music.tonePlayable(input.runningTime() - startime, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.Yes)
})
