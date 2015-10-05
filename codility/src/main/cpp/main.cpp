// main.cpp
#include "TapeEquilibrium.hpp"
#include <iostream>

int main(int argc, char ** argv)
{
    TapeEquilibrium test;
    std::vector<int> A;
    std::cout << "TapeEquilibrium: " <<  test.solution(A) << std::endl;
    return 0;
}
