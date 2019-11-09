//Implement a method that accepts 3 integer values a, b, c.
//The method should return true if a triangle can be built 
//with the sides of given length and false in any other case.

//(In this case, all triangles must have surface greater than 0 to be accepted).

#include <iostream>

namespace Triangle
{
	bool isTriangle(long a, long b, long c)
	{
		if (a == 0 || b == 0 || c == 0)
			return false;
		if (a + b <= c || a + c <= b || b + c <= a)
			return false;
		return true;
	}
};

using namespace Triangle;

int main() {
	std::cout << "Expect: 0" << std::endl;
	std::cout << isTriangle(1, 2, 3) << std::endl;
	std::cin.get();
	std::cout << "Expect: 1" << std::endl;
	std::cout << isTriangle(2, 2, 3) << std::endl;
	std::cin.get();
	return isTriangle(1, 2, 3);
}

/*
	NB: Great solution by another user:

namespace Triangle
{
  bool isTriangle(int a, int b, int c)
  {
	return a-b<c && b-c<a && c-a<b;
  }
};

*/