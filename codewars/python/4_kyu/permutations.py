# In this kata you have to create all permutations of an input string and remove duplicates,
# # if present. This means, you have to shuffle all letters from the input in all possible orders.
# # # # Examples:
# # # # permutations('a'); # ['a']
# # # # permutations('ab'); # ['ab', 'ba']
# # # # permutations('aabb'); # ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

# # MY FIRST ATTEMPT:


def permutations(string):
    if len(string) is 1:
        return [string]

    def get_permutations(original_list, constructed_list):
        output = []
        if not constructed_list:
            for item in original_list:
                copy = original_list[:]
                copy.remove(item)
                for char in copy:
                    output.append(item + char)
            return get_permutations(original_list, output)
        for item in constructed_list:
            copy = original_list[:]
            for char in item:
                copy.remove(char)
            for char in copy:
                    output.append(item + char)
        if len(constructed_list[0]) < len(string):
            return get_permutations(original_list, output)
        return list(set(constructed_list))

    return get_permutations(list(string), None)

# # MY SECOND ATTEMPT


def permutations2(string):
    if len(string) is 1:
        return [string]

    def get_permutations(original_list, constructed_list):
        output = []
        active_list = constructed_list or original_list
        for item in active_list:
            copy = original_list[:]
            for char in item:
                copy.remove(char)
            for char in copy:
                output.append(item + char)
        if not len(constructed_list) or len(constructed_list[0]) < len(string):
            return get_permutations(original_list, output)
        return list(set(constructed_list))

    return get_permutations(list(string), [])


# # OPTIMAL ATTEMPT STOLEN FROM OTHER CODEWARDS USERS:
# # # # def permutations(string):
# # # #     return list("".join(p) for p in set(itertools.permutations(string)))
