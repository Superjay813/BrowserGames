   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'What event triggered the start of World War II?', options:['Hitler came into power', 'Germany annexed Austria', 'Japan attacked Pearl Harbor','Germany attacked Poland'],answer:4},

                          {q:'What year did World War II begin??', options:['1933','1935','1939','1941'],answer:3},

                          {q:'What was the name of the air attack of Germany on Great Britain?', options:['Battle of Britain','D-Day','Battle of the Bulge','Battle of London'],answer:1},

                          {q:'What is another name for Operation Overlord or the amphibious landing in Normandy France?', options:['Battle of Normandy','D-Day','Battle of France','Battle of Britain'],answer:2},

                          {q:'When was Operation Overlord?', options:['12th October 1940','7th December 1941','7th May 1945','6th June 1944'],answer:4},

                          {q:'Why did the United States enter the war?', options:['When Germany invaded France','When Germany invaded Poland','When Japan attacked Pearl Harbor','When Britain and France declared war on Germany'],answer:3},

                          {q:'?', options:['','','',''],answer:},

                          {q:'?', options:['','','',''],answer:},

                          {q:'?', options:['','','',''],answer:},

                          {q:'?', options:['','','',''],answer:},

                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Welldone You Have Completed this Quiz! Click Below for more or to get back to home."      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.score+"/"+this.questions.length;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 