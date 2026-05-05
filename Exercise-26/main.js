// synchronous
studentData = () => {
  alert(`Fetching Student Data`);
  return { name: `Mohamed`, age: 21, id: 1 };
};

console.log(`Starting fetching student data`);

const student = studentData();

console.log(`StudentData:`, student);

console.log(`This message will appear after I print the student data`);

// Asynchorous

console.log(`immediate fetch`);

studentData = (callback) => {
  setTimeout(() => {
    const student = { name: `Mohamed`, age: 21, id: 1 };
    callback(student);
  }, 2000);
};

console.log(`Starting fetching student data`);

studentData((student)=> {
  console.log(`Student Data:`,student);
});

console.log(`I'm not waiting for another code`);
