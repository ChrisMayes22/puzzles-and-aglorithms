def anagrams(word, words):
    arr = []
    test_dict = { "".join(sorted(word)): True }
    for w in words:
        if "".join(sorted(w)) in test_dict:
            arr.append(w)
    return arr

print(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))