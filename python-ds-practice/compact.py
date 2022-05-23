def compact(lst):
    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """
    # Way 1: Failed
    # for item in lst:
    # 	print(item)
    # 	print(bool(item) == False)
    # 	if bool(item) == False:
    #     	lst.remove(item)
    #     	print(lst)
    # return lst

    # Why the way above return [1, 2, [], (), 'All done']?
    # => each item after the item which is False and removed is skipped, because when each item is skipped, the order is changed and the for loop is confused

    true_list = []

    for item in lst:
        if item:
            true_list.append(item)
    
    return true_list

    # another way: return [item for item in lst if item]