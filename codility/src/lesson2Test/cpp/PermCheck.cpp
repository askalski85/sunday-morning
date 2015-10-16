#include "gtest/gtest.h"
#include "PermCheck.hpp"

TEST(PermCheck, test1) {
  PermCheck pc;
  int arr[] = {4, 1, 3, 2};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  EXPECT_EQ(1, pc.solution(A));
}

TEST(PermCheck, test2) {
  PermCheck pc;
  int arr[] = {4, 1, 3};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  EXPECT_EQ(0, pc.solution(A));
}
