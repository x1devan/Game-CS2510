
import Rectangle from "./../../engine/geometry/rectangle.js";
import { MainControllerComponent } from "./game-components.js";


export default  class TowerShootComponent extends Engine.Component{
    constructor(gameObject, parentPosition){
        super(gameObject);
        this.shape;
        this.dimensions;
        this.parentPosition = parentPosition
    }
    static turretArray;
    static counter = 0 ;
    start()
    {

        this.dimensions = {
            x: 0, 
            y: 0, 
            width: 6.5, 
            height: 6.5
        }
        this.shape = this.gameObject.getComponent("RectangleGeometryComponent").asGeometry()
        this.dimensions.x = this.parentPosition.x - 2.0 - this.shape.x
        this.dimensions.y = this.parentPosition.y - 2.0 - this.shape.y

    }
    shoot(){

        let inCollision;


        this.shootRange = new Rectangle(this.dimensions.x, this.dimensions.y, this.dimensions.width, this.dimensions.height)
        this.destroyTimer = true;

        for(let one of Engine.waves.enemyArray){
            
            if(one != null){
                let holder = one;
                if(!holder) return;
                let enemyGeometry = one.getComponent("CircleGeometryComponent").asGeometry();

                inCollision = Engine.EngineGeometry.Collisions.inCollision(enemyGeometry, this.shootRange)


                if(inCollision & this.destroyTimer)
                {

                    this.index = Engine.waves.enemyArray.indexOf(one);
                    Engine.waves.enemyArray[this.index] = null;
                    Destroy(one);
                    this.destroyTimer = false;
                    Engine.Score.enemyKilled();

                }

            }
        }
        
        this.destroyTimer = true;

    }
    update(){


        if(MainControllerComponent.tickCounter % 100 == 0)
        {
            this.shoot();
        }
        
    }

    stopShooting(){
        clearInterval(this.tests)
    }
}