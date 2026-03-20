function shuffle(arr){
return arr.sort(()=>0.5-Math.random());
}

let allQuestions={

prob:[
{q:"If you toss a fair coin only one time, what is the probability that the outcome will be heads?",a:["1/2","1/3","1/4","1"],c:0},
{q:"If you roll one fair six-sided die, what is the probability of getting a number 6?",a:["1/6","1/2","1/3","1"],c:0},
{q:"Which value represents a certain event in probability because it is guaranteed to happen?",a:["1","0","2","3"],c:0},
{q:"Which value represents an impossible event in probability because it cannot happen at all?",a:["0","1","2","3"],c:0},
{q:"What is the correct range of probability values for any event?",a:["0 to 1","1 to 10","0 to 10","-1 to 1"],c:0},
{q:"If an event has an equal chance of happening or not happening, what is its probability?",a:["0.25","0.5","1","2"],c:1},
{q:"In mathematics, what term is used to describe the chance that an event will happen?",a:["Probability","Mass","Time","Speed"],c:0},
{q:"Which word best describes an event whose outcome cannot be predicted exactly before it happens?",a:["Unpredictable","Fixed","Same","None"],c:0},
{q:"If the probability of an event is 0, what does that tell you about the event?",a:["It is impossible","It is certain","It is half likely","None"],c:0},
{q:"If the probability of an event is 1, what does that tell you about the event?",a:["It is certain","It is impossible","It is half likely","None"],c:0},
{q:"When we say a coin is fair, what does that mean about the outcomes heads and tails?",a:["They have equal chances","They are not equal","The coin is heavy","None"],c:0},
{q:"How many sides does a standard die have when used in basic probability experiments?",a:["6","5","4","3"],c:0},
{q:"When rolling one die, which set shows all the even numbers that may appear?",a:["2, 4, 6","1, 3, 5","All numbers","None"],c:0},
{q:"When rolling one die, which set shows all the odd numbers that may appear?",a:["1, 3, 5","2, 4, 6","All numbers","None"],c:0},
{q:"In probability, what do we call a result or happening that we are interested in observing?",a:["Outcome","Color","Shape","None"],c:0},
{q:"In an experiment, what word refers to the final result after the activity is performed?",a:["Result","Color","Mass","None"],c:0},
{q:"What do we call the complete list of all possible outcomes in a probability experiment?",a:["Sample space","One outcome","Half of outcomes","None"],c:0},
{q:"In probability, what do we call an activity like tossing a coin or rolling a die?",a:["Experiment","Food","Water","Air"],c:0},
{q:"Which interval correctly shows the possible values of any probability?",a:["0 to 1","0 to 10","1 to 100","None"],c:0},
{q:"Which symbol is commonly used in probability to represent the chance of an event?",a:["P","Q","R","S"],c:0}
],

group:[
{q:"In group theory, which property says that if you combine any two elements of the set, the answer is still in the set?",a:["Closure property","No property","None","All"],c:0},
{q:"In a mathematical group, what do we call the special element that leaves other elements unchanged when used in the operation?",a:["Identity element","None","All","Half"],c:0},
{q:"Which property says that every element in a group must have another element that cancels its effect under the operation?",a:["Inverse property","No property","None","All"],c:0},
{q:"Which property means that changing the grouping of elements does not change the answer of the operation?",a:["Associative property","No property","Half","None"],c:0},
{q:"In group theory, what do we call any object that belongs to the set being studied?",a:["Member or element","Color","Shape","None"],c:0},
{q:"What do we call the rule used to combine two elements in a group?",a:["Operation","Food","Time","None"],c:0},
{q:"What kind of operation takes exactly two inputs or two elements and combines them into one output?",a:["Binary operation","One input","Three inputs","None"],c:0},
{q:"What do we call a group in which the order of the elements does not affect the answer?",a:["Abelian group","Not a group","Half group","None"],c:0},
{q:"Which expression shows the commutative property in a group operation?",a:["a + b = b + a","a - b = b - a","None","All"],c:0},
{q:"Which term is another name for the identity element in some group theory discussions?",a:["Neutral element","Zero only","All","None"],c:0},
{q:"What do we call a smaller set inside a group that is itself also a group under the same operation?",a:["Subgroup","Whole group","None","All"],c:0},
{q:"What do we call a group that contains only a limited number of elements?",a:["Finite group","Infinite group","None","All"],c:0},
{q:"What do we call a group that contains an unlimited number of elements?",a:["Infinite group","Limited group","None","All"],c:0},
{q:"In group theory, what does the order of a group usually refer to?",a:["The size or number of elements","Color","Shape","None"],c:0},
{q:"Which of the following is a common example used in group theory discussions?",a:["Integers","Food","Color","None"],c:0},
{q:"What do mathematicians call a well-defined collection of objects or elements?",a:["Set","Food","Air","None"],c:0},
{q:"In algebra, what word describes the rule used to combine elements in a set?",a:["Operation","Food","Air","None"],c:0},
{q:"The closure rule tells us that after performing the operation, where must the answer remain?",a:["Inside the set","Outside the set","None","All"],c:0},
{q:"In simple words, what does an inverse element do to another element in a group?",a:["It undoes the element","It adds more value","It multiplies it","None"],c:0},
{q:"To be called a group, how many main properties must a set and operation satisfy?",a:["4 properties","1 property","2 properties","3 properties"],c:0}
],

pred:[
{q:"In predicate logic, what is the truth value of the statement P implies P?",a:["True","False","None","All"],c:0},
{q:"If a statement is true, what is the value of its negation or NOT statement?",a:["False","True","None","All"],c:0},
{q:"In logic, what does the connective AND mean when joining two statements?",a:["Both statements must be true","Only one must be true","None","All"],c:0},
{q:"In logic, what does the connective OR mean when joining two statements?",a:["At least one statement is true","None","Both are false","All"],c:0},
{q:"Which phrase correctly describes an implication statement in logic?",a:["If ... then ...","And","Or","None"],c:0},
{q:"In predicate logic, what do we call a sentence that contains a variable and becomes true or false when a value is given?",a:["Predicate or statement form","Number","Shape","None"],c:0},
{q:"Which of the following is an example of a variable commonly used in logic and mathematics?",a:["x and y","Color","Shape","None"],c:0},
{q:"What do we call the set of all possible values that a variable may take?",a:["Domain","Color","Shape","None"],c:0},
{q:"What do we call words or symbols such as all and some that describe how many elements satisfy a condition?",a:["Quantifiers","None","All","Half"],c:0},
{q:"What does the symbol ∀ mean in predicate logic?",a:["For all","For some","None","Half"],c:0},
{q:"What does the symbol ∃ mean in predicate logic?",a:["There exists","For all","None","Half"],c:0},
{q:"What do we call a sentence that can be classified as either true or false?",a:["Statement","None","All","Half"],c:0},
{q:"What do we call a statement formed by combining two or more simple statements?",a:["Compound statement","Single statement","None","All"],c:0},
{q:"What term refers to whether a statement is true or false?",a:["Truth value","Color","Shape","None"],c:0},
{q:"If a statement is false, what does that mean in logic?",a:["It is not true","It is true","None","All"],c:0},
{q:"Which word best describes a combination of symbols that represents a logical idea?",a:["Expression","Food","Air","None"],c:0},
{q:"In reasoning, what do we call the final statement reached after analyzing given premises?",a:["Conclusion","Start","None","All"],c:0},
{q:"What field of study focuses on correct reasoning and valid thinking patterns?",a:["Logic","Food","Air","None"],c:0},
{q:"In logical notation, what do we call letters or signs used to represent ideas or values?",a:["Symbols","Food","Air","None"],c:0},
{q:"What table is used in logic to show all possible truth values of a statement?",a:["Truth table","Food table","Air table","None"],c:0}
],

count:[
{q:"What is the value of 2 factorial, written as 2!, in counting theory?",a:["2","1","3","4"],c:0},
{q:"What is the value of 3 factorial, written as 3!, in counting theory?",a:["6","5","7","8"],c:0},
{q:"What is the value of 4 factorial, written as 4!, in counting theory?",a:["24","20","30","36"],c:0},
{q:"What is the value of 5 factorial, written as 5!, in counting theory?",a:["120","100","110","130"],c:0},
{q:"In counting theory, what does permutation mean when arranging objects?",a:["Order matters","Order does not matter","None","All"],c:0},
{q:"In counting theory, what does combination mean when selecting objects?",a:["Order does not matter","Order matters","None","All"],c:0},
{q:"What does the notation nPr represent in mathematics?",a:["Permutation","Combination","None","All"],c:0},
{q:"What does the notation nCr represent in mathematics?",a:["Combination","Permutation","None","All"],c:0},
{q:"What is the value of zero factorial, written as 0! ?",a:["1","0","None","All"],c:0},
{q:"What does factorial mean in mathematics?",a:["Multiplying a whole number by all positive integers below it","Adding numbers together","None","All"],c:0},
{q:"In counting problems, what does the word counting usually refer to?",a:["Finding the total number of possible outcomes","None","All","Half"],c:0},
{q:"When objects are placed in a specific order, what word is commonly used?",a:["Arrangement","None","All","Half"],c:0},
{q:"When you pick objects from a group, what action are you doing in counting theory?",a:["Selection","None","All","Half"],c:0},
{q:"In some counting problems, what does it mean when repetition is allowed?",a:["An object may be used again","None","All","Half"],c:0},
{q:"In some counting problems, what does it mean when repetition is not allowed?",a:["An object cannot be used again","None","All","Half"],c:0},
{q:"Which rule is used when one task is followed by another and the total outcomes must be multiplied?",a:["Multiplication rule","Addition rule","None","All"],c:0},
{q:"Which rule is used when one choice or another choice may happen and the total outcomes are added?",a:["Addition rule","Multiplication rule","None","All"],c:0},
{q:"In counting problems, what are the items being arranged or selected usually called?",a:["Objects","None","All","Half"],c:0},
{q:"In mathematics, what do we call an equation or expression used as a guide for solving a problem?",a:["Formula or rule","None","All","Half"],c:0},
{q:"What visual method is often used to show all possible outcomes in a counting problem?",a:["Tree diagram","None","All","Half"],c:0}
]

};

