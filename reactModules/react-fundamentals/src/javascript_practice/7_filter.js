const instructors = [
    {name: "dave", speciality: "1", medals: 5},
    {name: "dean", speciality: "2", medals: 4},
    {name: "yvette", speciality: "3", medals: 9},
    {name: "kirt", speciality: "4", medals: 2},
    {name: "sam", speciality: "5", medals: 2}
]
 let instructorMedals = instructors.filter(person => person.medals <=4);
 console.log(instructorMedals);