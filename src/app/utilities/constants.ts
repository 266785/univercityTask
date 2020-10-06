import {UniversityClass} from "../common/models/university-class.model";
import {Student} from "../common/models/student";

export class AppConstants {

  public static CLASSES_MOCK_DATA = [
    new UniversityClass("Class 0", "??", "??", [
      new Student("Vivamus","Quisque","Sed hendrerit enim",30,"Class 0"),
      new Student("Fusce","Curabitur","Vestibulum molestie lacus ac",21,"Class 0"),
      new Student("Praesent","Aenean","Ut iaculis ipsum sit amet nisl",17,"Class 0"),
    ]),
    new UniversityClass("Class 1", "??", "??", [
      new Student("Lorem","Phasellus","Morbi id justo dictum",25,"Class 1"),
      new Student("Lorem","Phasellus","Morbi id justo dictum",25,"Class 1"),
      new Student("Vivamus","Quisque","Sed hendrerit enim",30,"Class 1"),
      new Student("Fusce","Curabitur","Vestibulum molestie lacus ac",21,"Class 1"),
      new Student("Lorem","Phasellus","Morbi id justo ddictum",25,"Class 1"),
      new Student("Fusce","Curabitur","Vestibulum molestie lacus ac",21,"Class 1"),
    ]),
    new UniversityClass("Class 2", "??", "??", [
      new Student("Praesent","Aenean","Ut iaculis ipsum sit amet nisl",17,"Class 2"),
      new Student("Praesent","Aenean","Ut iaculis ipsum sit amet nisl",17,"Class 2"),
      new Student("Lorem","Phasellus","Morbi id justo dictum",25,"Class 2"),
      new Student("Vivamus","Quisque","Sed hendrerit enim",30,"Class 2"),
      new Student("Fusce","Curabitur","Vestibulum molestie lacus ac",21,"Class 2"),
    ]),
    new UniversityClass("Class 3", "??", "??", [
      new Student("Lorem","Phasellus","Morbi id justo dictum",25,"Class 3"),
    ]),
    new UniversityClass("Class 4", "??", "??", [
      new Student("Vivamus","Quisque","Sed hendrerit enim",30,"Class 4"),
      new Student("Praesent","Aenean","Ut iaculis ipsum sit amet nisl",17,"Class 4"),
    ]),
  ];

}
