def print_upper_words (words):
    """
    Given a list of words, print out each word 
    on a separate line in all uppercase

    For example:
    print_upper_words(["Apple", "banana", "kiwi", "Orange"])
    APPLE
    BANANA
    KIWI
    ORANGE

    """
    for word in words:
        word = word.upper()
        print(word)

print("Starting On Your Own 1 & 2: ")
print_upper_words(["Apple", "banana", "kiwi", "Orange"])


def print_upper_words2 (words, must_start_with="e"):
    """
    Given a list of words, print out each word 
    on a separate line in all uppercase and starts with the letter E or e
    
    For example:
    print_upper_words(["Anna", "john", "elsa", "Eric"])
    ELSA
    ERIC
    """
    for word in words:
        word = word.lower()
        if word[0] == must_start_with:
            word = word.upper()
            print(word)

print("Starting On Your Own 3: ")
print_upper_words2(["Anna", "john", "elsa", "Eric"])


def print_upper_words3 (words, must_start_with):
    """
    Given a list of words, print out each word 
    on a separate line in all uppercase, and starts with one of given

    For example:
    print_upper_words3(["happy", "Birthday", "to", "You"], must_start_with=["b", "Y"])
    BIRTHDAY
    YOU
    """
    for word in words:
        word = word.lower()
        for letter in must_start_with:
            letter = letter.lower()
            if word.startswith(letter):
                word = word.upper()
                print(word)

print("Starting On Your Own 4: ")
print_upper_words3(["happy", "Birthday", "to", "You"], must_start_with=["b", "Y"])