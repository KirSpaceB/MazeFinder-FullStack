describe('test for radix sort', () => {
  it.skip('Sorts array least to greatest using radixsort', () => {
    currentList = [3,4,5,1,2];

    let RadixSort = new radixsort()
    currentList = RadixSort.Sort(currentList)

    expectedList = [1,2,3,4,5];

  expect(currentList).toEqual(expectedList);
  })
})