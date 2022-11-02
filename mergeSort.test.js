describe('test for merge sort', () => {
  it.skip('Sorts array least to greatest using mergesort', () => {
    currentList = [3,4,5,1,2];

    let MergeSort = new mergeSort()
    currentList = MergeSort.Sort(currentList)

    expectedList = [1,2,3,4,5];

  expect(currentList).toEqual(expectedList);
  })
})