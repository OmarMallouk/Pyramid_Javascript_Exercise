def stars(n):

    for i in range(1, n+1):
        num = 1
        for j in range(i+1):
            print(num, end=" ")
            num +=2
            
        print()




stars(5)