#include "gtest/gtest.h"
#include "PermMissingElem.hpp"

TEST(PermMissingElem, test1) {
  PermMissingElem pme;
  int arr[] = {2, 3, 1, 5};
  std::vector<int> A(arr, arr+sizeof(arr)/sizeof(arr[0]));
  EXPECT_EQ(4, pme.solution(A));
}
