def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """

    phrase = phrase.lower()
    vowels = "aeiou"
    vowel_dict = {}

    for char in phrase:
        if char in vowel_dict:
            vowel_dict[char] += 1
        else:
            if char in vowels:
                vowel_dict[char] = 1
    
    return vowel_dict