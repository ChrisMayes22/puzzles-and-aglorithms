def move_zeros(array):
    filtered = list(filter(lambda x: x != 0 or x is False, array))
    return(filtered + ([0] * (len(array) - len(filtered))))  

move_zeros([False,1,0,1,2,0,1,3,"a"]) # returns[false,1,1,2,1,3,"a",0,0]