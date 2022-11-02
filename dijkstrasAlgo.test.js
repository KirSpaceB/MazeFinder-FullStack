describe('Tests for dijkstras algo', () => {
  it.skip('Solves maze using dijkstras', () => {
    const N = nothingDiv;
    const W = wallDiv;
    const S = solverDiv;
    const G = goalDiv;
    const P = pathDiv;

    currentGrid = [
      [N,N,N,N,N]
      [N,W,S,N,N]
      [N,N,N,W,N]
      [N,N,W,W,N]
      [N,W,G,N,N]
  
    ]
    currentGrid = solveMazeDijkstras.Solve();
    
    solvedGrid = [
      [N,N,N,N,N]
      [N,W,S,P,P]
      [N,N,N,W,P]
      [N,N,W,W,P]
      [N,W,G,P,P]
    ]
  expect(currentGrid).toEqual(solvedGrid)
  })
})
//We are using divs instead of pointers in javascript
//querySelectAll creates nodeList
//getElementById selects one node ID(good idea for solver and goal?)
// How can we test using divs instead of pointers?