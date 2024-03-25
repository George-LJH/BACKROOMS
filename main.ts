scene.onPathCompletion(SpriteKind.Enemy, function (sprite, location) {
    _2pth = scene.aStar(_2.tilemapLocation(), mySprite.tilemapLocation())
    _3pth = scene.aStar(_3.tilemapLocation(), mySprite.tilemapLocation())
    _4pth = scene.aStar(_4.tilemapLocation(), mySprite.tilemapLocation())
    scene.followPath(_2, _2pth, 20)
    scene.followPath(_3, _3pth, 20)
    scene.followPath(_4, _4pth, 20)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.setGameOverMessage(true, "YOU ESCAPED THE BACKROOM!")
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "HE GOT YOU!")
    game.gameOver(false)
})
let _4pth: tiles.Location[] = []
let _3pth: tiles.Location[] = []
let _2pth: tiles.Location[] = []
let _4: Sprite = null
let _3: Sprite = null
let _2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
Render.setViewMode(ViewMode.raycastingView)
let VIEW = 0
mySprite = sprites.create(img`
    . . 5 5 5 5 5 5 . . 
    . . 5 f f f f 5 . . 
    . . 5 f f f f 5 . . 
    . . 5 f f f f 5 . . 
    . . 5 f f f f 5 . . 
    . . 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 
    5 . 5 5 5 5 5 5 . 5 
    5 . 5 5 5 5 5 5 . 5 
    5 . 5 5 5 5 5 5 . 5 
    . . 5 5 5 5 5 5 . . 
    . . 5 5 . . 5 5 . . 
    . . 5 5 . . 5 5 . . 
    . . 5 5 . . 5 5 . . 
    . . 5 5 . . 5 5 . . 
    `, SpriteKind.Player)
mySprite = Render.getRenderSpriteVariable()
let list = [270, 90]
let GHOST_SPEED = 30
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 49))
Render.setViewAngleInDegree(270)
game.splash("THE BACKROOM. ESCAPE IF YOU CAN... IF THERE IS A EXIT AT ALL...")
_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f . . . . f f f f . . 
    . . f 1 1 f . . . . f 1 1 f . . 
    . . f 1 1 f . . . . f 1 1 f . . 
    . . f f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f . . . . . . . . . f f . 
    . . f 1 f f f f f f f f f . f . 
    . . . f 1 1 1 1 1 1 1 1 1 f . . 
    . . . . f 1 1 1 1 1 1 1 f . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(_2, tiles.getTileLocation(16, 38))
_3 = sprites.create(img`
    . . f f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . . f f f f f f f f f . . 
    . . . f f f f f f f f f . 
    . . . f f f f f f f f . . 
    . . . . . . f . . . . . . 
    . f f f f f f f f f f f . 
    . f . . . . f f . . . f . 
    . f . . . f f . . . . f . 
    . f . . . . f f . . . f . 
    . f . . . f f . . . . f . 
    . f . . . . f f . . . f . 
    . f . . . f f . . . . f . 
    . f . . . f . f . . . f . 
    . f . . f . . . f . . f . 
    f f f . f . . . f . f f f 
    . f . . f . . . f . . f . 
    . . . . f . . . f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(_3, tiles.getTileLocation(8, 64))
_4 = sprites.create(img`
    . . . . f f f f . . . . 
    . . . f f f f f f . . . 
    . . . f f f f f f . . . 
    . . f f 1 f f 1 f f . . 
    . . f f f f f f f f . . 
    . f f f f 1 1 f f f f . 
    f f f f f 1 2 f f f f f 
    f f f f f 2 2 f f f f f 
    f f f f f 2 1 f f f f f 
    f f c f f 1 1 f f c f f 
    f f . f f f f f f . f f 
    f f . f f f f f f . f f 
    f f . f f c c f f . f f 
    f f . f f . . f f . f f 
    f f . f f . . f f . f f 
    `, SpriteKind.Enemy)
tiles.placeOnTile(_4, tiles.getTileLocation(56, 39))
_2pth = scene.aStar(_2.tilemapLocation(), mySprite.tilemapLocation())
_3pth = scene.aStar(_3.tilemapLocation(), mySprite.tilemapLocation())
_4pth = scene.aStar(_4.tilemapLocation(), mySprite.tilemapLocation())
scene.followPath(_2, _2pth, 20)
scene.followPath(_3, _3pth, 20)
scene.followPath(_4, _4pth, 20)
game.onUpdate(function () {
	
})
forever(function () {
    scene.setBackgroundImage(assets.image`myImage`)
})
forever(function () {
    Render.jump(mySprite, 5)
})
forever(function () {
    mySprite.startEffect(effects.fire)
})
forever(function () {
	
})
forever(function () {
    if (_2.tilemapLocation() == mySprite.tilemapLocation()) {
    	
    }
})
