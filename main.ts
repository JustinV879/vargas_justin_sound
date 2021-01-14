while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() >= 20) {
        music.pewPew.play()
        light.clear()
    }
    
}
