export default {
  name: "GameOverScene", //Scene name
  children: [ //Game objects in the scene
    {
      gameObject: {
        name: "MainCamera", components: [
          { name: "WorldCameraComponent",
          args: ["rgba(142, 140, 140, 1)"]}
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
  
          { name: "DrawGeometryComponent", args: ["rgba(75, 81, 75, 0.909)", 'black', 2.5] },
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
                    "Click anywhere to", 
                    { color: "rgba(195, 69, 69, 1)" },
                    { font: '32pt Arial'},
                    { alignment: "center", justification: "middle" },
                    // {fonts: "100pt Arial"},
                  ] 
                }
              ] 
            }, x: -5, y: 150, drawLayer: "screen" 
          },
          { 
            gameObject: { 
              name: "Instructions2", 
              components: [
                { 
                  name: "ScreenTextComponent", 
                  args: [
                    "Restart!", 
                    { color: "rgba(195, 69, 69, 1)" },
                    { font: '32pt Arial'},
                    { alignment: "center", justification: "middle" },
                    // {fonts: "100pt Arial"},
                  ] 
                }
              ] 
            }, x: 38, y: 180, drawLayer: "screen" 
          },

          { 
            gameObject: { 
              name: "GameName", 
              components: [
                { 
                  name: "ScreenTextComponent", 
                  args: [
                    "G a m e   O v e r !", 
                    { color: "red" },
                    { font: "20pt Arial"},
                    { alignment: "center", justification: "middle" }
                  ] 
                }
              ] 
            }, x: -5, y: 20, drawLayer: "screen" 
          },
        
        ]
      },  x: 550, y: 220, drawLayer: "screen"
    },

    {
      gameObject: {
        name: "Empty",
        components: [
         {name: "GameOverControllerComponent"}
        ]
      }
    },
    
  ]
}