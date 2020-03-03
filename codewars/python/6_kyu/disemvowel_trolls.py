def disemvowel(string):
    string_builder = ''
    for el in string: 
        if not el.lower() in ['a', 'e', 'i', 'o', 'u']:
            string_builder += el
    return string_builder
