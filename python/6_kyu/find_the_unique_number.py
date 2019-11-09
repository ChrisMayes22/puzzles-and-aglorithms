def find_uniq(arr):
    if not( arr[0] is arr[1] ):
        return arr[0] if arr[1] is arr[2] else arr[1]
    i = 1
    while i < len(arr):
        if not(arr[i] is arr[0]):
            return arr[i]
        i+=1