from random import *
f = open("random_input.txt","w+")
for i in range (10000):
	f.write(str(randint(0,50000)))
	f.write(" ")
