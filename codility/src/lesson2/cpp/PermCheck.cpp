#include "PermCheck.hpp"
#include <algorithm>

int PermCheck::solution(std::vector<int> &A) {
    int newSize = A.size() + 1; //to make it easier to find elem
    bool temp[newSize];
    std::fill(temp, temp + newSize, false);
    for ( unsigned i = 0 ; i < A.size() ; ++i) {
        if ( A[i] > newSize) {
            return 0;
        }
        temp[A[i]] = true;
    }

    for ( int i = 1 ; i < newSize ; ++i) {
        if(!temp[i]) {
            return 0;
        }
    }
    return 1;
}
