export default {
  name: "MainScene", //Scene name
  children: [ //Game objects in the scene
    {
      gameObject: {
        name: "MainCamera", components: [
          { name: "WorldCameraComponent", args:["rgba(0, 157, 255, 1)"] },
        ]
      }, sx: 20, sy: 20
    },
    {
      gameObject: {
        name: "ScreenCamera", components: [
          { name: "ScreenCameraComponent" }
        ], children: []
      }
    },

    {
      gameObject: {
        name: "MainController",
        components: [
         { name: "MainControllerComponent" },
         { name: "ScoreComponent" },
         { name: "LivesComponent" },
        ]
      }
    },

    {
    gameObject: {
      name: "InfoBox",
      components: [

        { name: "DrawGeometryComponent", args: ["rgba(75, 81, 75, 0.9)", 'black', 0.1] },
        { name: "RectangleGeometryComponent", args: [200, 350] },

        ],
      
        children: [

        { 
          gameObject: { 
            name: "ScreenText", 
            components: [
              { 
                name: "ScreenTextComponent", 
                args: [
                  "Default", 
                  { color: "white" },
                  { font: '32pt Arial'},
                  { alignment: "center", justification: "middle" },
                  // {fonts: "100pt Arial"},
                ] 
              }
            ] 
          }, x: 0, y: 50, drawLayer: "screen" 
        },
        { 
          gameObject: { 
            name: "ScreenTextWave", 
            components: [
              { 
                name: "ScreenTextComponent", 
                args: [
                  "Press Space to Start", 
                  { color: "rgba(0, 255, 0, 1)" },
                  { font: "20pt Arial"},
                  { alignment: "center", justification: "middle" }
                ] 
              }
            ] 
          }, x: -22, y: 100, drawLayer: "screen" 
        },
        { 
          gameObject: { 
            name: "Labels", 
            components: [
              { 
                name: "ScreenTextComponent", 
                args: [
                  "Lives / Wave / Gold", 
                  { color: "gold" },
                  { font: "20pt Arial"},
                  { alignment: "center", justification: "middle" }
                ] 
              }
            ] 
          }, x: -12, y: 20, drawLayer: "screen" 
        },

        { 
          gameObject: { 
            name: "Tips1", 
            components: [
              { 
                name: "ScreenTextComponent", 
                args: [
                  "Press 1 over a", 
                  { color: "white" },
                  { font: "20pt Arial"},
                  { alignment: "center", justification: "middle" }
                ] 
              }
            ] 
          }, x: 5, y: 180, drawLayer: "screen" 
        },

        { 
          gameObject: { 
            name: "Tips2", 
            components: [
              { 
                name: "ScreenTextComponent", 
                args: [
                  "square to buy a tower", 
                  { color: "white" },
                  { font: "20pt Arial"},
                  { alignment: "center", justification: "middle" }
                ] 
              }
            ] 
          }, x: -20, y: 210, drawLayer: "screen" 
        },
        
        { 
          gameObject: { 
            name: "Tips3", 
            components: [
              { 
                name: "ScreenTextComponent", 
                args: [
                  "for 50 gold", 
                  { color: "white" },
                  { font: "20pt Arial"},
                  { alignment: "center", justification: "middle" }
                ] 
              }
            ] 
          }, x: 20, y: 240, drawLayer: "screen" 
        },


        { 
          gameObject: { 
            name: "Exit", 
            components: [
              { 
                name: "ScreenTextComponent", 
                args: [
                  "Press ESC to restart", 
                  { color: "rgba(0, 255, 0, 1)" },
                  { font: "20pt Arial"},
                  { alignment: "center", justification: "middle" }
                ] 
              }
            ] 
          }, x: -22, y: 300, drawLayer: "screen" 
        },


      ]
    },  x: 200, y: 220, drawLayer: "screen"
  },

    
  ]
}