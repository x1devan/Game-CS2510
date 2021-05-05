export default class redEnemy{

    static start(enemyType, name, positionX, positionY){


        if(enemyType == "red") redEnemy.red(name, positionX, positionY)

    }

    static red(name, positionX, positionY){
        this.currentEnemy =
        Instantiate({gameObject:{
            name: name,
            components: [
                { name: "DrawGeometryComponent", args: ['rgba(255, 0, 0, 0.37)', 'red', .1] },
                { name: "CircleGeometryComponent", args: [.75] },
                { name: "MoveEnemyComponent", args: [0.1] }
            ],
            },drawLayer: "foreground", x: positionX, y: positionY,
        }
        )

        Engine.waves.enemyArray.push(this.currentEnemy)

    }

}
