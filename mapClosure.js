// create the code to go from studentGrades array, 
// to studentFeedback (as shown in comments below)

const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];
  
  const messages = {
    a: "Excellent Job",
    b: "Nice Job",
    c: "Well done",
    d: "What happened",
    f: "Not good"
  }
  
  function getGrade (grade) {
    if (grade >= 90) return 'a';
    else if (grade >= 80) return 'b';
    else if (grade >= 70) return 'c';
    else if (grade >= 60) return 'd';
    else return 'f';
  }
  
  function giveFeedback (gradeMessage) {
    return function (studentObj) {
      const grade = getGrade(studentObj.grade)
      const message = gradeMessage[grade]
      return `${message} ${studentObj.name}, you got an ${grade}`
    }
  }
  
  const feedbackForAll = studentGrades.map(giveFeedback(messages))
  
  console.log(feedbackForAll)
  
  
  /*
  const studentFeedback = [
    'Nice Job Joe, you got an b',
    'Excellent Job Jen, you got an a',
    'Well done Steph, you got an c',
    'What happened Allen, you got an d',
    'Not good Gina, you got an f',
  ]; 
  */