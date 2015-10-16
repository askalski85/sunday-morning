#include "gtest/gtest.h"
#include "FrogRiverOne.hpp"

TEST(FrogRiverOne, test1) {
  FrogRiverOne fro;
  int arr[] = {1, 3, 1, 4, 2, 3, 5, 4};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  EXPECT_EQ(6, fro.solution(5, A));
}
