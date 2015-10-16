#include "FrogRiverOne.hpp"
#include <algorithm>

int FrogRiverOne::solution(int Xpos, std::vector<int> &A) {
    int temp[Xpos+1];
    std::fill(temp, temp+Xpos+1, -1);

    for(unsigned i = 0 ; i < A.size() ; ++i) {
        if (temp[A[i]] == -1 ) {
            temp[A[i]] = i; //we visited at this time
        }
    }

    int minTime = 0;
    for(unsigned i = 1 ; i < sizeof(temp)/sizeof(temp[0]) ; ++i) {
        if (temp[i] == -1) {
            return -1;
        }
        if (temp[i] > minTime) {
            minTime = temp[i];
        }
    }

    return minTime;
}
