"use strict";angular.module("parishWebsiteApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","mailchimp"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contacts",{templateUrl:"views/contacts.html",controller:"ContactsCtrl",controllerAs:"contacts"}).when("/services",{templateUrl:"views/services.html"}).when("/address",{templateUrl:"views/address.html",controller:"AddressCtrl",controllerAs:"address"}).when("/helpers",{templateUrl:"views/helpers.html",controller:"HelpersCtrl",controllerAs:"helpers"}).when("/building",{templateUrl:"views/building.html",controller:"BuildingCtrl",controllerAs:"building"}).when("/donations",{templateUrl:"views/donations.html",controller:"DonationsCtrl",controllerAs:"donations"}).otherwise({redirectTo:"/"})}]).config(["$locationProvider",function(a){a.hashPrefix("")}]),angular.module("parishWebsiteApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("AboutCtrl",["$scope",function(a){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("parishWebsiteApp").controller("ServCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("ContactsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("IndexCtrl",["$scope","$location",function(a,b){a.isActive=function(a){var c=a===b.path();return c}}]),angular.module("parishWebsiteApp").controller("AddressCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("HelpersCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("BuildingCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("DonationsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").run(["$templateCache",function(a){a.put("views/about.html",'<h2>History</h2> <br> <div class="row"> <div class="col-md-6 col-sm-6 col-xs-12"> <p> In 1973, Metropolitan Anthony came to receive an honorary doctorate from the University. During his visit Metropolitan Anthony also served the Divine Liturgy, for the small number of Russian Orthodox Christians living here which as far as we know, was the first occasion on which the Liturgy was served in Cambridge and we regard Vladyka Anthony\'s visit as the founding event in the life of our parish. A priest was sent from London to celebrate the Liturgy every month. By June 1978, Metropolitan Anthony gave the Community its own antimension. The community was placed in the care of Archpriest Basil Osborne who came to Cambridge from Oxford one Saturday each month, for over 20 years, to serve the Liturgy and care for the people. <br><br> Fr John Jillions became the priest of the parish in 1998. We had no permanent home until, in December 2000, the community began to worship in the Chapel of Westcott House, an Anglican Theological College. This arrangement was intended to last until the end of 2001, but we worshipped there for another 17 years before moving to St Clement\'s Church on Bridge Street! Fr Raphael Armour was ordained to serve as a second priest to the Community in July 2001. In 2002, the community was received as a Parish of the Sourozh Diocese. Fr Raphael succeed Fr John as Rector of the Parish the following year. </p> <br> </div> <div class="col-md-6 col-sm-6 col-xs-12"> <!-- <div class="row">\n			<div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">\n				<div class="embed-responsive embed-responsive-4by3">\n					<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/videoseries?list=PLNRTQPmTft_EyCih27tuXhDDrA0PeXxF5" frameborder="0" allowfullscreen></iframe>\n				</div>\n			</div>\n		</div> --> <br> <div class="row"> <div class="col-md-10 col-md-offset-1"> <script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js" async></script> <div class="pa-gallery-player-widget" style="width:100%; height:240px; display:none" data-link="https://photos.app.goo.gl/5JsDVPaETMzmxEYt5" data-title="Saint Ephraim Orthodox parish" data-description="16 new photos · Album by Vladimir Kiselev"> <object data="https://lh3.googleusercontent.com/rRua6UeqllDS0iyz7lyTIlMIZU6j6sp1dG8MHSfvG-7vh30rlKiQhB1X1jzPltKIQs_JZqCJZtIT3L2-2mC5oyTwM941gfkCPru4-6nhUn3Gx5Xt1-aGpuUm-XdUnaD9IMHAlqVEH1s=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/20Wr67w8jz3Bm97vdXrzBxhlLYLHxXkd9kzPVOS5KGFxXn3Znr6W-e7WuoDxQC5nQjYKW23YeMi96pPSY-D68fN33IOCooI4VYMao71FucBmrMegJ2TcDWX6z_g588_mPttdreSadFQ=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/TLkfTA5P_GRV7LFpYAIQ9dbMTTmofXtaGO1ng9WwlvQnxhVwAWiweEXOVzOwwlcgNvZjD5XDUFu4JjXDZGZjTb68t4-2fCxto_msJsIewkjvMDGOLADfUcaNnEF7qElhDe2734EYvnQ=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/x80FMTnlc8LXVxmxClb_n4LwZPXLoObP_jGifUNRcRrx8s89Bey27kxALMmI9d0RE0tHMySLcTWJnTifVYtqjv6f3BKXdquk3RKNwo5grC4mYSMxSjIQNTZUrcFohzjrx8jK-pWhN7w=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/ucozcftZun6uTTgKkyV1XF0ayUYFrgGhAiXRARLxkZlUoxkexN0TRKAnsj4AvFNplbU2DyZpvhUtkgwMeVDb81DFbdYC_SWbkZGYJSnl2rBVRKAKitbU-Zwi7s-3Uxx-FzdIats6s9Y=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/T8PnQGjpzH9W6O34QdC2yuvY0E-99HIfhkgR-Glfb1hHnplsZJmcDnKxRBzaPovuc_1yv1eaUKOFUV3NxEPm6q86zaeHuL_9jxOAfQNi9zdPVITHW6Z7mP62gOf8udkytebxkvPKQg8=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/COYEr9xTodvw8liuQle-DfpkSHenobN35_EhlXuUNSaPZ6Bn3aBxJbb_Qanzffifs_UorZqscQBTNFLo7AppKliL_w37la16LepwK7K-bIu-b3Zt5_x_y_g6bjQPfuRhner3DwvVMQw=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/5cyrbcfN_ykyChk5p_F_5rAI9ZdFXM8iFK612l-uTnTI2stnN5ARFoEiiACPl6lhA_H3jSG7zaYLD2mNjaw8LM_ijr9v9glG4wDMb9k8Gh8GNwb1V33ISmQhIQ7-Bex33GRkwJk2x5M=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/l3j7_ZRPiv3fdC6nBUiiYfI1cdgGx5gsOe1e5UYR4gFlf5eum-uMssUJBtNEWQw8lDEddLoULeL3TPwR652lxM_-ap4mZhUHLDbi_DEFfgpyLnYu0Dd3mw-aU27QRndSqdjp6rAgxMM=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/IucY6Jnc034ZFl_k9r5L3g6lir5WaixfLfsFgLWPqZk1_0H3_rf8K-tBbJ4ZUaxvGtiD6RCp9dINxy8i-WmnCIW2eHunqxWKoUfGumg90WZRAj5gFs75AOlojhy02-30d6GLq6C8mac=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/2qISCFqOMNsiBexxqhdT0Bcp61lewrf5fpAVWazMa3piHK__c0unxp16O0SZUokJO9nwh0f1Or9oE7Wz2YzELHIiWO_PPpdujYqVM8T4w80Nspc8CxQXcHxmSU55C9zQ9fDSfhTaIj0=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/_q7c_qCRh_bi8ZWbsadcsCNUHYDDHereGNoD4oysMIrkeL2P58uXwywgBvZKRVmpzXt_es2GYRSmg5qJc8tkWghEIQlnqpzibzzCKho5QvSpHTD0dA4KUwtyBXMhiXuFX7XYp4cMp_E=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/E4aL0Y9JWoZXLw-ZJerqyKeUU2eSrsRIwqbyhjfyGNrJI2Gp7jSoxEPVPnSGkH9XbrIf0x1TeqO4lCI6VZ9TCKOZcw_BtNNuSHWsmdsu2nP89cZ4VkzXbL1QuSCBea1HIFIQiJHE7DQ=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/anL-sRS88VXOnqAGSEsz-7GveA1rJ04hIjQKO58DPCU137vZ83LHUfV8wbjQV5mjpBaEtNz_C3pwo1OmbhNjcAxnj85EGsbOGhzOwiJLmGcEDsELsQ7wNkeE8mK41rYSNfcbS-aa2H0=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/Xoqru2WixX1WpGa9dR6YOMtOlwbwXh2rWk_rwisD2ougLq8Antf_IvRtnUpJOM9VYlvvuv-BBfR2v9GdMfsIjzIIhcYETJGVx5Vw6PtUl7vk5AAfteYWc-rlyk2ixEsbCkvnsOTxrWc=w1920-h1080"></object> <object data="https://lh3.googleusercontent.com/uSMzNYa7Pe1tEuk3hD_Srn13H6LgNIc5c0_3kfyydZ9AvgmsAw0Ar-UnCmMoB8rkLl-pQhf79a2eKzs65nE2IlX3JiG-9B3qRKD5hZqJn4IJWYt8OT-af61Qp3Xg7450oxwr8QuXK_E=w1920-h1080"></object> </div> <br><br> <button mat-raised-button color="primary"><h4><a href="docs/st_ephraim_english.pdf">Parish Leaflet (English)</a></h4></button> <br><br> <button mat-raised-button color="primary"><h4><a href="docs/st_ephraim_russian.pdf">Parish Leaflet (Russian)</a></h4></button> </div> </div> </div> </div> <h2>Join Us</h2> <br> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12"> <p class="lead"> If you are our parishioner and you would like to receive regular newsletters and updates from us, please like <a href="https://www.facebook.com/saintephraim.org.uk/">our Facebook page</a> or subscribe to our mailing list using <a href="http://eepurl.com/chTmv5">this form</a>. </p> </div> </div> <h2>Our Saint</h2> <br> <div class="row"> <div class="col-md-3 col-sm-3 hidden-xs"> <img class="img-thumbnail center-block" src="images/ephrem.1e233ceb.jpg"> </div> <div class="col-md-9 col-sm-9 col-xs-12"> <p> Saint Ephraim was born in the city of Nisibis (today\'s Nusaybin in southeastern Turkey) in 306, just as the Great Persecution of Roman Emperor Diocletian was coming to an end. It is thought that he was born into a Christian family. He was later baptized, ordained deacon and appointed as a teacher by the first Bishop of Nisibis, St Jacob. As a teacher, St Ephraim took up the responsibility of passing on the Orthodox faith in a society where pagan religions, Judaism and early Christian sects vied with one another for adherents. He therefore set about writing Biblical commentaries, homilies and great numbers of hymns as a means of protecting the deposit of truth given to the Church. </p> <blockquote class="blockquote blockquote-reverse"> <p class="m-b-0">O Lord, may the works of your herdsman not be negated. I will not then have troubled your sheep, but as far as I was able, I will have kept the wolves away from them, and I will have built, as far as I was capable, enclosures of hymns for the lambs of your flock. I will have made a disciple of the simple and unlearned man, and I will have given him a strong hold on the herdsman\'s staff, the healers\' medicine, and the disputants\' armour.</p> <footer class="blockquote-footer">St Ephraim\'s prayer</footer> </blockquote> </div> </div>'),a.put("views/address.html",'<h2>Parish address</h2> <br> <p class="lead"> Parish Church of St Clement <br> Bridge St <br> Cambridge, UK <br> <b>CB2 1UF</b> <br><br> </p> <p> The closest parking is available at <a href="https://www.cambridge.gov.uk/park-street-car-park">Park Street</a>. </p> <br> <div class="responsive-iframe-container"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.885127973742!2d0.11581931579591534!3d52.209134979756435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d870be507904b9%3A0xc0447e392cb0193c!2sParish+Church+of+St+Clement!5e0!3m2!1sen!2suk!4v1537467675733" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> </div>'),a.put("views/building.html","<h2>Building</h2> <br> We began worshipping in the Chapel of Westcott House on Christmas Eve, 2000. <br><br> For the last 15 years we have been seeking a building of our own. Unfortunately, with the ever-increasing price of property in Cambridge and the lack of suitable properties, this has proved impossible. In the intervening years, however, our numbers have increased steadily and the Chapel has long ceased to be large enough to accommodate us. <br><br> Some time ago, we began discussions with the Anglican parish of St Clement in Bridge Street, Cambridge, with a view to using their church for our services. The terms of a Licence Agreement were finalised between St Clement's Parish and our Parish. After the approval of the Ely Diocese of the Church of England, the agreement was signed between our two parishes in <b>March 2018</b>. <br><br> <b>The work is now well under way and St Ephraim's will begin to worship at St Clement's on the weekend of 22/23 September: Great Vespers on Saturday 22 September at 17.00 and Divine Liturgy on Sunday 23 September at 0800.</b> <br><br> At St Clement's we shall have a larger space to accommodate the increasing numbers who worship in our parish. It will enable us to maintain and increase our liturgical life. We hope it will also allow us to revive our Church School as well as providing facilities for other activities during the week. <br><br> Fr Raphael Armour <br> August 2018 "),a.put("views/contacts.html",'<h2>Contact us</h2> <h3>Parish Priest</h3> <div class="row"> <div class="col-md-3 col-sm-4"> <img class="img-thumbnail" src="images/fr-raphael.73c0f162.jpg"> <br><br> </div> <div class="col-md-9 col-sm-8"> <p class="lead"> Fr Raphael Armour <br> <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:father.raphael@saintephraim.org.uk" target="_blank">father.raphael@saintephraim.org.uk</a> <br> <span class="glyphicon glyphicon-earphone"></span> 01223322498 </p> <br> <p> The spiritual leader of our parish is Father Raphael, who is the last priest to be ordained by the Archbishop Antony of Sourozh. Fr Raphael, who hails from Bedfordshire, and his American-born wife Carolyn are themselves converts to Orthodoxy. </p> </div> </div> <hr> <h3>Reader</h3> <div class="row"> <div class="col-md-12"> <p class="lead"> Peter Cremer <br> <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:reader@saintephraim.org.uk" target="_blank">reader@saintephraim.org.uk</a> <br> </p> </div> </div> <hr> <h3>Treasurer</h3> <div class="row"> <div class="col-md-3 col-sm-4"> <img class="img-thumbnail" src="images/treasurer.ea7771ac.jpg"> <br><br> </div> <div class="col-md-9 col-sm-8"> <p class="lead"> Simon Connell <br> <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:treasurer@saintephraim.org.uk" target="_blank">treasurer@saintephraim.org.uk</a> <br> </p> </div> </div> <hr> <h3>Church Warden</h3> <div class="row"> <!-- <div class="col-md-3 col-sm-4">\n<img class="img-thumbnail" src="images/vk.576999fa.jpg"/>\n<br><br>\n</div> --> <div class="col-md-9 col-sm-8"> <p class="lead"> Themba Theodore Sikhosana <br> <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:churchwarden@saintephraim.org.uk" target="_blank">churchwarden@saintephraim.org.uk</a> <!-- <br>\n<span class="glyphicon glyphicon-earphone"></span> 07780197031 --> </p> <br> <!-- <p>\nVladimir is a group leader at the <a href="http://www.sanger.ac.uk/people/directory/kiselev-vladimir-yu">Sanger Institute</a>. \n</p> --> </div> </div>'),a.put("views/donations.html",'<h2>Donate</h2> <h3>Up to £30 (collection box)</h3> A new Gift Aid Small Donations Scheme for charities allows the treasurer to add an extra 25% from the government to money placed into the collection box that is passed around the congregation. This scheme applies even if the donor does not pay UK tax. <br><br> Terms and conditions of the scheme: <ul> <li>Nobody should place more than £30 into the collection box.</li> <li>We cannot get the extra 25% on money put into the candle box. So please only use the candle money box to pay for candles.</li> </ul> <h3>More than £30</h3> If you wish to donate more than £30 then please set up a Standing Order for regular monthly giving in conjunction with filling out a Gift Aid form to reclaim the extra 25% from the government (see the links below). In this case you need to be a UK tax payer to qualify for the Gift Aid scheme. <h4>Standing Orders</h4> Using the standing order form you can set up a regular (monthly) donation to St. Ephraim the Syrian\'s church funds from your bank. Please print it, complete it and post/hand it to your bank. <br> <b><a href="docs/standing-order-form.pdf">Standing Order Form</a></b> <h4>Gift Aid</h4> The Gift Aid form can be used by the treasurer of the parish to claim back income tax that you will have paid on your donation by Standing Order. It allows the treasurer to make a claim once a year to recover tax paid. There is no additional cost to you. Please ensure that you are paying sufficient tax to cover the amount to be reclaimed each year. Read all the notes at the bottom of the form and tick the appropriate boxes as you complete the form. If in doubt email the treasurer Simon Connell (<a href="mailto:treasurer@saintephraim.org.uk" target="_blank">treasurer@saintephraim.org.uk</a>). The completed form can be handed to the treasurer or posted to Simon Connell at Father Raphael\'s address (shown at the top of the form). Do not hand this form to your bank. <br> <b><a href="docs/gift-aid-declaration.pdf">Gift Aid Declaration</a></b> <h3>PayPal</h3> You can also donate using our PayPal button. We can recover Gift Aid for these donations as long as you complete the Gift Aid form. <br><br> <form action="https://www.paypal.com/cgi-bin/webscr" method="post"> <input type="hidden" name="cmd" value="_s-xclick"> <input type="hidden" name="hosted_button_id" value="4ZP4P26B8ZCEA"> <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal # 14 The safer, easier way to pay online."> <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"> </form>'),a.put("views/helpers.html",'<h2>How does the parish work?</h2> <br> <div class="row"> <div class="col-md-12"> <p> As St Paul reminds us, the Church is a body (1 Corinthians 12:12-31). Each member has a different function, some more glamorous than others, but all are vital to the functioning of the whole. As the Body of Christ, the Church is more than the sum of its parts; but as members of this Body we all contribute from the ‘talent’ entrusted to each one of us. This shared responsibility for building up the Church is a very practical reality in our parish, which has always been entirely self-supporting financially, with no funding from the Diocese of Sourozh or any other outside source. The parish depends on all its members giving both financial support and their time and skills. We are called to nurture and encourage those who may go on to serve as clergy, as well as ensuring that the parish has funds to support the clergy it needs. </p> </div> </div> <h2>Please help</h2> <br> <p>If you are a member of the parish and would like to help, please fill in the following form:</p> <br> <br> <div class="row" align="center"> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfnBTh4lrP8jpGLQAuRWD5zxYLmkqdqEhvsMLZZy611KGGMOQ/viewform?embedded=true" width="640" height="1335" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> </div>'),a.put("views/main.html",'<br> <div class="alert alert-info" role="alert"> <h3 class="alert-heading">Service Booking</h3> <p> Due to UK government restrictions to counter the Covid-19, pandemic, we are currently holding services with a reduced number attending. <br><br> Many of our people wish to come to the Divine Liturgy every Sunday. The current UK government restrictions, however, make this impossible. Taking into account the number of our parishioners, everyone will be able to attend the Divine Liturgy once every two weeks, provided the following instructions are followed and everyone books accordingly. You are always welcome to make a booking to attend Great Vespers on Saturday. Please be mindful of the restriction, when making a booking. <br><br> There has also been a change to our booking system. You and each member of your family now needs to make a separate booking. Once a booking is made each person you will receive a confirmatory e-mail which must be shown to the Steward, either on your mobile phone or in hard copy, before you can be admitted to the service. The booking system manager will ensure that the total number of bookings for a service does not exceed the limit. Therefore, if you happen to overbook, your extra booking (e.g. a second Divine Liturgy in consecutive weeks) will be cancelled and you will be notified of this via e-mail. If your booking is cancelled, you will not be admitted to attend that specific service. <br><br> Please also read the following documents: <ul> <li><a href="docs/flower-01.pdf" class="alert-link">Instructions for set-up and flower arranging.</a></li> <li><a href="docs/people-07.pdf" class="alert-link">Instructions for the people.</a></li> <li><a href="docs/altar-04.pdf" class="alert-link">Instructions for the Altar.</a></li> </ul> <br> If you wish to submit a prayer request with a list of names to be remembered in the Divine Liturgy, please send an e-mail with no more than 20 names (Orthodox living + departed) and the Divine Liturgy date you wish the names to be remembered on to the following e-mail address: <a href="mailto:prayer.requests@saintephraim.org.uk" class="alert-link" target="_blank">prayer.requests@saintephraim.org.uk</a> </p> <hr> <p class="mb-0"> To book a place at a service please click on the button below. </p> <br> <p> <a class="btn btn-primary btn-lg" href="https://saintephraim.simplybook.it/" role="button">Book!</a> </p> </div> <!-- <div class="alert alert-info" role="alert">\n    <h3 class="alert-heading">SERVICES DURING LOCKDOWN</h3>\n    <p>\n        The Government have announced a second lockdown from 5 November until 2 December, 2020.\n        <br><br>\n        During that time we shall stream our services, via Zoom. Services will be streamed from St Clement’s, at the times shown on the website, but behind closed doors. Only a minimum of people - priest, servers, reader, singers - will be allowed under government regulations to be in the church during the service.\n        <br><br>\n        There will be separate Zoom links for Great Vespers and for the Divine Liturgy. These links are as follows:\n        <br><br>\n        <b>Great Vespers</b>:\n        <br>\n        <a href="https://zoom.us/j/92306489780?pwd=cWx5U21Cbmx2bC9zbFpCQUVwOGVwUT09" class="alert-link">https://zoom.us/j/92306489780?pwd=cWx5U21Cbmx2bC9zbFpCQUVwOGVwUT09</a>\n        <br>\n        or\n        <br>\n        Meeting ID: 923 0648 9780\n        <br>\n        Passcode: 331234\n        <br><br>\n        <b>Divine Liturgy</b>:\n        <br>\n        <a href="https://zoom.us/j/98210152394?pwd=ZFc0azVXR3oyUHdsUXFtRzRpZGlhQT09" class="alert-link">https://zoom.us/j/98210152394?pwd=ZFc0azVXR3oyUHdsUXFtRzRpZGlhQT09</a>\n        <br>\n        or\n        <br>\n        Meeting ID: 982 1015 2394\n        <br>\n        Passcode: 407092\n        <br><br>\n        I must emphasise that government regulation require the services to be celebrated behind closed doors and that only those taking part in the service can be admitted to the church. Please, therefore, do not come to the services unless you are asked to do.\n        <br><br>\n        Fr Raphael\n    </p>\n</div> --> <h2>Welcome to our website!</h2> <br> <div class="row"> <div class="col-md-6 col-sm-6"> <p class="lead"> We are an Orthodox Parish in Cambridge, UK of the <a href="http://www.sourozh.org/">Diocese of Sourozh</a> - the diocese of the <a href="https://en.wikipedia.org/wiki/Russian_Orthodox_Church">Russian Orthodox Church</a> which covers the British Isles. Our parish was founded in <b>1973</b> by <a href="https://en.wikipedia.org/wiki/Anthony_of_Sourozh">Metropolitan Anthony of Sourozh</a>. We celebrate Great Vespers or Vigil each Saturday at 17:00 and the Divine Liturgy each Sunday at 08:00. Services are also celebrated on the great feasts of the Orthodox Church. </p> <h3>The Parish</h3> <p> We are an international Orthodox Parish. The services in the parish are, for the most part in English. Our parishioners come from Russia, Romania, Bulgaria, Serbia, Greece, Bulgaria and Cyprus with others, mainly converts, from the UK, Germany, Switzerland, Zimbabwe, Australia, Hong Kong, South Africa and the USA. Each year several University students become part of the parish during their studies in Cambridge. From the 30 people who worshipped at the Divine Liturgy in 2001, on most Sundays we now have some 120 people, about 20% being under the age of eight! </p> <h3>Join Us</h3> <p> If you are just a visitor, you are welcome to explore the website and to learn more about the Parish. If you are our parishioner and you would like to receive regular newsletters and updates from us, please like our Facebook page or subscribe to our mailing list using <a href="http://eepurl.com/chTmv5">this form</a>. We are a Registered Charity <a href="http://apps.charitycommission.gov.uk/Showcharity/RegisterOfCharities/CharityWithoutPartB.aspx?RegisteredCharityNumber=1111702&SubsidiaryNumber=0">#1111702</a>. </p> <!-- <img class="img-thumbnail" src="images/parish-photo1.jpg"/> --> </div> <div class="hidden-xs hidden-sm col-md-1 col-sm-6"> </div> <div class="col-md-5 col-sm-6"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsaintephraim.org.uk%2F&tabs=timeline&width=340&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true"></iframe> </div> </div>'),a.put("views/services.html",'<h2>Service timetable</h2> <br> <div class="row"> <div class="col-md-10"> <div class="embed-responsive embed-responsive-4by3"> <iframe src="https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=saintephraim.org.uk%40gmail.com&amp;color=%238C500B&amp;ctz=Europe%2FLondon" style="border-width:0" class="embed-responsive-item" frameborder="0" scrolling="no"></iframe> </div> </div></div>')}]);