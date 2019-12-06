def disemvowel(string):
    stringBuilder = ''
    for el in string: 
        if(not el.lower() in ['a','e','i','o','u']):
            stringBuilder += el
    return stringBuilder
