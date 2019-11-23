def goodVsEvil(good, evil):
    goodEnum = list(enumerate(good.split(' ')))
    evilEnum = list(enumerate(evil.split(' ')))
    goodValues = [1, 2, 3, 3, 4, 10]
    evilValues = [1, 2, 2, 2, 3, 5, 10]
    goodSum = 0
    evilSum = 0
    for el in goodEnum:
        goodSum += int(el[1])*goodValues[el[0]]
    for el in evilEnum:
        evilSum += int(el[1])*evilValues[el[0]]
    return  "Battle Result: Good triumphs over Evil" if goodSum > evilSum else "Battle Result: Evil eradicates all trace of Good" if evilSum > goodSum else "Battle Result: No victor on this battle field"