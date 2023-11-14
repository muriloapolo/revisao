let createFrame = document.querySelector('.selectLearn');
let iframeCap = document.querySelector('.frameVideo');
// let att;
createFrame.addEventListener('change', (e) => {
    // att = Number(e.target.value)
    // att = e.target.value
    // console.log(linkVideos[att])
    getVideo(e.target.value)

})

function getVideo(indice) {
    iframeCap.setAttribute('src', linkVideos[indice])
}






const linkVideos = {
    // grupo 1
    info: 'https://www.youtube.com/embed/KuhD9TO84Fc',
    intro: 'https://www.youtube.com/embed/QEuoSMBM6yo?si=UsYI81Pbwxfq07X_',
    varTipDado: 'https://www.youtube.com/embed/khuBSQjw7_M?si=SqL3VvCcvDi_Fkyd',
    opExp: 'https://www.youtube.com/embed/R4qzGnQbxbQ?si=7RNi9dZ0c1ORp39P',
    //  grupo 2
    estCond: 'https://www.youtube.com/embed/Og12uQUuAog?si=9DuJBTsqhjLZkWEP',
    estRep: 'https://www.youtube.com/embed/SYMxV4HM224?si=H4aIuIDEDBPZdEac',
    // grupo 3
    arr: 'https://www.youtube.com/embed/bDDpv-BL2v0?si=iIYKTkBistIy7qMp',
    obj: 'https://www.youtube.com/embed/kqE3sp_7peQ?si=rVflcPkYLDE5LVbu',
    metArr: 'https://www.youtube.com/embed/PHQK7tKZmro?si=QrLnbUDzgeOm-8m1',
    metObj: 'https://www.youtube.com/embed/WAK3CFuVKaA?si=wPOKWbBUEvM0X9mH',
    // grupo 4
    func: 'https://www.youtube.com/embed/ItzRdMj1lzw?si=MpQyISMQuWOVu6aH',
    escop: 'https://www.youtube.com/embed/89wh9X05XIU?si=qAvl33tjV0LpOpoS',
    // grupo 5
    intPoo: 'https://www.youtube.com/embed/videoseries?si=jJRNKPHpyE5c1PmD&amp;list=PLjbgOM5FYMGijPskfY-dF4uR_vpQDjRk9',
    classEs6: 'https://www.youtube.com/embed/2ZphE5HcQPQ?si=LoX9vL9xIbSXs5Np',
    //grupo 6
    domManip: 'https://www.youtube.com/embed/0dBY09OJm04?si=S6Ksk14s4E-0tbCQ',
    events: 'https://www.youtube.com/embed/i5CbnQQGZAU?si=jNVzftVQt-_tZ0Gt',
    //grupo 7
    callb: 'https://www.youtube.com/embed/WUmAAxH9n-A?si=fFpjSMClnoJaUHR5',
    asyncAwait: 'https://www.youtube.com/embed/we5Ac8U21lI?si=4gnmwYTOARt_vBPT',
    //grupo 8
    reqHttpAjx: 'https://www.youtube.com/embed/hpixo6irw6M?si=k9l-YhPJOS2uNDNq',
    apiConsumo: 'https://www.youtube.com/embed/IDG6EOXYAq8?si=5OILLQ4gWo0HMKaw',
    //grupo 9
    ferrDesenv: 'https://www.youtube.com/embed/27S3GZ8EAcw?si=vWTU3bWUonAlWXkP',
    ctrlVersGit: 'https://www.youtube.com/embed/Zwv9qRyVeU4?si=b2ROWDtgIOaMdvyj',
    nodeJs: 'https://www.youtube.com/embed/hHM-hr9q4mo?si=10aI6yyCpijfJPh_',

    project: 'https://www.youtube.com/embed/videoseries?si=HnAOfYSyLGlqHHDB&amp;list=PLDgemkIT111AzoS1rB61sgMJbsEA4pyD2',
    revGeral: 'https://www.youtube.com/embed/CxpZhLUkloc?si=Kanc0jeFqxopFCCX',



}



