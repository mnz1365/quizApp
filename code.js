//data
var quizObj = [
    {question: 'What is the capital city of Australia?',
        answer: 'sydney',
        choice: ['perth', 'sydney', 'melbourne', 'canberra']
    },
    {question: 'Which city is the capital of Canada?',
        answer: 'ottawa',
        choice: ['vancouver', 'toronto', 'montreal', 'ottawa']
    },
    {question: 'Which city is the capital of Japan?',
        answer: 'tokyo',
        choice: ['tokyo', 'hiroshima', 'kyoto', 'osaka']      
    },
    {question: 'Which city is the capital of France?',
        answer: 'paris',
        choice: ['lyon', 'paris', 'marseille', 'nice']  
    },
    {question: 'Which city is the capital of Germany?',
        answer: 'berlin',
        choice: ['berlin', 'frankfurt', 'melbourne', 'hamburg']      
    },

]
//count questions
var count = 0;
//count correct answer
var correct = 0;




    

function myNext() {
   
    //knowing which checkbox checked
    if(count > 0) {
            
        //search throw all checkboxes for checked item
        for(i=0;i<document.getElementById('main').children.length;i++) {
            if(document.getElementById('main').children[i].tagName == 'INPUT') {
                if(document.getElementById('main').children[i].checked == true) {
                                if(count == 1 && document.getElementById('main').children[i].id == 'choice1'){
                                    correct = correct + 1;
                                }
                                if(count == 2 && document.getElementById('main').children[i].id == 'choice3'){
                                    correct = correct + 1;
                                }
                                if(count == 3 && document.getElementById('main').children[i].id == 'choice0'){
                                    correct = correct + 1;
                                }
                                if(count == 4 && document.getElementById('main').children[i].id == 'choice1'){
                                    correct = correct + 1;
                                }
                                if(count == 5 && document.getElementById('main').children[i].id == 'choice0'){
                                    correct = correct + 1;
                                }
                }
            }
        }
    }

   //remove previous label and checkbox
    if(count < quizObj.length) {
        

        if(count > 0) {
            for(i=0;i<4;i++) {
                document.getElementById('main').removeChild(document.getElementById('main').lastChild);
                document.getElementById('main').removeChild(document.getElementById('main').lastChild);
            }
           
        }
       

        document.getElementById(`question`).innerHTML = quizObj[count].question;
        //add multi choices
        for(j=0;j<4;j++) {
       
            var MyChoice = document.createElement('input');
            MyChoice.type = 'checkbox';
            MyChoice.id = `choice${j}`;
            document.getElementById('main').appendChild(MyChoice);
    
            var myLabel = document.createElement('label');
            myLabel.id = `choice${j}Text`;
            myLabel.innerHTML =  quizObj[count].choice[j];
            document.getElementById('main').appendChild(myLabel);
    
    
            
        }
       


    }
    //count questions
    count = count + 1;

    
//result
if(count == 6) {
    document.getElementById('myH3').innerHTML = `you have ${correct} correct answer of ${quizObj.length} !`
}
}

//know the checkbox clicked
//eleminate two checkbox checked simultaneously
document.addEventListener('click', function(e) {
    if(e.target.id != "myButton") {
       for(i=0;i<4;i++) {
          if(e.target.id != `choice${i}`) {
             if(i == 0) {
                document.getElementById('choice0').checked = false;
             }
             if(i == 1) {
                document.getElementById('choice1').checked = false;
             }
             if(i == 2) {
                document.getElementById('choice2').checked = false;
             }
             if(i == 3) {
                document.getElementById('choice3').checked = false;
             }
          }
       }
    
    }
   

})

//first question propt
myNext()
