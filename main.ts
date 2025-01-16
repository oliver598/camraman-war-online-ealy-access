sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("cameraman team won")
    sprites.destroy(mySprite)
    game.reset()
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    game.splash("scibidi toilet must be touched to win")
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 9 9 9 9 . 
        . . . . 5 5 5 5 5 5 5 9 9 9 9 . 
        . . . . . 5 5 5 5 5 5 9 9 9 9 . 
        . . . . . 5 5 5 5 5 5 9 9 9 9 . 
        7 7 7 . . . f f f f . . . . . . 
        7 7 7 . . . f f f f . . . . 7 7 
        7 7 7 7 7 7 f f f f 8 8 8 8 8 7 
        7 7 7 7 7 7 f f f f 8 8 8 8 8 7 
        7 7 7 . . . f f f f . . . 7 7 7 
        7 7 7 . . . f f f f . . . . . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Player)
    controller.player2.moveSprite(mySprite2)
    mySprite2.setPosition(8, 9)
    mySprite2.setStayInScreen(true)
    mySprite = sprites.create(assets.image`mi`, SpriteKind.Player)
    controller.player1.moveSprite(mySprite)
    mySprite.setPosition(145, 101)
    mySprite.setStayInScreen(true)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`bob`)
