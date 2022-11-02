describe('test for DFSAlgo', () => {
  it.skip('Solves using DFSAlgo', () => {
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
    let DFSAlgo = new dfsalgo() // dont know how to do this?
    currentGrid = DFSAlgo.Solve();
    
    solvedGrid = [
      [P,P,P,P,P]
      [P,W,S,P,P]
      [P,P,P,W,P]
      [P,P,W,W,P]
      [P,W,G,P,P]
    ]
  expect(currentGrid).toEqual(solvedGrid)
  }) 
}) 