export class Student{
    constructor(
        private firstName: string,
        private lastName: string,
        private address: string,
        private gpa: number,
        private className: string,
    ){}

    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getAddress(){
        return this.address;
    }
    getGpa(){
        return this.gpa;
    }
    getClassName(){
        return this.className;
    }

    setFirstName(fName: string){
        this.firstName=fName;
    }
    setLastName(lName: string){
        this.lastName=lName;
    }
    setAddress(addr: string){
        this.address=addr;
    }
    setGpa(gpa: number){
        this.gpa=gpa;
    }
    setClassName(cName: string){
        this.className=cName;
    }

}