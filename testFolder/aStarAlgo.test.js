describe('test for aStarAlgo', () => {
  it.skip('Solves using aStarAlgo', () => {
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
    currentGrid = aStarAlgo.Solve();
    
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