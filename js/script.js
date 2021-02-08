const buttonLike = document.querySelector('.like');
const textLike = document.querySelector('.infoLike');

const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.navBarContainer')
const wrapperContainer = document.querySelector('.wrapperNavContainer')
const lines = document.querySelectorAll('.hamburger > .line')
const headerTitle = document.querySelector('.name')
const navElem = document.querySelectorAll('.navElem')

const mainSection = document.querySelector('.mainSection')
const body = document.querySelector('body')
const html = document.querySelector('html')

const header = document.querySelector('header')
const aboutSection = document.querySelector('.aboutSection')
var topPositionAboutSection = null

/* var for TW animation */
var executedPresTW = false
var executedHobTW = false

const dureNavAnim = 300

/* REINIT A 0 */
window.scrollTo(0, 0);
window.addEventListener('DOMContentLoaded', function(){  
    //ACTUELLEMENT EN DEVELOPPPENT sur téléphone
    topPositionAboutSection = aboutSection.getBoundingClientRect().top
    lines.forEach(line => {
        line.classList.add('headerLineStart')
    })
    headerTitle.classList.add('headerTitleStart')
    header.classList.add('headerMain')
})

window.addEventListener('scroll', function(){
    console.log(window.scrollY)
    if(window.scrollY == 0){
        topPositionAboutSection = aboutSection.getBoundingClientRect().top
    }
    if(window.scrollY < topPositionAboutSection - header.getBoundingClientRect().height){
        lines.forEach(line => {
            if(!line.classList.contains("headerLineStart"))
                line.classList.add('headerLineStart')
        })
        if(!headerTitle.classList.contains('headerTitleStart')){
            headerTitle.classList.add('headerTitleStart')
            header.classList.add('headerMain')
            navBar.style.backgroundColor=""
            headerTitle.classList.remove('slideUpEffect')
            hamburger.classList.remove('slideUpEffect')
        }
    }
    else{
        if(!headerTitle.classList.contains('slideUpEffect')){
            headerTitle.classList.add('slideUpEffect')
            hamburger.classList.add('slideUpEffect')
        }
        lines.forEach(line => {
            if(line.classList.contains("headerLineStart"))
                line.classList.remove('headerLineStart')
        })
        if(headerTitle.classList.contains('headerTitleStart')){
            headerTitle.classList.remove('headerTitleStart')
            header.classList.remove('headerMain')
        }
        navBar.style.backgroundColor="black"
    }
    if(window.scrollY > 360 && executedPresTW == false ){
        typeWriterIAM()
        executedPresTW = true
    }
    if(window.scrollY > 1100 && executedHobTW == false){
        animHob()
        executedHobTW = true
    }
    
})

navElem.forEach(elem => {
    elem.addEventListener('click', function(){
        navBar.classList.remove('active')
        hamburger.classList.remove('active')
        if(window.scrollY < topPositionAboutSection  - header.getBoundingClientRect().height)
            mainSection.classList.remove('blured')
        if(wrapperContainer.classList.contains('zIndex'))
            setTimeout(() => {
                body.classList.remove('overflowHidden')
                wrapperContainer.classList.remove('zIndex')
            }, dureNavAnim);
            

    })
})

buttonLike.addEventListener('click', function(){
    buttonLike.classList.toggle('liked');
    textLike.classList.toggle('active')
})

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active')
    navBar.classList.toggle('active')
    wrapperContainer.classList.add('zIndex')
    if(window.scrollY < topPositionAboutSection - header.getBoundingClientRect().height)
        mainSection.classList.toggle('blured') 
    body.classList.add('overflowHidden')

    if(!navBar.classList.contains('active')){
        setTimeout(() => {
            body.classList.remove('overflowHidden')
            wrapperContainer.classList.remove('zIndex')
        }, dureNavAnim);
    }


})

function typeWriterIAM(){
    var presentationText = document.getElementById('typeWriter');

var typewriterIAM = new Typewriter(presentationText, {
    loop: false,
    wrapperClassName: "typeWriterPres",
    delay: 75,
    deleteSpeed: 10
});

typewriterIAM.typeString("Moi c'est Antoine")
    .pauseFor(1300)
    .deleteAll()
    .typeString('Je suis passioné')
    .pauseFor(1300)
    .deleteChars(8)
    .typeString('persévérant')
    .pauseFor(1300)
    .deleteChars(11)
    .typeString('rigoureux')
    .pauseFor(1300)
    .deleteChars(9)
    .typeString('autodidacte')
    .pauseFor(400)
    .callFunction(typeWriterAnimPres)
    .start();

}



function animHob(){   
    var hobPara = document.getElementById('typeWriterHobText');
    var typeWriterHob = new Typewriter(hobPara, {
        loop: false,
        wrapperClassName: "typeWriterPres",
        delay: 75,
        deleteSpeed: 10
    });

    typeWriterHob.typeString("J'aime l'informatique")
    .pauseFor(1300)
    .deleteChars(14)
    .typeString('le roller')
    .pauseFor(1300)
    .deleteChars(9)
    .typeString('la photographie')
    .pauseFor(1300)
    .deleteChars(15)
    .typeString('le développement')
    .pauseFor(1300)
    .deleteChars(16)
    .typeString('apprendre')
    .pauseFor(400)
    .callFunction(typeWriterAnimHob)
    .start();
}

function typeWriterAnimPres(){
    var presentationTitle = document.querySelector('.presentationTitle');
    presentationTitle.style.backgroundColor="orange"
}    
function typeWriterAnimHob(){
    var hobTitle = document.querySelector('.typeWriterHob');
    hobTitle.style.backgroundColor="orange"


}

function Ismobile(){
    var md = new MobileDetect(window.navigator.userAgent);
    var mobileOrNot = md.mobile() != null ? true : false
    return mobileOrNot
}