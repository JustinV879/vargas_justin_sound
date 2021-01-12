while (true) {
    console.log("Sound Level:" + input.soundLevel())
    if (input.soundLevel() >= 10) {
        light.setAll(color.rgb(255, 0, 255))
        music.pewPew.play()
        music.magicWand.loop()
        music.setVolume(80)
    }
    
}
