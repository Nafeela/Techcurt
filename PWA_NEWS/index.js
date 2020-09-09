if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration=>{
        
        console.log("SW registered PWA");
        console.log(registration)
    })
    .catch(error=>{
        console.log("SW registration Failed");
        console.log(error.message)
    })

}