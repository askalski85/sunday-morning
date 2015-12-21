#include "gtest/gtest.h"
#include "MissingInteger.hpp"

TEST(MissingInteger, test1) {
  MissingInteger pc;
  int arr[] = {1, 3, 6, 4, 1, 2};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  EXPECT_EQ(5, pc.solution(A));
}

TEST(MissingInteger, test2) {
  MissingInteger pc;
  int arr[] = {2, 3};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  EXPECT_EQ(1, pc.solution(A));
}

TEST(MissingInteger, test3) {
  MissingInteger pc;
  int arr[] = {1, 2, 3};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  EXPECT_EQ(4, pc.solution(A));
}
