


export default  class LivesComponent{
    
    static lives;

    static start(){
        LivesComponent.lives = 20;
    }
    static setLife(newLives){
        LivesComponent.lives = newLives;
    }

    static getLives(){
        return LivesComponent.lives;
    }

    static removeLives(){
        LivesComponent.lives--;

    }
}