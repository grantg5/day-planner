export class Item {
	private id: number;
	private index: number;
	private name: string;
	private description: string;
	private priority: number;
	// dueDate: Date;
	// scheduledTime: Date;
	private minutesDuration: number;
	private scheduled: boolean;

	constructor(index: number, name: string, description: string, priority: number, minutesDuration: number, scheduled: boolean) {
		this.id = 1; //Note: De-hardcode this later
		this.index = index;
		this.name = name;
		this.description = description;
		this.priority = priority;
		this.minutesDuration = minutesDuration;
		this.scheduled = scheduled;
	}

	public getId() : number {
		return this.id
	}

	public getIndex() : number {
		return this.index
	}

	public setIndex(index: number) {
		this.index = index
	}

	public getName() : string {
		return this.name
	}

	public setName(name: string) {
		this.name = name
	}

	public getDescription() : string {
		return this.description
	}

	public setDescription(description: string) {
		this.description = description
	}

	public getMinutesDuration() : number {
		return this.minutesDuration
	}

	public setMinutesDuration(minutes: number) {
		this.minutesDuration = minutes
	}

	public getScheduled() : boolean {
		return this.scheduled
	}

	public setScheduled(isScheduled: boolean) {
		this.scheduled = isScheduled
	}
}

export class TodoList {
	private id: number;
	private name: string;
	private items: Item[];

	constructor (name: string) {
		this.id = 1;
		this.name = name;
		this.items = [];
	}

	public getName() : string {
		return this.name
	}

	public setName(name: string) {
		this.name = name
	}

	public getItems() : Item[] {
		return this.items
	}

	public addItem(item: Item) {
		this.items.push(item)
	}
}

export class Day {
	private id: number;
	private startTime: Date;
	private endTime: Date;
	private incrementMinutes: number;
	private items: Item[];

	constructor(startTime: Date, endTime: Date, incrementMinutes: number) {
		this.id = 1;
		this.startTime = startTime;
		this.endTime = endTime;
		this.incrementMinutes = incrementMinutes;
		this.items = [];
	}

	public getStartTime() : Date {
		return this.startTime
	}

	public setStartTime(startTime: Date) {
		this.startTime = startTime
	}

	public getEndTime() : Date {
		return this.endTime
	}

	public setEndTime(endtime: Date) {
		this.endTime = endTime
	}

	public getIncrementMinutes() : number {
		return this.incrementMinutes
	}

	public setIncrementMinutes(incrementMinutes: number) {
		this.incrementMinutes = incrementMinutes
	}

	public getItems() : Item[] {
		return this.items
	}

	public addItem(item: Item) {
		this.items.push(item)
	}
}

export class TimeBlock {
	private actualTime: Date;
	private displayTime: string;

	constructor(actualTime: Date, displayTime: string) {
		this.actualTime = actualTime;
		this.displayTime = displayTime;
	}

	public getActualTime() : Date {
		return this.actualTime
	}

	public setActualTime(actualTime: Date) {
		this.actualTime = actualTime
	}

	public getDisplayTime() : string {
		return this.displayTime
	}

	public setDisplayTime(displayTime: string) {
		this.displayTime = displayTime
	}
}