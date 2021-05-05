export default class tower{

    static start(newGameObject, enemyType, name){

        if(enemyType == "base") tower.red(newGameObject, name)
    }

    static red(newGameObject, name){

        if(newGameObject.getComponent("TransformComponent").children.length == 0 & Engine.Score.canBuy())
        {
            Engine.Score.buyTower();


            this.newChild;
            {
                newGameObject.addChild(this.newChild = Instantiate({gameObject: {
                        name: name,
                        components: [
                            { name: "DrawGeometryComponent", args: ['rgba(128, 128, 128, .7)', 'rgba(0, 0, 0, 0.71)', 0.1, 0.1] },
                            { name: "RectangleGeometryComponent", args:[1, 1]},
                            { name: "TowerShootComponent", args: [newGameObject.getComponent("TransformComponent").position]}
                        ],
                    }, drawLayer: "foreground", x: .5, y: .5
                })
                )
                // newGameObject.addChild(this.newChild)
    
            }
            // console.log("Tower Created")

            Destroy(this.newChild)

        }

    }



}
