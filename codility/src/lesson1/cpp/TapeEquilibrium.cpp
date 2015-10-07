#include "TapeEquilibrium.hpp"
#include <limits>    //numeric limits
#include <stdlib.h>  //abs
#include <iostream>

TapeEquilibrium::TapeEquilibrium()
{}

int TapeEquilibrium::solution(std::vector<int> &A){
    int size = A.size();
    std::vector<int> diffsArray(size);
    diffsArray[0] = A[0];

    for (int i = 1 ; i < size ; ++i) {
        diffsArray[i] = A[i] + diffsArray[i-1];
    }

    int minDiff = std::numeric_limits<int>::max();
    for (int i = 0 ; i < size-1 ; ++i) {
        int temp = abs(diffsArray[size-1] - 2*diffsArray[i]);
        if ( temp < minDiff) {
            minDiff = temp;
        }
    }

    return minDiff;
}
