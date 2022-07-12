
        const browseBtn = document.querySelector('.file-btn');
        browseBtn.addEventListener('click',function(){
            console.log(browseBtn.parentElement.children[0].click())
        })
       
        const dropHandeler = function(ev){
            const url = 'upload.php';
            ev.preventDefault();
            ev.stopPropagation()

            if(ev.dataTransfer.items){
                for(let i = 0;i < ev.dataTransfer.items.length;i++){
                   let file = ev.dataTransfer.items[i].getAsFile();
                    console.log(file);
const formData = new FormData();
formData.append('file',file)

// fetch(url,{
//     method:'POST',
//     body:formData
// }).then(()=>{
    
// alert('done')})
                }

            }
            else{
                console.log('file not working')

            }
        }
         document.querySelector('.contain').addEventListener('dragenter',(e)=>{
           
           e.preventDefault()
           e.stopPropagation()
             document.querySelector('.contain').style.background = "#e9e9e9";
            // console.log(e,'entered') 
            // dropHandeler(e)
        })
         document.querySelector('.contain').addEventListener('dragleave',(e)=>{
           
           e.preventDefault()
           e.stopPropagation()
             document.querySelector('.contain').style.background = '#fff';
            console.log('potentered')
          
        })
         document.querySelector('.contain').addEventListener('dragover',(e)=>{
           
           e.preventDefault()
           e.stopPropagation()
             document.querySelector('.contain').style.background = "#e9e9e9";
            // dropHandeler(e)
        })
         document.querySelector('.contain').addEventListener('drop',(e)=>{
             document.querySelector('.contain').style.background = '#fff';
             document.querySelector('.contain')
             dropHandeler(e)
        },false)
    