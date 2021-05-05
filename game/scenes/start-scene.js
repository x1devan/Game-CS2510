export default {
    name: "StartScene", //Scene name
    children: [ //Game objects in the scene
      {
        gameObject: {
          name: "MainCamera", components: [
            { name: "WorldCameraComponent",
            args: ["rgba(131, 215, 131, 1)"]}
          ]
        }, sx: 20, sy: 20,
      },
      {
        gameObject: {
          name: "ScreenCamera", components: [
            { name: "ScreenCameraComponent" }
          ], children: [
            {
              gameObject: {
                name: "ScreenText",
                components: [
                  {
                    name: "ScreenTextComponent",
                    args: ["", { alignment: "left", justification: "bottom" }]
                  }
                ]
              },
              x: 40, y: 40, drawLayer:"screen"
            },
          ]
        }
      },

      {
        gameObject: {
          name: "InfoBox",
          components: [
    
            { name: "DrawGeometryComponent", args: ["rgba(75, 81, 75, 0.9)", 'black', 2.5] },
            { name: "RectangleGeometryComponent", args: [200, 350] },
    
            ],
          
            children: [
    
            { 
              gameObject: { 
                name: "Instructions", 
                components: [
                  { 
                    name: "ScreenTextComponent", 
                    args: [
                      "Click anywhere to Start!", 
                      { color: "cyan" },
                      { font: '32pt Arial'},
                      { alignment: "center", justification: "middle" },
                      // {fonts: "100pt Arial"},
                    ] 
                  }
                ] 
              }, x: -31, y: 150, drawLayer: "screen" 
            },

            { 
              gameObject: { 
                name: "GameName", 
                components: [
                  { 
                    name: "ScreenTextComponent", 
                    args: [
                      "Tower Defense", 
                      { color: "gold" },
                      { font: "20pt Arial"},
                      { alignment: "center", justification: "middle" }
                    ] 
                  }
                ] 
              }, x: 5, y: 20, drawLayer: "screen" 
            },
          
          ]
        },  x: 550, y: 220, drawLayer: "screen"
      },

      {
        gameObject: {
          name: "Empty",
          components: [
           {name: "StartControllerComponent"}
          ]
        }
      },
      
    ]
  }