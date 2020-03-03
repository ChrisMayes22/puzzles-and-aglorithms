def goodVsEvil(good, evil):
    good_enum = list(enumerate(good.split(' ')))
    evil_enum = list(enumerate(evil.split(' ')))
    good_values = [1, 2, 3, 3, 4, 10]
    evil_values = [1, 2, 2, 2, 3, 5, 10]
    good_sum = 0
    evil_sum = 0
    for el in good_enum:
        good_sum += int(el[1])*good_values[el[0]]
    for el in evil_enum:
        evil_sum += int(el[1])*evil_values[el[0]]
    if good_sum > evil_sum:
        return "Battle Result: Good triumphs over Evil"
    if evil_sum > good_sum:
        return "Battle Result: Evil eradicates all trace of Good"
    return "Battle Result: No victor on this battle field"

