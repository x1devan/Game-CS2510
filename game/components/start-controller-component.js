export default class StartControllerComponent extends Engine.Component {
    constructor(gameObject) {
      super(gameObject);
    }
    start() {
        this.ticks = 0;
    }
    update(){
        this.ticks++;

        if(!this.started){
            this.started = true;
            this.dotCounterX = 0;
            this.dotCounterY = 0;
            let bubblesCount = 12;
            for (let row = 0; row < bubblesCount; row++) {
              for(let col = 0; col < bubblesCount; col++) {
                let bubbles = Instantiate(
                  {
                    gameObject: {
                      name: "bubbles", components: [
                        { name: "CircleGeometryComponent", args: [2] },
                        { name: "DrawGeometryComponent", args: ['rgba(23, 140, 8, 1)', 'rgba(35, 35, 35, 1)', .2] },
                      ]
                    }, drawLayer: "background"
                  }
                )
                bubbles.transform.position.x = -10 + this.dotCounterX
                bubbles.transform.position.y = 0 + this.dotCounterY
                this.dotCounterX += 7;
              }
              this.dotCounterX = -10 + (row * 2) + -2 + 7;
              this.dotCounterY += 6;
            }
      
      
          }




        // if(this.ticks >= 10){
        if(Input.getMouseButtonDown(0)){
            Engine.SceneManager.changeScene("MainScene")
        }

    }
}