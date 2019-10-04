// function first(){
//     setTimeout(() => {
//         console.log(1);
//     },5000)
//   }
//   function second(){
//     console.log(2);
//   }
//   first();
//   second()
// function doHomework(subject) {
//     alert(`Starting my ${subject} homework.`);
//   }

//   var math = "1234";
//   doHomework(math);
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }
  
  doHomework('math', function() {
    alert('Finished my homework');
  });