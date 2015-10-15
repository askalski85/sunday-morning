#include "FrogJmp.hpp"

int FrogJmp::solution(int X, int Y, int D) {
      int diff = Y-X;
      int result = diff%D == 0 ? diff/D : diff/D + 1;
      return result;

}
