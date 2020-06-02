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
                          {q:'Which of these can NOT be crafted into armor?', options:['Iron','Leather','Diamond','Wood'],answer:4},


                          {q:'How do you make a large chest?',options:['Place two chests next to each other','Place one chest on top of another','Craft it by placing two chests next to each other in your workbench','Use twice as much wood in the workbench'],answer:1},


                          {q:'Which of these can be used as fuel for your furnace?',options:['All of these','Charcoal','Bucket of Lava','Coal'],answer:1},


                          {q:'Which tool must you use to mine stone and ores?',options:['Pickaxe','Hoe','Shovel','Axe'],answer:1},


                          {q:'Which two blocks are affected by gravity?',options:['Sand and Dirt','Sand and Gravel','Dirt and Gravel','Gravel and Wood'],answer:2},


                          {q:'What must you use to collect water and lava?', options:['Cup','Bowl','Bucket','cauldron'],answer:3},


                          {q:'What block or blocks are formed when water meets lava (in any circumstance)?',options:['Dirt and Obsidian','Just Obsidian','Cobblestone and Dirt','Obsidian, Cobblestone and Stone'],answer:4},


                          {q:'How many blocks of iron ore does it take to make one iron ingot?',options:['One','Eight','Four','Two'],answer:1},


                          {q:'Which of these is the name of an alternate world to which you can travel?',options:['The Nether','Hell','The Void','The Under'],answer:1},


                          {q:'Skeletons drop bones, and pigs drop pork chops. What do zombies drop?',options:['Brains','Rotten Flesh','Nothing','Bones'],answer:2}

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