#include "gtest/gtest.h"
#include "MaxCounters.hpp"

TEST(MaxCounters, test1) {
  MaxCounters pc;
  int arr[] = {3, 4, 4, 6, 1, 4, 4};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  int expectedArr[] = {3, 2, 2, 4, 2};
  std::vector<int> expected(expectedArr, expectedArr+sizeof(expectedArr)/sizeof(expectedArr[0]));
  EXPECT_EQ(pc.solution(5, A), expected);
}
