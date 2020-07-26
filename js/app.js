const shareBtn = document.querySelector('article')

console.log(window.innerWidth)

shareBtn.addEventListener('click', (e) => {
    if(window.innerWidth < 550){
        if(e.target.id == 'sharebtn'){
            const infoDiv = document.querySelector('.info')
            infoDiv.style.display = 'none'
            const socialDiv = document.querySelector('.social-share')
            socialDiv.style.display = 'grid'
            const textBlock = document.querySelector('.text')
            textBlock.style.margin = '0 0 60px 0'
    
        }else if(e.target.id == 'activebtn') {
            const socialDiv = document.querySelector('.social-share')
            socialDiv.style.display = 'none'
            const infoDiv = document.querySelector('.info')
            infoDiv.style.display = 'flex'
            const textBlock = document.querySelector('.text')
            textBlock.style.margin = '0'
        }
    }else{
        console.log('grande')
    }
})

