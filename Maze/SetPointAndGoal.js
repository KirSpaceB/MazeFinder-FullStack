export class SetPointAndGoal {
  constructor() {
    
  }

  setStartingPoint() {
    let startingPoint = document.querySelectorAll(".mazeGrid");
    // if theres red anywhere in the grid no more red
    // we can use a que to set two points on the grid

    for (let i = 0; i < startingPoint.length; i++) {
      startingPoint[i].addEventListener("click", () =>{
        startingPoint[i].style.backgroundColor = "red"

        if (startingPoint[i]) {
          return null
        }
      })
    }
    // do {
      //   startingPoint[i].addEventListener("click", () => {
      //     startingPoint[i].style.backgroundColor = "red"
      //   })
      // }
      // while (startingPoint[i] < 2)
    
    
  }
}