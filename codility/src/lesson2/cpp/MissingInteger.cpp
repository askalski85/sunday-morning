#include "MissingInteger.hpp"

int MissingInteger::solution(std::vector<int> &A) {
  int size = A.size();
  int max_value = size+1;
  int temp[max_value];
  std::fill(temp, temp + max_value, 0);
  for ( int i = 0 ; i < size ; ++i) {
      if ( A[i] < 0 || A[i] - size > 0 ) {
          continue;
      }
      temp[A[i]] = 1;
  }

  for ( int i = 1 ; i < max_value ; ++i) {
      if ( temp[i] == 0) {
          return i;
      }
  }

  return max_value;
}
