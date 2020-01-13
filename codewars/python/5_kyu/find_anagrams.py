def anagrams(word, words):  ## First attempt
    arr = []
    test_dict = { "".join(sorted(word)): True }
    for w in words:
        if "".join(sorted(w)) in test_dict:
            arr.append(w)
    return arr

print(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

def anagrams_2(word, words): ## Second Attempt
    return([item for item in words if "".join(sorted(item)) == "".join(sorted(word))])

print(anagrams_2('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
