interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any,
};

interface Directors extends Teacher {
  numberOfReports: number;
};

const printTeacher = (firstName: string, lastName:string) => {
  console.log(`${firstName.slice(0, 1)}. ${lastName}`);
}
