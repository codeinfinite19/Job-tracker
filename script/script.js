let motJobs = document.getElementById("total-job");

let interviewList = [];
let rejectedList = [];



let allinterviews = document.getElementById("all-interviews");
let allrejected = document.getElementById("all-rejected");
let alljob = document.getElementById("all-jobs");

const alljobFilterbtn = document.getElementById('all-jobFilter');
const interviewFilterbtn = document.getElementById('all-interviewfilter');
const rejectedFilterbtn = document.getElementById('all-rejectedfilter');
const filteredJob = document.getElementById('filtered-section');


const mainContainer = document.querySelector('main');




function calculationTotalJobs() {
    motJobs.innerText = alljob.children.length;
    allinterviews.innerText = interviewList.length
    allrejected.innerText = rejectedList.length
}

 calculationTotalJobs();


 function togglestyle(id){
    alljobFilterbtn.classList.remove('btn-primary', 'text-white');
    interviewFilterbtn.classList.remove('btn-primary', 'text-white');
    rejectedFilterbtn.classList.remove('btn-primary', 'text-white');
 

    if(id === 'all-jobFilter'){
        alljobFilterbtn.classList.add('btn-primary', 'text-white');
        alljobFilterbtn.classList.remove('btn-outline');

    }
    else if(id === 'all-interviewfilter'){
        interviewFilterbtn.classList.add('btn-primary', 'text-white');
        interviewFilterbtn.classList.remove('btn-outline');
        filteredJob.classList.add('hidden');
       
    }
    else if(id === 'all-rejectedfilter'){
        rejectedFilterbtn.classList.add('btn-primary', 'text-white');
        rejectedFilterbtn.classList.remove('btn-outline');
    }
    
 }


 let getinterviewbtn = document.getElementById('get-interview');
 let getrejectedbtn = document.getElementById('get-rejected');

 
 mainContainer.addEventListener('click', function(event){
    
        console.log(event.target.classList.contentains('gate-interview'));

    if(event.target.classList.contentains('gate-interview')){
         const parentNode = event.target.parentNode.parentNode;

    
    const jobTitle = parentNode.querySelector('.job-title').innerText;
    const companyName = parentNode.querySelector('.job-name').innerText;
    const jobLocation = parentNode.querySelector('.job-salary').innerText;
    const applicationCondition = parentNode.querySelector('.job-application-condition').innerText;
    const jobendtitle = parentNode.querySelector('.job-end-title').innerText;
    parentNode.querySelector('.status')
    const divinfo ={
        jobTitle,
        companyName,
        jobLocation,
        applicationCondition : 'APPLIED',
        jobendtitle
    }



   const jobExistsInInterviewList = interviewList.find( item=> item.jobTitle === divinfo.jobTitle);
   const jobExistsInRejectedList = rejectedList.find( item=> item.jobTitle === divinfo.jobTitle);

   
   if(!jobExistsInInterviewList){
    interviewList.push(divinfo);
   }

   

 
    } 
 })


 function renderInterviewList(){

     
    filteredJob.innerHTML = '';

    for(let interview of interviewList){
        let div = document.createElement('div');
        div.classList = 'bg-white py-4 mt-[10px] pl-4 shadow-lg rounded-lg'
        div.innerHTML = `<div class="flex justify-between ">
                        <h2 class="job-name text-2xl font-bold mt-3">Moblie First Crop</h2>
                        <button class="btn btn-soft bg-transparent mx-4 rounded-[50%] text-1xl px-1 py-1"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                    
                    <p class="job-title mb-4 text-[#565656]">React Native Developer</p>
                    <p class="job-salary mb-4 text-[#565656]">Remote . Full-time . $130,000 -$175,000</p>
                    <h4 id="application-condition" class="job-application-condition bg-blue-100 rounded-lg p-2 inline-block mb-4">NOT APPLIED</h4>
                    <p class="job-end-title text-[#565656]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                    <div class="py-4 flex gap-4">
                        <button id="gate-interview" class="btn btn-outline btn-success">INTERVIEW</button>
                        <button id="gate-rejected" class="btn btn-outline btn-error">REJECTED</button>
                    </div>
`
                    filteredJob.appendChild(div);

 
 }}






