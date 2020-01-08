def valid_parentheses(string):
    open = 0
    for c in string:
        open += 1 if(c == '(') else -1 if(c == ')') else 0
        if(open < 0):
            return False
    return True if not open else False

    # Alternative solution seen from others: Use regex