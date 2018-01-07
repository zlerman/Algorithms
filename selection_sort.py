import sys

class SelectionSort:
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
			# for every remaining element till end, check if smaller than border
			for j in range(i+1,list_length,1):
				# if remaining element is less than border, swap
				if (self.list_to_sort[j] < index):
					temp = index
					index = self.list_to_sort[j]
					self.list_to_sort[j] = temp
			print("Found new smallest" + str(index))
			self.sorted_list.append(index)
			print(self.sorted_list)

list_to_sort = []

print("Please enter a list")
list_to_sort = [int(elem) for elem in sys.stdin.readline().split()]
print("Print list to sort")
new_sort = SelectionSort(list_to_sort)
new_sort.sort()
