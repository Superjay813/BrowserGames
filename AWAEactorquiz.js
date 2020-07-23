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
                          {q:'Who plays Anne Cuthbert?', options:['Amybeth McDonald','Amybeth McNultie','Amybeth McNully','Amybeth McNulty'],answer:4},


                          {q:'Who plays Gilbert Blythe?',options:['Lucas Jade Zuma','Lucas Jade Zumann','Lucas Jade Zuman','Lucas Jade Zunann'],answer:2},


                          {q:'Who plays Diana Barry?',options:['Diana Bela','Dalla Bela','Dalila Bella','Dalila Bela'],answer:4},


                          {q:'Who plays Matthew Cuthbert?',options:['Robert Homes Thomson','Robert Holmes Thomas','Robert Holmes Thomson','Robert Holms Thomas'],answer:3},


                          {q:'Who plays Marilla Cuthbert?',options:['Geraldine James','Geralldine James','Gerraldine James','Gerralldine James'],answer:1},


                          {q:'Who plays Rachel Lynde?',options:['Corrone Koslo','Corine Koslo','Corrine Koso','Corrine Koslo'],answer:4},


                          {q:'Who plays Jerry Baynard?',options:['Ayymeric Montaz','Aymeric Muntaz','Aymeric Montaz','Aymeric Montas'],answer:3},


                          {q:'Who plays Sebastian "Bash"?',options:['Dalmar Abuzeid','Dallmar Abuzeid','Dalmar Abbuzeid','Dalmarr Abuzeid'],answer:1},


                          {q:'Who plays Cole Mackenzie?',options:['Corry Anndrew','Cory Andrew','Corry Andrew','Cory Anddrew'],answer:2},


                          {q:'Who plays Miss Stacy?',options:['Joanna Douglas','Josephine Dougllas','Josephine Dougglas','Josephine Doouglas'],answer:1},


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
                        quizBox.innerHTML="Welldone You Have Completed this Quiz!"      
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
                         	ele.innerHTML="Inorrect";
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