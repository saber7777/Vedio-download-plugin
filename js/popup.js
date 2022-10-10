chrome.storage.sync.get(['videos'], function(result) {
    var div = document.getElementById("videos_div");
    var p = document.getElementById("notFound");
    

    if (result.videos.length){
        div.removeChild(p);
        div.innerHTML += "<button id='selectAllBtn'>Select All</button>";        
    }

    for (i=0;i<result.videos.length;i++) {
        title = result.videos[i].title;
        //console.log(tags[i].getAttribute('src'));
        div.innerHTML += "<p><input type='checkbox' id='cbox" + i + "><label for='cbox" + i + ">Title: " + title + "</label></p>";
    }

    if (result.videos.length){
        div.innerHTML += "<button id='downloadBtn'>Downloads</button>";     
    }

    var inputs = document.querySelectorAll('input');

    var selectAllBtn = document.getElementById("selectAllBtn");
    selectAllBtn.onclick = function() {
        var allSelected = true;
        for (i=0;i<inputs.length;i++) {
            if (!inputs[i].checked){
                allSelected = false;
            }
        }

        if (allSelected){
            for (i=0;i<inputs.length;i++) {
                inputs[i].checked = false;
            }
        } else {
            for (i=0;i<inputs.length;i++) {
                inputs[i].checked = true;
            }
        }
    }

    var downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.onclick = function(){
        
        for (i=0;i<inputs.length;i++) {
            if(inputs[i].checked){
                result.videos[i].checked = true;
            }
        }

        chrome.storage.sync.set({
            "videos": result.videos
        });
        chrome.runtime.sendMessage({todo: "DownloadNow"});
    }

});