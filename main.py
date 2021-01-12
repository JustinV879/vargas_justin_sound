while True:
    print("Light Level:" + input.sound_level())
    if (input.sound_level()) >= 20:
        music.pew_pew.play()
        music.magic_wand.loop()
        music.set_volume(80)
        