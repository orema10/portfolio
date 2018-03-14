console.log('Starting up');

var gProjs = [{
    id: "sokoban", name: "Sokoban", title: "Better push those boxes", badges: ["Game", "Boxs", "Matrix"],
    desc: "lorem ipsum lorem ipsum lorem ipsum", imgName: "sokoban.png", url: "../../sokoban/index.html", publishedAt: 1448693940000
},

{
    id: "mineswepper", name: "Mineswepper", title: "Try not to run into mines", badges: ["Game", "Matrix", "Guess", "Numbers"],
    desc: "lorem ipsum lorem ipsum lorem ipsum", imgName: "minesweeper.png", url: "../../mine/index.html", publishedAt: 1448693940000
},

{
    id: "whatsinpicture", name: "What's in picture", title: "Guess what's in the picture", badges: ["Game", "Guess"],
    desc: "lorem ipsum lorem ipsum lorem ipsum", imgName: "WhatsInPicture.png", url: "../../WhatInPicture/index.html", publishedAt: 1448693940000
},

{
    id: "touchthenumbers", name: "Touch The Numnbers", title: "Do it better and fast", badges: ["Game", "Matrix", "Numbers"],
    desc: "lorem ipsum lorem ipsum lorem ipsum", imgName: "TouchTheNumbers.png", url: "../../TouchTheNumbers/index.html", publishedAt: 1448693940000
},

{
    id: "guessthenumbers", name: "Guess The Number", title: "Guess what's the number in range", badges: ["Game", "Guess", "Numbers"],
    desc: "lorem ipsum lorem ipsum lorem ipsum", imgName: "GuessTheNumber.png", url: "../../GuessTheNumber/index.html", publishedAt: 1448693940000
},

{
    id: "chess", name: "Chess", title: "Come enjoy with chess", badges: ["Game", "Matrix"],
    desc: "lorem ipsum lorem ipsum lorem ipsum", imgName: "Chess.png", url: "../../Chess/index.html", publishedAt: 1448693940000
},

{
    id: "memorylogos", name: "Memory Logos", title: "Lets play deveploment memory game", badges: ["Game", "Guess"],
    desc: "lorem ipsum lorem ipsum lorem ipsum", imgName: "memoryLogos.png", url: "../../memoryLogos/index.html", publishedAt: 1448693940000
},

{
    id: "mtfirstweb", name: "My First Web", title: "Come to see what i do when i was chiled", badges: ["Web"],
    desc: "lorem ipsum lorem ipsum lorem ipsum", imgName: "MyFirstWeb.png", url: "../../MyPortfolio/index.html", publishedAt: 1448693940000
}
];


initPage();
function initPage() {
    var strHTML = ``;
    var modelHTML = ``;

    gProjs.forEach(function (elItem, idx) {
        strHTML += `
                        <div class="col-md-4 col-sm-6 portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${(idx + 1)}">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <i class="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img class="img-fluid" src="img/portfolio/${gProjs[idx].imgName}" alt="">
                            </a>
                            <div class="portfolio-caption">
                                <h4>${gProjs[idx].name}</h4>
                                <span class="badge-items">${getBadge(gProjs[idx].badges)}</span>
                                <p class="text-muted">${gProjs[idx].title}</p>
                            </div>
                        </div>
                    `

        modelHTML += `
                        <div class="portfolio-modal modal fade" id="portfolioModal${(idx + 1)}" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="close-modal" data-dismiss="modal">
                                        <div class="lr">
                                        <div class="rl"></div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-8 mx-auto">
                                            <div class="modal-body">
                                                <h2>${gProjs[idx].name}</h2>
                                                <p class="item-intro text-muted">${gProjs[idx].title}</p>
                                                <img class="img-fluid d-block mx-auto" src="img/portfolio/${gProjs[idx].imgName}" alt="">
                                                <p>${gProjs[idx].desc}</p>
                                                <ul class="list-inline">
                                                    <li>Date: January 2017</li>
                                                    <li>Client: Threads</li>
                                                    <li>Category: Illustration</li>
                                                </ul>

                                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                                    <i class="fa fa-times"></i>
                                                    Close Project</button>

                                                    <a href="${gProjs[idx].url}"><button class="btn btn-success" type="button">
                                                        Lets see in live!
                                                    </button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `

    });

    var contentHTMl = `

                        <div class="alert alert-danger content-error">
                            <strong>Wrong!</strong> please write in all the cells.
                        </div>
                        <h5>Send To:</h5>
                        <input class="contact-mail" type="text" placeholder="galban81@gmail.com" readonly="readonly">
                        <h5>Subject</h5>
                        <input class="contact-subject" type="text" placeholder="type subject here">
                        <h5>Message Body</h5>
                        <textarea class="contact-body" type="text" placeholder="type message text here"></textarea>
                        <button onclick="sendEmail()" class="btn btn-success send-mail" type="button">Submit</button>`;


    var elPortfilio = $('#portfolio-items-container');
    var elModel = $('.items-modals');
    var elContent = $('.contact-continer');
    elPortfilio.html(strHTML);
    elModel.html(modelHTML);
    elContent.html(contentHTMl);
}

function getBadge(items) {
    var strHTML = '';
    items.forEach(function (item) {
        strHTML += '<span class="badge ' + getBagdeClass(item) + '">' + item + '</span> </t>'
    });

    return strHTML;
}

function sendEmail() {
    var elSub = $('.contact-subject');
    var elBody = $('.contact-body');
    var toSend = 'galban81@gmail.com'
    var sub = elSub.val();
    var txtBody = elBody.val();

    if(!sub || !txtBody) {
        var elError = $('.content-error');
        elError.addClass('show');
        setTimeout(function (){
            elError.removeClass('show');
        }, 3000);

        return;
    }

    open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=' + toSend + '&su=' + sub + '&body=' + txtBody + '&tf=1', '_blank');
}

function getBagdeClass(category) {
    switch (category) {
        case 'Game':
            return 'badge-secondary';

        case 'Boxs':
            return 'badge-dark';

        case 'Matrix':
            return 'badge-danger';

        case 'Guess':
            return 'badge-warning';

        case 'Web':
            return 'badge-info';

        case 'Numbers':
            return 'badge-success';

        default:
            return 'badge-light';
    }
}
