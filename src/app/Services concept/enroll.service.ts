
export class EnrollCourse {

   tutor:string = 'sai'
    courses:any[] = [
        {'id': '1', 'name' : 'javascript'},
        {'id': '2', 'name' : 'typescript'},
        {'id': '3', 'name' : 'angular'}
      ];
    enrollMessage(name:string){
        alert(`Thanks for registering to the ${name} course..`);
    }
}