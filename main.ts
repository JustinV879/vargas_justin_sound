while (true) {
    console.log("Sound Level:" + input.soundLevel())
    if (input.soundLevel() >= 20) {
        music.pewPew.play()
        music.magicWand.loop()
        music.setVolume(80)
    }
    
}
