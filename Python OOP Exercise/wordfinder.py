
import random

class WordFinder:
    '''
    Word Finder: finds random words from a dictionary.

    >>> wf = WordFinder("simple.txt")
    3 words read

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True
    '''

    def __init__(self, file_path):
        '''Print number of words read in dictionary'''
        file = open(file_path)
        self.word = self.parse(file)
        print(f"{len(self.word)} words read")
    
    def __repr__(self):
        return f"<WordFinder random word = {self.word}>"

    def parse(self, file):
        '''Parse file from dictionary to list of words'''
        return [word.strip() for word in file]

    def random(self):
        '''return random word'''
        return random.choice(self.word) # need import random
 
class SpecialWordFinder(WordFinder):
    '''Use WordFinder and excludes blank lines/comments.

    >>> swf = SpecialWordFinder("complex.txt")
    3 words read

    >>> swf.random() in ["pear", "carrot", "kale"]
    True
    '''

    def parse(self, file):
        '''Parse file from dictionary to list of words but skip blank lines/comments'''
        return [word.strip() for word in file if word.strip() and not word.startswith("#")]