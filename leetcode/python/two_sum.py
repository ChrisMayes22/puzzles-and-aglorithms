# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

class Solution(object):
    def two_sum(self, nums, target):
        dictionary = {}
        for num in nums:
            diff = target - num
            if diff in dictionary.keys():
                if diff == num:
                    first_ind = nums.index(diff)
                    nums.remove(diff)
                    second_ind = nums.index(diff) + 1
                    return [first_ind, second_ind]
                return [nums.index(diff), nums.index(num)]
            dictionary[num] = True


my_solution = Solution()

print(my_solution.two_sum([5, 5], 10))
print(my_solution.two_sum([-3, 3], 0))

