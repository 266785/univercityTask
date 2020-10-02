export class StClass{
    constructor(
        private className: string,
        private subjects: string,
        private department: string,
    ){}

    getClassName(){
        return this.className;
    }
    getSubjects(){
        return this.subjects;
    }
    getDepartment(){
        return this.className;
    }

    setClassName(cName: string){
        this.className=cName;
    }
    setSubjects(subj: string){
        this.subjects=subj;
    }
    setDepartment(depart: string){
        this.className=depart;
    }

}