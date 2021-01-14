while True:
    print("Light Level:" + input.light_level())
    if (input.light_level()) >= 20:
        music.pew_pew.play()