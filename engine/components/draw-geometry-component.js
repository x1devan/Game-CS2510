import Component from "../component.js"
export default class DrawGeometryComponent extends Component {
  constructor(gameObject, fillColor, strokeColor = null, strokeWidth=1) {
    super(gameObject);
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.strokeWidth = strokeWidth;
  }
  draw(ctx) {
    ctx.lineWidth = this.strokeWidth;
    let rectangleGeometry = this.gameObject.getComponent("RectangleGeometryComponent")
    if (rectangleGeometry) {
      if (this.fillColor) {
        ctx.fillStyle = this.fillColor;
        ctx.fillRect((Engine.SceneManager.screenWidth / -40), (Engine.SceneManager.screenHeight / -40) , rectangleGeometry.width, rectangleGeometry.height);
      }
      if(this.strokeColor){
        ctx.strokeStyle = this.strokeColor;
        ctx.strokeRect((Engine.SceneManager.screenWidth / -40), (Engine.SceneManager.screenHeight / -40) , rectangleGeometry.width, rectangleGeometry.height);
      }
    }
    let circleGeometry = this.gameObject.getComponent("CircleGeometryComponent");
    if (circleGeometry) {
      
      ctx.beginPath();
      ctx.arc((Engine.SceneManager.screenWidth / -40) + (1 * 0) - (1 * 0), (Engine.SceneManager.screenHeight / -40) + (1 * 0) + (1 * 0) + (1 * 0) , circleGeometry.radius, 0, Math.PI * 2);
      if (this.fillColor) {
        ctx.fillStyle = this.fillColor;
        ctx.fill();
      }
      if(this.strokeColor){
        ctx.strokeStyle = this.strokeColor;
        ctx.stroke();
      }
    }
    let redEnemyGeometry = this.gameObject.getComponent("redEnemyGeometryComponent");
    if (redEnemyGeometry) {
      ctx.fillStyle = this.color || "red";
      ctx.beginPath();
      // ctx.arc(Engine.SceneManager.screenWidth / -2, Engine.SceneManager.screenHeight / -2 , redEnemyGeometry.radius, 0, Math.PI * 2); //Recenter x and y to the top left
      ctx.arc(Engine.SceneManager.screenWidth / -40, Engine.SceneManager.screenHeight / -40 , redEnemyGeometry.radius, 0, Math.PI * 2); //Recenter x and y to the top left
      // ctx.arc(0, 0, redEnemyGeometry.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    let polygonGeometryComponent = this.gameObject.getComponent("PolygonGeometryComponent");
    if (polygonGeometryComponent) {
      if (polygonGeometryComponent.points && polygonGeometryComponent.points.length) {
        ctx.beginPath();
        ctx.moveTo(polygonGeometryComponent.points[0].x, polygonGeometryComponent.points[0].y)
        for (let point of polygonGeometryComponent.points) {
          ctx.lineTo(point.x, point.y);
        }
        ctx.closePath();
        if (this.fillColor) {
          ctx.fillStyle = this.fillColor;
          ctx.fill();
        }
        if(this.strokeColor){
          ctx.strokeStyle = this.strokeColor;
          ctx.stroke();
        }
      }
    }

  }
}