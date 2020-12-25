
    var firebaseConfig = {
   apiKey: "AIzaSyByQu3_pmxkcGhd6Ynq-TcrF0LcCnkHIw8",
   authDomain: "jointest-jic.firebaseapp.com",
   databaseURL: "https://jointest-jic.firebaseio.com",
   projectId: "jointest-jic",
   storageBucket: "jointest-jic.appspot.com",
   messagingSenderId: "142037296584",
   appId: "1:142037296584:web:f26548aaeb20b8a763ccfd",
   measurementId: "G-QP01TYN2JC"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
 firebase.auth().signInAnonymously().catch(function(error) {
 // Handle Errors here.
 var errorCode = error.code;
 var errorMessage = error.message;
 //console.log(errorCode,errorMessage)
 // ...
});
var authid;
firebase.auth().onAuthStateChanged(function(user) {
 if (user) {
   // User is signed in.
   var isAnonymous = user.isAnonymous;
   authid = user.uid;
   //console.log(authid)
   // ...
 } else {
   // User is signed out.
   // ...
   document.getElementById("AccountDetails").st.color="black"
   document.getElementById("AccountDetails").innerHTML="Please Refresh page! or Try again later"
 }
 // ...
 
});
rnl=[]
var dict = new Object();
var snap;
var title;
// or the shorthand way
var dict = {};

const params = new URLSearchParams(window.location.search);
const code1 = params.get("id");
console.log('uid is',code1);
//code1=code1;

   firebase.database().ref('beta/uid/'+code1.toString()+'/simplesheet/0').once('value').then((snapshot) => {
     var username = (snapshot.val() && snapshot.val().num.admin) || 'Anonymous';
     // ..
     
     snap=snapshot.val()
     //console.log(snap)
     if(authid==username){
       console.log('matched')
     }else{
       return
     }
     //console.log(username)
     //console.log()
     //document.getElementById('app').innerText=JSON.stringify(snapshot.val());
     document.getElementById("totalmarks").innerText=snap.num.count;
     title=snap.num.info;
     x=snapshot.child('num').val()['admin'];
     /*if (x==authid){
        console.log(x,authid)
        return
        //no more code runs
        //checkmated
     }*/
     
   /* The way to get child of anything which is unknown */

   snapshot.forEach(function(childSnapshot) {
       childSnapshot.forEach(function(anotherChild){
        //inside beta/uid/$uid/simplesheet/0/*/*
        var name = anotherChild.val()['name'];
       var rl = anotherChild.val()['uid'];
        if(name!=null){
        document.getElementById('namelst').innerHTML+='<li><a id="number1" href="#analysis" onclick="theFunction(event)">'+name+'</a></li>'
        //console.log(name);
        
        dict[name]=rl;
        rnl.push(rl);
        //console.log(rnl);
        }
        if(1==1){
            onload()
        }
       })
       //inside beta/uid/$uid/simplesheet/0/*
     var childData = childSnapshot.val();
     if(childData!=null){
       //console.log(childData);
       document.getElementById("respamnt").innerText=rnl.length
     }
   });
   });
   