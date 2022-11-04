describe('test for insertion sort', () => {
  it.skip('Sorts array least to greatest using insertionSort', () => {
    currentList = [3,4,5,1,2];

    let InsertionSort = new insertionsort()
    currentList = InsertionSort.Sort(currentList)

    expectedList = [1,2,3,4,5];

  expect(currentList).toEqual(expectedList);
  })
})