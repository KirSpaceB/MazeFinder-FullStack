describe('test for quick sort', () => {
  it.skip('Sorts array least to greatest using quicksort', () => {
    currentList = [3,4,5,1,2];

    let QuickSort = new quicksort()
    currentList = QuickSort.Sort(currentList)

    expectedList = [1,2,3,4,5];

  expect(currentList).toEqual(expectedList);
  })
})