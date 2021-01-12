while True:
    print("Sound Level:" + input.sound_level())
    if (input.sound_level()) >= 10:
        light.set_all(color.rgb(255,0,255))
        music.pew_pew.play()
        music.magic_wand.loop()
        music.set_volume(80)