
export default  class mapMaker{
    
    // static mapMakers;
    static mapX = 23;
    static mapY = 9;
    static map;

    static start(){

        mapMaker.land("1", 0)
        mapMaker.land("2", 2)
        mapMaker.path("3", 4)
        mapMaker.path2("4", 6)
        mapMaker.path2("5", 8)
        mapMaker.path2("6", 10)
        mapMaker.path2("7", 12)
        mapMaker.path3("8", 14)
        mapMaker.land("9", 16)
        mapMaker.land("10", 18)


        let holder = 1;
        let landCounter = 0;
        mapMaker.map = []
        for(let i = 0; i < 100; i++)
        {
            if(i != 0 && i % 10 == 0){
                holder++;
            }

            if(i < 20 || i >= 80)
            {
                let name = "" + holder + "Land" + (landCounter + 1);
                mapMaker.map[i] = Engine.SceneManager.currentScene.getGameObject(name)
            }
            
            if(i >= 20 & i < 30)
            {
                if(landCounter < 5){
                    let name = "" + holder + "Path" + (landCounter + 1);
                    mapMaker.map[i] = Engine.SceneManager.currentScene.getGameObject(name)
                }
                else{
                    let name = "" + holder + "Land" + (landCounter + 1);
                    mapMaker.map[i] = Engine.SceneManager.currentScene.getGameObject(name)
                }
            }

            if(i >= 30 & i < 70)
            {


                if(landCounter == 4){
                    let name = "" + holder + "Path" + (landCounter + 1);
                    mapMaker.map[i] = Engine.SceneManager.currentScene.getGameObject(name)
                }
                else{
                    let name = "" + holder + "Land" + (landCounter + 1);
                    mapMaker.map[i] = Engine.SceneManager.currentScene.getGameObject(name)
                }
            }

            if(i >= 70 & i < 80)
            {

                if(landCounter < 4){
                    let name = "" + holder + "Land" + (landCounter + 1);
                    mapMaker.map[i] = Engine.SceneManager.currentScene.getGameObject(name)
                }
                else{
                    let name = "" + holder + "Path" + (landCounter + 1);
                    mapMaker.map[i] = Engine.SceneManager.currentScene.getGameObject(name)

                }
            }

            landCounter++;
            if(landCounter % 10 == 0){
                landCounter = 0;
            }

        }



    }

    static update(point)
    {

        let inCollision;

        for(let i of this.map){
            inCollision = Engine.EngineGeometry.Collisions.inCollision(point, i.getComponent("RectangleGeometryComponent").asGeometry())
            
            if(inCollision)
            {
                if(i.name.includes("Land")) 
                    if(Engine.Input.getKey("1")) Engine.Tower.start(i, "base", "base1");
            }
        }
        



    }

    static land(row, yInput){

        Instantiate({gameObject:{
                name: row + "Land1",
                components: [
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ],
            },drawLayer: "midground", x: (2 * 0) + mapMaker.mapX, y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land2",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 1) + mapMaker.mapX, y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land3",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 2) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land4",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 3) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land5",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 4) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )
            
        Instantiate({gameObject:{
                name: row + "Land6",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 5) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land7",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 6) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land8",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 7) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land9",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 8) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land10",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 9) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )


    }





    static path(row, yInput){

        Instantiate({gameObject:{
                name: row + "Path1",
                components: [
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ],
            }, drawLayer: "midground", x: (2 * 0) + mapMaker.mapX, y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Path2",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 1) + mapMaker.mapX, y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Path3",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 2) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Path4",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 3) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Path5",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 4) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )
            
        Instantiate({gameObject:{
                name: row + "Land6",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 5) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land7",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 6) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land8",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 7) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land9",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 8) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land10",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 9) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )


    }





    static path2(row, yInput){

        Instantiate({gameObject:{
                name: row + "Land1",
                components: [
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ],
            }, drawLayer: "midground", x: (2 * 0) + mapMaker.mapX, y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land2",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 1) + mapMaker.mapX, y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land3",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 2) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land4",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 3) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Path5",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 4) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )
            
        Instantiate({gameObject:{
                name: row + "Land6",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 5) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land7",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 6) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land8",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 7) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land9",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 8) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land10",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 9) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )


    }



    static path3(row, yInput){

        Instantiate({gameObject:{
                name: row + "Land1",
                components: [
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ],
            }, drawLayer: "midground", x: (2 * 0) + mapMaker.mapX, y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land2",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 1) + mapMaker.mapX, y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land3",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 2) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Land4",
                components:[
                    { name: "DrawGeometryComponent", args: ["green", 'black', 0.005] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 3) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Path5",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 4) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )
            
        Instantiate({gameObject:{
                name: row + "Path6",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 5) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Path7",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 6) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Path8",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 7) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Path9",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 8) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

        Instantiate({gameObject:{
                name: row + "Path10",
                components:[
                    { name: "DrawGeometryComponent", args: ["tan"] },
                    { name: "RectangleGeometryComponent", args: [2, 2] },
                ]
            }, drawLayer: "midground", x: (2 * 9) + mapMaker.mapX , y: mapMaker.mapY + yInput,
        }
        )

    }
}