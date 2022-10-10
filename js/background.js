chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "DownloadNow") {
        chrome.storage.sync.get(['videos'], function(result) {

            var counter = 0;
            for (i=0;i<result.videos.length;i++) {

                if(result.videos[i].checked){
                    link = result.videos[i].url;
                    title = result.videos[i].title;
            
                    if (title == "No Title"){
                        title += " " + counter;
                        counter++;
                    }
            
                    console.log(title);
                    //console.log(tags[i].getAttribute('src'));
            
                    chrome.downloads.download({url:link, 
                        filename:"GoogleVideos/"+title+".mp4"});
                }
                
            }
        });
    }
})


