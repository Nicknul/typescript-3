type JobType = '학생' | '직장인';

interface JeongHoyeon {
  name: string;
  age: number;
  job: JobType;
}

class JeongHoyeon implements JeongHoyeon {
  name: string;
  age: number;
  job: JobType;

  constructor(name: string, age: number, job: JobType) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const JeongHoyeonArray: JeongHoyeon[] = [
  new JeongHoyeon('정호연', 27, '학생'),
  new JeongHoyeon('이연승', 30, '직장인'),
  new JeongHoyeon('겨울이', 4, '학생'),
];

const printJeongHoyeonArray = (array: JeongHoyeon[]): void => {
  array.forEach((person) => {
    console.log(`이름 : ${person.name}, 나이 : ${person.age}, 직업 : ${person.job}`);
  });
};

printJeongHoyeonArray(JeongHoyeonArray);
