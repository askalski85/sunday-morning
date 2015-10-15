#include "PermMissingElem.hpp"

int PermMissingElem::solution(std::vector<int> &A) {
  unsigned size = A.size();
  int Temp[size+2];
  std::fill(Temp, Temp + size + 2, 0);
  for (unsigned i = 0 ; i < size ; ++i ) {
      Temp[A[i]] = 1;
  }
  for (unsigned i = 1 ; i < size + 2 ; ++i ) {
      if (Temp[i] == 0) return i;
  }
  return -1;
}
