const correctAnswers = ['B','B','B','B'];
const total = correctAnswers.length
const form = document.querySelector('form');
const result = document.querySelector('.result');
form.addEventListener('submit',e=>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    // check answers
    userAnswers.forEach((user, index)=>{
        if(user === correctAnswers[index]){
            score += 25
        }
    });

    //display result
        // scrolling to the top to display the result(Window Object)
        scrollTo(0,0);
    result.classList.remove('d-none');
    
    // animating the Score
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        output ++;
    },8);
});