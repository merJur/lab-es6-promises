// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/* getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    getInstruction(
                      "mashedPotatoes",
                      5,
                      (step6) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step6}</li>`;
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 8);
  })
  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction("steak", 9);
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const result = await obtainInstruction("broccoli", 0);
    const print = (document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${result}</li>`);
    const result1 = await obtainInstruction("broccoli", 1);
    const print1 = (document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${result1}</li>`);
    const result2 = await obtainInstruction("broccoli", 2);
    const print2 = (document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${result2}</li>`);
    const result3 = await obtainInstruction("broccoli", 3);
    const print3 = (document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${result3}</li>`);
    const result4 = await obtainInstruction("broccoli", 4);
    const print4 = (document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${result4}</li>`);
    const result5 = await obtainInstruction("broccoli", 5);
    const print5 = (document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${result5}</li>`);
    const result6 = await obtainInstruction("broccoli", 6);
    const print6 = (document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${result6}</li>`);
    const result7 = await obtainInstruction("broccoli", 7);
    const print7 = (document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${result7}</li>`);
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}
makeBroccoli();

// Bonus 2 - Promise all

//SIN PROMISE ALL FUNCIONA.
/*async function makeBrusselsSprouts() {
  try {
    const result = await obtainInstruction("brusselsSprouts", 0)
    const print = document.querySelector("#brusselsSprouts").innerHTML += `<li>${result}</li>`;
    const result1 = await obtainInstruction("brusselsSprouts", 1)
    const print1 = document.querySelector("#brusselsSprouts").innerHTML += `<li>${result1}</li>`;
    const result2 = await obtainInstruction("brusselsSprouts", 2)
    const print2 = document.querySelector("#brusselsSprouts").innerHTML += `<li>${result2}</li>`;
    const result3 = await obtainInstruction("brusselsSprouts", 3)
    const print3 = document.querySelector("#brusselsSprouts").innerHTML += `<li>${result3}</li>`;
    const result4 = await obtainInstruction("brusselsSprouts", 4)
    const print4 = document.querySelector("#brusselsSprouts").innerHTML += `<li>${result4}</li>`;
    const result5 = await obtainInstruction("brusselsSprouts", 5)
    const print5 = document.querySelector("#brusselsSprouts").innerHTML += `<li>${result5}</li>`;
    const result6 = await obtainInstruction("brusselsSprouts", 6)
    const print6 = document.querySelector("#brusselsSprouts").innerHTML += `<li>${result6}</li>`;
    const result7 = await obtainInstruction("brusselsSprouts", 7)
    const print7 = document.querySelector("#brusselsSprouts").innerHTML += `<li>${result7}</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
   } catch (error) {
    console.error(error)}}
    makeBrusselsSprouts() */

//PROMISE.ALL BONUS2
//Promise.all(arrayOfPromises).then(function(arrayOfResults) {})

Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
  obtainInstruction("brusselsSprouts", 8),
])
  //.then ((patata) => console.log(patata));
  //.then ((values) => { return   document.querySelector("#brusselsSprouts").innerHTML += `<li>${values [0]}</li>`} )
  .then((values) => {values.forEach((el) => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${el}</li>`})})
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
