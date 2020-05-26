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
                          {q:'When did Hitler become the Chancellor of Germany?', options:['','30th January 1933','',''],answer:2},
						  {q:'When did Germany and Italy form the Rome-Berlin Axis treaty?', options:['','','','25th October 1936'],answer:4},
						  {q:'When did Germany and Japan sign the Anti-Comintern Pact?', options:['25th November 1936','','',''],answer:1},
					      {q:'When did Japan invades China?', options:['','','','7th July 1937'],answer:4},
						  {q:'When did Hitler annexes the country of Austria into Germany?', options:['12th March 1938','','',''],answer:1},
						  {q:'When did Germany invades Poland, World War II begins?', options:['','1st September 1939','',''],answer:2},
					      {q:'When did France and Britain declare war on Germany?', options:['','3rd September 1939','',''],answer:2},
						  {q:'When did Germany invade and takes control of Denmark and Norway?', options:['','','April 9th to June 9th 1940',''],answer:3},
						  {q:'When did Germany use blitzkrieg to take over the Netherlands, Belgium, and northern France?', options:['','','','10th of May to 22nd of June 1940'],answer:4},
					      {q:'When did Winston Churchill become the Prime Minister of England?', options:['','','',''],answer:2},
						  {q:'When did Italy enter the war as a member of the Axis?', options:['','','',''],answer:2},
						  {q:'When did the Battle of Britain begin?', options:['','','',''],answer:2},
					      {q:'When did Germany, Italy, and Japan sign the Tripartite Pact creating the Axis Alliance?', options:['','','',''],answer:2},
						  {q:'When did Germany and the Axis Powers attack Russia?', options:['','','',''],answer:2},
						  {q:'When did the Japanese attack the US Navy in Pearl Harbor?', options:['','','',''],answer:2},
						  {q:'When did the US enter the war?', options:['','','',''],answer:2},
					      {q:'When did the US Navy defeat the Japanese navy at the Battle of Midway?', options:['','','',''],answer:2},
						  {q:'When did the Allies invade and take the island of Sicily?', options:['','','',''],answer:2},
						  {q:'When did Italy surrenders to the Allies?', options:['','','',''],answer:2},
					      {q:'When did D-day begin?', options:['','','',''],answer:2},
						  {q:'When did Paris get liberated from German control?', options:['','','',''],answer:2},
						  {q:'When did the Germans launch a large attack in the Battle of the Bulge?', options:['','','',''],answer:2},
					      {q:'When did US Marines invade the island of Iwo Jima?', options:['','','',''],answer:2},
						  {q:'When did US President Franklin Roosevelt die. He is succeeded by President Harry Truman?', options:['','','',''],answer:2},
						  {q:'When did the US Third Army under General Patton cross the Rhine River?', options:['','','',''],answer:2},
					      {q:'When did Adolf Hitler commit suicide as he knows Germany has lost the war?', options:['','','',''],answer:2},
						  {q:'When did Germany surrenders to the Allies. ?', options:['','','',''],answer:2},
					      {q:'When did the United States drops the Atomic Bomb on Hiroshima, Japan?', options:['','','',''],answer:2},
						  {q:'When did another atomic bomb is dropped on Nagasaki, Japan?', options:['','','',''],answer:2},
						  {q:'When did Japan surrender?', options:['','','',''],answer:2},
						  
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