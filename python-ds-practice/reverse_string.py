def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    reverse_word = ""
    idx = -1
    for char in phrase:
        reverse_word += phrase[idx]
        idx -= 1
    
    return reverse_word
