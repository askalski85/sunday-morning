#include "gtest/gtest.h"
#include "TapeEquilibrium.hpp"

TEST(TapeEquilibrium, test1) {
  TapeEquilibrium tm;
  int arr[] = {3, 1, 2, 4, 3};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  EXPECT_EQ(1, tm.solution(A));
}

TEST(TapeEquilibrium, test2) {
  TapeEquilibrium tm;
  int arr[] = {-1000, 1000};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  EXPECT_EQ(2000, tm.solution(A));
}
