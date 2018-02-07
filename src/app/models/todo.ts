export class Todo {
    privatedescription:string;
private priority: Number;
private completed: boolean;

constructor(private description: string, priority: Number = 1, completed: boolean = false) {
        this.description = description;
        this.completed = completed;
        this.priority = priority;
    }
}
