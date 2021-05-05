

export default  class ScoreComponent{
    
    static score;

    static start(){
        ScoreComponent.score = 100;
    }
    static setScore(newScore){
        ScoreComponent.score = newScore;
    }

    static getScore(){
        return ScoreComponent.score;
    }

    static removeScore(amount){
        ScoreComponent.score -= amount;

    }

    static enemyKilled(){
        ScoreComponent.score += 5;
    }

    static buyTower(){
        if(ScoreComponent.canBuy()){
            ScoreComponent.score -= 50;
        }
    }

    static canBuy(){
        return(ScoreComponent.score - 50 >= 0)

    }
}