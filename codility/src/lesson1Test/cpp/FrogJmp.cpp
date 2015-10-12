#include "gtest/gtest.h"
#include "FrogJmp.hpp"

TEST(FrogJmp, test1) {
  FrogJmp fj;
  EXPECT_EQ(3, fj.solution(10, 85, 30));
}

TEST(FrogJmp, test2) {
  FrogJmp fj;
  EXPECT_EQ(10, fj.solution(0, 10, 1));
}

TEST(FrogJmp, test3) {
  FrogJmp fj;
  EXPECT_EQ(1, fj.solution(0, 1, 2));
}
