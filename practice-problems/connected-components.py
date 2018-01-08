import fileinput
import sys

class ConnectedComponent:
	def __init__(self, nodeOne, nodeTwo):
		self.firstNode = nodeOne
		self.secondNode = nodeTwo

print("Please enter number of tuples")
numberOfInput = sys.stdin.readline()
componentList = []
print("Reading " + numberOfInput + " tuples")
for line in fileinput.input():
	componentList.append(line)
	print(componentList)
