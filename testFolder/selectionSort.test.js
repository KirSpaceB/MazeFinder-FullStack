describe('test for bubble sort', () => {
  it.skip('Sorts array least to greatest using bubbleSort', () => {
    currentList = [3,4,5,1,2];

    let SelectionSort = new selectionSort()
    currentList = SelectionSort.Sort(currentList)

    expectedList = [1,2,3,4,5];

  expect(currentList).toEqual(expectedList);
  })
})