/*! Version 22.11.15b */
let about=document.getElementById("about"),linkAbout=document.getElementById("linkAbout"),closeAbout=document.getElementById("closeAbout"),work=document.getElementById("work"),linkWork=document.getElementById("linkWork"),closeWork=document.getElementById("closeWork"),privacy=document.getElementById("privacy"),linkPrivacy=document.getElementById("linkPrivacy"),closePrivacy=document.getElementById("closePrivacy"),introContent=document.getElementById("introContent"),closeIntro=document.getElementById("closeIntro");function toggleIntro(){let t=document.getElementById("intro-svg");"none"===introContent.style.display?(introContent.style.display="block",t.style.transform="none"):(introContent.style.display="none",t.style.transform="rotate(45deg)")}function displayAbout(){about.classList.toggle("inUp"),about.classList.toggle("outUp"),work.classList.remove("inUp"),work.classList.add("outUp"),privacy.classList.remove("inUp"),privacy.classList.add("outUp")}function displayWork(){work.classList.toggle("inUp"),work.classList.toggle("outUp"),about.classList.remove("inUp"),about.classList.add("outUp"),privacy.classList.remove("inUp"),privacy.classList.add("outUp")}function displayPrivacy(){privacy.classList.toggle("inUp"),privacy.classList.toggle("outUp"),about.classList.remove("inUp"),about.classList.add("outUp"),work.classList.remove("inUp"),work.classList.add("outUp")}function hideAbout(){about.classList.remove("inUp"),about.classList.add("outUp")}function hideWork(){work.classList.remove("inUp"),work.classList.add("outUp")}function hidePrivacy(){privacy.classList.remove("inUp"),privacy.classList.add("outUp")}closeIntro.onclick=function(){toggleIntro()},linkAbout.onclick=function(){displayAbout()},linkWork.onclick=function(){displayWork()},linkPrivacy.onclick=function(){displayPrivacy(),linkPrivacy.classList.toggle("active")},closeAbout.onclick=function(){hideAbout()},closeWork.onclick=function(){hideWork()},closePrivacy.onclick=function(){hidePrivacy(),linkPrivacy.classList.remove("active")};