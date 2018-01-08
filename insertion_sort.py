import sys
import timeit
class InsertionSort:
	def __init__(self, list_to_sort=[]):
		'''Instantiate list'''
		self.list_to_sort = list_to_sort
		self.sorted_list = []
	def sort(self):
		list_length = len(self.list_to_sort)
		print("Starting selection sort")
		# for every element from 0 to end of list, step by 1
		for i in range(0,list_length,1):
			# set the border of sorted partition to elem
			index = self.list_to_sort[i]
			# check that for every element behind partition wall, if greater than partition, swap
			for j in range(i,0,-1):
				# if remaining element is less than partition, swap
				if (self.list_to_sort[j] < self.list_to_sort[j-1]):
					temp = self.list_to_sort[j-1]
					self.list_to_sort[j-1] = self.list_to_sort[j]
					self.list_to_sort[j] = temp
		print(self.list_to_sort)

list_to_sort = []

if len(sys.argv) > 1:
	with open(sys.argv[1], 'r') as i:
		list_to_sort = [int(elem) for elem in i.readline().split()]
else:
	print("Please enter a list")
	list_to_sort = [int(elem) for elem in sys.stdin.readline().split()]

print("Print list to sort")
new_sort = InsertionSort(list_to_sort)
timeit.Timer(new_sort.sort).timeit()
