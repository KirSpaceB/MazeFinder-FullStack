describe('Gravity Button', () => {
  it.skip('Makes Walls Fall', () => {
    const N = nothingDiv;
    const W = wallDiv;
    const P = pathDiv;

    currentGrid = [
      [N,N,N,N,W]
      [N,W,N,W,N]
      [W,N,W,W,N]
      [N,N,W,W,N]
      [W,W,W,N,N]
  
    ]
    
    solvedGrid = [
      [N,N,N,N,N]
      [N,W,N,P,P]
      [N,N,W,W,P]
      [W,W,W,W,P]
      [W,W,W,W,W]
    ]
  expect(currentGrid).toEqual(solvedGrid)
  }) 
}) 