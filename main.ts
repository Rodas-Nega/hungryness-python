//  Created By: Rodas N.
//  Created On: Sept 28 2020
//  
//  This program displays the "hungryness" variable using if and else if commands.
let hungryness = 0
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        hungryness = hungryness + 1
        basic.showNumber(hungryness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungryness = 0
        basic.showNumber(hungryness)
    }
    
})
