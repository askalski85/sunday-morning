#include "MaxCounters.hpp"
#include <algorithm>

std::vector<int> MaxCounters::solution(int N, std::vector<int> &A) {
  int counters[N];
  std::fill(counters, counters+N, 0);

  int maxCounter = 0;
  int currentMax = 0;

  for (unsigned int i = 0 ; i < A.size() ; ++i) {
      if (A[i] == N+1 ) {
          maxCounter = currentMax;
          continue;
      }
      if (counters[A[i]-1] < maxCounter ) {
          counters[A[i]-1] = maxCounter + 1;
      }
      else {
          ++counters[A[i]-1];
      }
      if (counters[A[i]-1] > currentMax) {
          currentMax = counters[A[i]-1];
      }
  }

  for ( int i = 0 ; i < N ; ++i) {
      if ( counters[i] < maxCounter ) {
          counters[i] = maxCounter;
      }
  }

  return std::vector<int> (counters, counters + N);
}
