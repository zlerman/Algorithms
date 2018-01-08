class Node {
	constructor(value) {
		this.value = value;
	}
}

class PQ {
	constructor(pq, capacity) {
		this.pq = pq;
		this.capacity = capacity;
	}
	isEmpty() {
		return this.capacity === 0;
	}
	printQueue() {
		console.log("Printing queue");
		for (var i = 0; i < this.capacity; i++) {
			console.log("Position  "  + i + " : ");
			console.log(this.pq[i]);
		}
	}
	insert(k) {
		console.log("Adding node");
		if (k === undefined) {
			console.log("K is null"); return;
		}
		if (this.isEmpty()) {
			this.pq[this.capacity++] = k; return;
		}
		if (this.less(this.pq[this.capacity], k)) {
			this.pq[this.capacity++] = k;
			this.swim(this.capacity);
		} else {
			console.log("Appending node");
			this.pq[this.capacity++] = k;
		}	
		this.printQueue();
	}
	delMax() {

	}
	swim(k) {
		console.log("Swimming : ");
		console.log(this.pq[k]);
		console.log("This capacity is " + this.capacity);
		while ((k > 1) && (this.less(this.pq[k/2], this.pq[k]))) {
			this.exchange(k, k/2);
			k = k/2;
		}
	}
	sink(k) {

	}
	less(i, j) {
		//console.log("Comparing " + i.value  + " < " + j.value);
		if (i === undefined) return false;
		return i.value < j.value;
	}
	exchange(i, j) {
		console.log("Swapping : " + i + " and " + j);
		var temp = this.pq[i];
		this.pq[i] = j;
		this.pq[j] = temp;
	}

}


var newPQ = new PQ([],0);
newPQ.printQueue();
newPQ.insert(new Node(1));
newPQ.insert(new Node(10));
newPQ.insert(new Node(7));
