import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { /*TodoList, */Item/*, Day, TimeBlock*/ } from '../interfaces.model'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})

export class TodoListComponent implements OnInit {
	ngOnInit(): void {
  };

  constructor(public datepipe: DatePipe) { };

  currentItem1 = new Item(1, "Learn Angular", "Learn Something", 3, 30, false);
  currentItem2 = new Item(2, "Learn Dynamo", "Learn Something Else", 3, 30, false);
  currentItems1 = [this.currentItem1, this.currentItem2];

	// currentItems1: Item[] = [{
	// 	id: 1,
	// 	index: 1,
	// 	name: "Learn Angular",
	// 	description: "Learn something",
	// 	priority: 3,
	// 	// dueDate: Date.now(),
	// 	// scheduledTime: Date.now(),
	// 	minutesDuration: 30,
	// 	scheduled: false
	// },
	// {
	// 	id: 2,
	// 	index: 3,
	// 	name: "Learn DynamoDB",
	// 	description: "Learn something else",
	// 	priority: 3,
	// 	// dueDate: Date.now(),
	// 	// scheduledTime: Date.now(),
	// 	minutesDuration: 30,
	// 	scheduled: false
	// }];

	// currentItems2: Item[] = [{
	// 	id: 3,
	// 	index: 1,
	// 	name: "Write Midyears",
	// 	description: "See above",
	// 	priority: 3,
	// 	// dueDate: Date.now(),
	// 	// scheduledTime: Date.now(),
	// 	minutesDuration: 30,
	// 	scheduled: false
	// },
	// {
	// 	id: 4,
	// 	index: 3,
	// 	name: "Prep for Calibration",
	// 	description: "See above",
	// 	priority: 3,
	// 	// dueDate: Date.now(),
	// 	// scheduledTime: Date.now(),
	// 	minutesDuration: 30,
	// 	scheduled: false
	// }];

	// let scheduledItems: Item[] = [{
	// 	id: 5,
	// 	index: 1,
	// 	name: "Gotta get this done",
	// 	description: "Yup",
	// 	priority: 3,
	// 	minutesDuration: 30,
	// 	scheduled: true
	// }];

	// let todoLists: TodoList[] = [{
	// 	id: 1,
	// 	name: "Dev Tasks",
	// 	items: this.currentItems1
	// },
	// {
	// 	id: 2,
	// 	name: "Manager Tasks",
	// 	items: this.currentItems2
	// }];

	// let currentDay: Day = {
	// 	id: 1,
	// 	startTime: new Date('2020-06-21T08:00:00'),
	// 	endTime: new Date('2020-06-21T18:00:00'),
	// 	incrementMinutes: 15,
	// 	items: this.scheduledItems
	// };

	// let displayTimes: TimeBlock[];
	// let i: Date = this.currentDay.startTime;
	// while (this.i <= this.currentDay.endTime) {
	// 	let displayTime: TimeBlock = {
	// 		actualTime: this.i,
	// 		displayTime: this.datepipe.transform(i, 'shortTime')
	// 	};
	// 	this.displayTimes.push(this.displayTime);
	// 	this.i.setMinutes(this.i.getMinutes() + this.currentDay.incrementMinutes);
	// };
}
