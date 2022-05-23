def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    return freq_count(str(num1)) == freq_count(str(num2)) # Why str() each num?
    

def freq_count(digits):
    """Count digits frequencies"""

    count = {}
    for digit in digits:
        count[digit] = count.get(digit, 0) + 1
    
    return count