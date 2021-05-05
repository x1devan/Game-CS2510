


export default class MainControllerComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
    
  }

  static point;
  static tickCounter = 0;
  start() {
    this.ticks = 0;
    this.started = false;
    Engine.Lives.start();
    Engine.mapMaker.start();
    Engine.Score.start();
    this.wave1Check = false;
    this.wave2Check = false;
    this.wave3Check = false;
    this.wave4Check = false;
    this.wave5Check = false;
    this.wave6Check = false;
  }

  update() {
    MainControllerComponent.tickCounter++;
    let point;

    point = Engine.Input.getMousePosition();
    point = Input.getMousePosition();
    point.x += (Engine.SceneManager.screenWidth) / 2;
    point.x /= 20;
    point.y += Engine.SceneManager.screenHeight / 2;
    point.y /= 20;

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
                  { name: "DrawGeometryComponent", args: ['rgba(0, 0, 202, 0.41)', 'yellow', .2] },
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

    this.waveNumber = 0;
    this.waveText = Engine.SceneManager.currentScene.getGameObject("ScreenTextWave").getComponent("ScreenTextComponent")

    if(Input.getKey(' ') & !this.wave1Check)
    {
      this.waveNumber = 1;
      this.waveText.string = "Place your Towers!"
      this.wave1Check = true;
      Engine.waves.startWave1();
    }
    if(Input.getKey(' ') & this.wave1Check & Engine.waves.wave1Check & !this.wave2Check)
    {
      this.waveNumber = 2;
      this.waveText.string = "Starts off slow :)"
      this.wave2Check = true;
      Engine.waves.startWave2();
    }
    if(Input.getKey(' ') & this.wave1Check & Engine.waves.wave1Check & this.wave2Check & Engine.waves.wave2Check & !this.wave3Check)
    {
      this.waveNumber = 3;
      this.waveText.string = "Speeding up a little :)"
      this.wave3Check = true;
      Engine.waves.startWave3();
    }
    if(Input.getKey(' ') & this.wave1Check & Engine.waves.wave1Check & this.wave2Check & Engine.waves.wave2Check &
    this.wave3Check & Engine.waves.wave3Check & !this.wave4Check)
    {
      this.waveNumber = 4;
      this.waveText.string = "Keep placing Towers!!"
      this.wave4Check = true;
      Engine.waves.startWave4();
    }
    if(Input.getKey(' ') & this.wave1Check & Engine.waves.wave1Check & this.wave2Check & Engine.waves.wave2Check &
    this.wave3Check & Engine.waves.wave3Check & this.wave4Check & Engine.waves.wave4Check & !this.wave5Check)
    {
      this.waveNumber = 5;
      this.waveText.string = "Beware the next wave!"
      this.wave5Check = true;
      Engine.waves.startWave5();
    }
    if(Input.getKey(' ') & this.wave1Check & Engine.waves.wave1Check & this.wave2Check & Engine.waves.wave2Check &
    this.wave3Check & Engine.waves.wave3Check & this.wave4Check & Engine.waves.wave4Check &
    this.wave5Check & Engine.waves.wave5Check & !this.wave6Check)
    {
      this.waveNumber = 6;
      this.waveText.string = "No chance? :)"
      this.wave6Check = true;
      Engine.waves.startWave6();
    }

    Engine.mapMaker.update(point);




    Engine.SceneManager.currentScene.getGameObject("ScreenText").getComponent("ScreenTextComponent").
    string = "" + Engine.Lives.getLives() + "   /   " + this.waveNumber + "   /   " + Engine.Score.getScore()

    // if (this.ticks >= 1000) {
    if (Input.getKey('Escape')){
        Engine.SceneManager.changeScene("StartScene") 
        Engine.waves.stopWave1();
        Engine.waves.stopWave2();
        Engine.waves.stopWave3();
        Engine.waves.stopWave4();
        Engine.waves.stopWave5();
        Engine.waves.stopWave6();
    }

    if(Engine.Lives.getLives() <= 0){
      // if(this.ticks >= 10){
        Engine.SceneManager.changeScene("GameOverScene")
      Engine.waves.stopWave1();
      Engine.waves.stopWave2();
      Engine.waves.stopWave3();
      Engine.waves.stopWave4();
      Engine.waves.stopWave5();
      Engine.waves.stopWave6();
    }

  }
}