let current=[],index=0,score=0,done=0,player="",currentTopicElement=null;

function startGame(){
player=document.getElementById("name").value;
if(player==="") return alert("Enter name");

document.getElementById("start").classList.add("hidden");
document.getElementById("desc").classList.remove("hidden");
}

function showTopics(){
document.getElementById("desc").classList.add("hidden");
document.getElementById("topics").classList.remove("hidden");
}

function playTopic(t,el){
if(el.classList.contains("done")) return;

currentTopicElement=el;
current=shuffle([...allQuestions[t]]).slice(0,5);
index=0;

document.getElementById("topics").classList.add("hidden");
document.getElementById("quiz").classList.remove("hidden");

show();
}

function show(){
let q=current[index];
document.getElementById("question").innerText=q.q;

let html="";
q.a.forEach((a,i)=>{
html+=`<div class="answerBtn" onclick="ans(${i})">${a}</div>`;
});
document.getElementById("answers").innerHTML=html;
}

function ans(i){
if(i===current[index].c) score++;

index++;

if(index<5){
show();
}else{
currentTopicElement.classList.add("done");
done++;

document.getElementById("quiz").classList.add("hidden");
document.getElementById("topics").classList.remove("hidden");

if(done===4) finish();
}
}

function finish(){
let percent=(score/20)*100;

document.getElementById("topics").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

document.getElementById("final").innerText=
player+" Score: "+score+"/20 ("+percent+"%) "+(percent>=70?"PASSED 🎉":"FAILED ❌");
}
