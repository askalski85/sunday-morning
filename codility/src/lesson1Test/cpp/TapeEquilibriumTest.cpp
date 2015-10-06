#include "gtest/gtest.h"
#include "TapeEquilibrium.hpp"

TEST(TapeEquilibrium, test1) {
  TapeEquilibrium tm;
  int arr[] = {1, 2, 3, 4, 4, 3, 2};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  EXPECT_EQ(1, tm.solution(A));
}
