let min;
let max;
let sum;
let sumEvenElement

function getArrayParams(...arr) {
	sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	min = Math.min(...arr);
	max = Math.max(...arr);
	let avg = +(sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	sum = 0;
	for (i = 0; i < arr.length; i += 1) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	min = 0;
	max = 0;
	let diffMaxMin = 0;
	if (arr.length === 0) {
		return diffMaxMin;
	} else {
		return diffMaxMin = Math.max(...arr) - Math.min(...arr);
	}
}


function differenceEvenOddWorker(...arr) {
	sumEvenElement = 0;
	let sumOddElement = 0;
	let diffEvenOdd;
	for (i of arr) {
		if (i % 2 === 0) {
			sumEvenElement += i;
		} else {
			sumOddElement += i;
		}
	}
	diffEvenOdd = sumEvenElement - sumOddElement;
	return diffEvenOdd;
}

function averageEvenElementsWorker(...arr) {
	sumEvenElement = 0;
	let countEvenElement = 0;
	let avgEvenElement;
	for (i of arr) {
		if (i % 2 === 0) {
			sumEvenElement += i;
			countEvenElement += 1;
		}
	}
	if (countEvenElement === 0) {
		return avgEvenElement = 0;
	} else {
		return avgEvenElement = sumEvenElement / countEvenElement;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result >= maxWorkerResult) {
			maxWorkerResult = result;
		}
	} 
	return maxWorkerResult;
}
