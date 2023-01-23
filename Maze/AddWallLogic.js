export class AddWallLogic {
  constructor() {
    this.logic()
  }

  async logic() {

    const redPromise = new Promise((resolve) => {
      console.log('test')
      const divWrapperChildren = document.getElementById('DIV_WRAPPER').children;
      console.log('test2')

      for(let i = 0; i < divWrapperChildren.length; i++) {
        if(divWrapperChildren[i].style.backgroundColor === 'red') {
          resolve()
          console.log('test2')
        }
      }
    })

    await Promise.all([redPromise])
    console.log('test')
  }  
}
