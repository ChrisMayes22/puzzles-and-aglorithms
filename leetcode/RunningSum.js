/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n) time, O(1) space, mutates original array
const runningSumInPlace = function (nums) {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1]
	}
	return nums;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n) time, O(n) space, does not mutate original array
const runningSumImmut = function (nums) {
	return nums.reduce((arr, num) => {
		if (arr.length === 0) {
			return [num];
		} else {
			arr.push(num + arr[arr.length - 1]);
			return arr;
		}
	}, []);
}