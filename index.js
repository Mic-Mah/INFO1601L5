//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverateGrade(student, course){
  let grades;
  let count = 0;

  for(let i = 0; i < student.transcript.length; i++){
    if(student.transcript[i].course === course){
      grades += student.transcript[i].grades;
      count++;
    }
  }
  if(count === 0){
    return -1;
  }else{
    return grades / count;
  }
}

function getAssignmentMark(student, course, num){
  let mark = 0;

  for(let i = 0; i < student.transcript.length; i++){
    if(student.transcript[i].course === course){
      mark = student.transcript[i].grades[num];
    }
  }
  if(mark === 0){
    return -1;
  }else{
    return mark;
  }
}

function averageAssessment(students, courseName, assignment){
  let total = 0;
  let count = 0;

  for(let i = 0; i < students.length; i++){
    for(let j = 0; j < students[i].transcript.length; j++){
      if(students[i].transcript[j].course === courseName){
        total += students[i].transcript[j].course.grades[assignment];
        count++;
      }
    }
  }
  return total / count;
}