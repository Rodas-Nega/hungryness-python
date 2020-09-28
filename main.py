# Created By: Rodas N.
# Created On: Sept 28 2020
# 
# This program displays the "hungryness" variable using if and else if commands.
hungryness = 0

def on_forever():
    global hungryness
    if input.button_is_pressed(Button.A):
        hungryness = hungryness + 1
        basic.show_number(hungryness)
    elif input.button_is_pressed(Button.B):
        hungryness = 0
        basic.show_number(hungryness)
basic.forever(on_forever)