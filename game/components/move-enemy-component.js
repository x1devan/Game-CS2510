
export default  class MoveEnemyComponent extends Engine.Component{
    constructor(gameObject, speed){
        super(gameObject);
        this.speed = speed || 0.1;

    }
    update(){

        if(this.gameObject.transform.position.x < 32)
        {
            this.gameObject.transform.position.x += this.speed; 
        }
        else if(this.gameObject.transform.position.y < 24)
        {
            this.gameObject.transform.position.y += this.speed;
        }
        else if(this.gameObject.transform.position.x < 42 + (1 * 1.6))
        {
            this.gameObject.transform.position.x += this.speed; 
        }
        else if(this.gameObject.transform.position.x >= 43.6)
        {
            Destroy(this.gameObject);

            Engine.Lives.removeLives();

        }
    }
}