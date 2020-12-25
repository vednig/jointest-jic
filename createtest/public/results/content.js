        var scr=0; 
        function theFunction(e)
            { 
            if (document.getElementById("contentcard").hidden){
            onload()
            document.getElementById("contentcard").removeAttribute("hidden");
        }
            //alert(e.target.innerText);
            obj=e.target;
            text=e.target.innerText;
            id=e.target.id;
            // Output its base64 image string
            /*var image = publicChart.toBase64Image();
            console.log(image);*/
            if (id==="sndreport"){
                //send email  to email id
                //if
                send()

            }else{
                //console.log(e)
                var rlno;
                function viewport(name){
                    rlno=dict[name]
                    document.getElementById('analysis').innerText=name;
                    document.getElementById('email').innerText=snap.answers[rlno].email;
                    document.getElementById('uname').innerText=" "+name+" ";
                }
                viewport(e.target.innerText)
                analyze(snap.answers[rlno].response)
            }
            }
            function analyze(answer){
                //compare
                //(snap.num.count)
                scr=0;
                personalChart.data.labels=[]
                personalChart.data.datasets[0].data=[]
               
                for (i = 0; i < snap.num.count*2; i+=2) {
                    //console.log(i)
                 if (answer[i]==snap.solution.page1[i]){
                     //increase counter
                     scr+=1;
                     n=i/2+1;
                     var label="Question"+n;
                     console.log(label)
                     personalChart.data.labels.push(label);
                     personalChart.data.datasets[0].data.push(1);
                     //console.log(scr);
                 }else{
                    n=i/2+1;
                    var label="Question"+n;
                     personalChart.data.labels.push(label);
                     personalChart.data.datasets[0].data.push(0);
                     //console.log(scr);
                 }
                }
                document.getElementById('totalscore').innerHTML="<div>SCORED:"+scr+"</div>"
                //console.log(answer);
                personalChart.update();
        }
        function onload(){
                    //i=0;
                    var namen;
                    publicChart.data.labels=[]
                    publicChart.data.datasets[0].data=[]
                    for (j=0;j<Object.keys(dict).length;j++){
                        namen=Object.keys(dict)[j];
                        //reset counter
                        rlnum=dict[namen];
                        console.log(namen,rlnum,scr,j);
                        calcall(rlnum,namen);
                    }
                    publicChart.update(); 
                    //calculate
                    //replace
                }
        function calcall(rlnum,namen){
            scrn=0;
            for (k = 0; k < snap.num.count*2; k+=2) {
                            //console.log("public",k)
                            if (snap.answers[rlnum].response[k]==snap.solution.page1[k]){
                                //increase counter
                                scrn+=1;
                                //console.log(namen,rlnum,scr);
                            }else{
                                //console.log(namen,rlnum,scr);
                            }
                            
                    }            
            publicChart.data.labels.push(namen);
            console.log(publicChart.data.labels)
            publicChart.data.datasets[0].data.push(scrn);
        }
        function percentage(partialValue, totalValue) {
            return (100 * partialValue) / totalValue;
         } 
        function send(){
            chart1="new Chart(ctx, {type: 'pie',data: {labels: [],datasets: [{label: 'Marks Scored',data: [],borderColor:'rgb(189, 78, 204)',borderWidth: 1.5}]},options: {scales: {yAxes: [{ticks: {beginAtZero: true}}]}}})"
            label1=JSON.stringify(personalChart.data.labels)
            label2=JSON.stringify(publicChart.data.labels)
            dataset1=personalChart.data.datasets[0].data
            dataset2=publicChart.data.datasets[0].data
            soln=snap.solution.page1;
            htmltoencode='<html>'+'<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">'+'<body>'+document.getElementById('viewpad').innerHTML+'<div id="public"></div><script>function run(){var ctx = document.getElementById("personalchart");publicChart='+chart1+';publicChart.data.labels='+label1+';publicChart.data.datasets[0].data=['+dataset1+'];publicChart.update();};run() '
            base64=window.btoa(label1)
            uri='http://vednig.heliohost.us?l='+encodeURI(base64)+'&d='+encodeURI(window.btoa(dataset1))+'&pl='+encodeURI(window.btoa(label2))+'&pd='+encodeURI(window.btoa(dataset2))+'&n='+encodeURI(window.btoa(document.getElementById('analysis').innerText))+'&t='+encodeURI(window.btoa(document.getElementById('totalmarks').innerText))+'&s='+encodeURI(window.btoa(soln));
            const encoded = uri;
            console.log(encoded);
            //newlink='data:text/html;base64,'+base64
            //console.log(newlink)
            imgpath = personalChart.toBase64Image();
            imgpathall=publicChart.toBase64Image();
            mailbody='<html><h1>Your Test Scores are</h1><br>'+'View this report easily <a href="'+uri+'">Here</a><br>'+document.getElementById('viewpad').innerHTML+"<img src='"+imgpath+"' ><br>All the best 👍 for your next prepration.<br>Sent from <a href='jointest.ml' >JoInTest</a> after evaluation.</html>"
            tomail=document.getElementById("email").innerText;
            frommail="reports@jointest.ml"
            mailsubject="Report Card for "+title
            //console.log('sending',imgpath,tomail,frommail,mailbody,mailsubject)
            Email.send({
                SecureToken : "c60b337c-aae0-4e62-9ad0-bead8432d370",
                To : tomail,
                From : frommail,
                Subject : mailsubject,
                Body : mailbody,
                type : 'html',
            }).then(
              message => console.log(message)
            ).then(alert('Report >> Sent to '+document.getElementById('analysis').innerText+"'s email address"));
            }