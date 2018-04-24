"use strict";angular.module("parishWebsiteApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","mailchimp"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contacts",{templateUrl:"views/contacts.html",controller:"ContactsCtrl",controllerAs:"contacts"}).when("/services",{templateUrl:"views/services.html"}).when("/address",{templateUrl:"views/address.html",controller:"AddressCtrl",controllerAs:"address"}).when("/helpers",{templateUrl:"views/helpers.html",controller:"HelpersCtrl",controllerAs:"helpers"}).when("/building",{templateUrl:"views/building.html",controller:"BuildingCtrl",controllerAs:"building"}).when("/donations",{templateUrl:"views/donations.html",controller:"DonationsCtrl",controllerAs:"donations"}).otherwise({redirectTo:"/"})}]).config(["$locationProvider",function(a){a.hashPrefix("")}]),angular.module("parishWebsiteApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("AboutCtrl",["$scope",function(a){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("parishWebsiteApp").controller("ServCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("ContactsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("IndexCtrl",["$scope","$location",function(a,b){a.isActive=function(a){var c=a===b.path();return c}}]),angular.module("parishWebsiteApp").controller("AddressCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("HelpersCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("BuildingCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("DonationsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").run(["$templateCache",function(a){a.put("views/about.html",'<h2>History</h2> <br> <div class="row"> <div class="col-md-6 col-sm-6 col-xs-12"> <p> In 1973, Metropolitan Anthony came to receive an honorary doctorate from the University. During his visit Metropolitan Anthony also served the Divine Liturgy, for the small number of Russian Orthodox Christians living here which as far as we know, was the first occasion on which the Liturgy was served in Cambridge and we regard Vladyka Anthony\'s visit as the founding event in the life of our parish. A priest was sent from London to celebrate the Liturgy every month. By June 1978, Metropolitan Anthony gave the Community its own antimension. The community was placed in the care of Archpriest Basil Osborne who came to Cambridge from Oxford one Saturday each month, for over 20 years, to serve the Liturgy and care for the people. <br><br> Fr John Jillions became the priest of the parish in 1998. We had no permanent home until, in December 2000, the community began to worship in the Chapel of Westcott House, an Anglican Theological College. This arrangement was intended to last until the end of 2001 but, more than 15 years later, we still worship there! Fr Raphael Armour was ordained to serve as a second priest to the Community in July 2001. In 2002, the community was received as a Parish of the Sourozh Diocese. Fr Raphael succeed Fr John as Rector of the Parish the following year. Fr Evgeny Selensky was appointed assistant priest of the parish in 2012. </p> <br> </div> <div class="col-md-6 col-sm-6 col-xs-12"> <div class="row"> <div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1"> <!-- 16:9 aspect ratio --> <div class="embed-responsive embed-responsive-4by3"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/videoseries?list=PLNRTQPmTft_EyCih27tuXhDDrA0PeXxF5" frameborder="0" allowfullscreen></iframe> </div> </div> </div> <br> <div class="row"> <div class="col-md-10 col-md-offset-1"> <a href="https://goo.gl/photos/hKzibvffCA5rinzx6">Parish Photos 1</a> <br> <a href="https://goo.gl/photos/266gge5vL7yCd52w6">Parish Photos 2</a> <br> <a href="https://goo.gl/photos/NsAiupdvgHDjQYNq7">Parish Photos 3</a> <br> <a href="https://goo.gl/photos/YCNvCT8KKbpdELzF9">Parish Photos 4</a> <br> <a href="https://goo.gl/photos/xzxaxtgp9Z8g2AoG6">Celia (Marina) Xie\'s baptism</a> </div> </div> </div> </div> <h2>Our saint</h2> <br> <div class="row"> <div class="col-md-3 col-sm-3 hidden-xs"> <img class="img-thumbnail center-block" src="images/ephrem.1e233ceb.jpg"> </div> <div class="col-md-9 col-sm-9 col-xs-12"> <p> Saint Ephraim was born in the city of Nisibis (today\'s Nusaybin in southeastern Turkey) in 306, just as the Great Persecution of Roman Emperor Diocletian was coming to an end. It is thought that he was born into a Christian family. He was later baptized, ordained deacon and appointed as a teacher by the first Bishop of Nisibis, St Jacob. As a teacher, St Ephraim took up the responsibility of passing on the Orthodox faith in a society where pagan religions, Judaism and early Christian sects vied with one another for adherents. He therefore set about writing Biblical commentaries, homilies and great numbers of hymns as a means of protecting the deposit of truth given to the Church. </p> <blockquote class="blockquote blockquote-reverse"> <p class="m-b-0">O Lord, may the works of your herdsman not be negated. I will not then have troubled your sheep, but as far as I was able, I will have kept the wolves away from them, and I will have built, as far as I was capable, enclosures of hymns for the lambs of your flock. I will have made a disciple of the simple and unlearned man, and I will have given him a strong hold on the herdsman\'s staff, the healers\' medicine, and the disputants\' armour.</p> <footer class="blockquote-footer">St Ephraim\'s prayer</footer> </blockquote> </div> </div>'),a.put("views/address.html",'<h2>Parish address</h2> <br> <p class="lead"> Westcott House <br> Jesus Lane <br> Cambridge, UK <br> <b>CB5 8BP</b> <br><br> </p> <p> After entering the Westcott House from Jesus Lane please walk along the garden and turn left at the end of the road (<b>A-B</b> path on the map below). <br><br> The closest parking is available at <a href="https://www.cambridge.gov.uk/park-street-car-park">Park Street</a> (<b>P</b> sign on the map below). </p> <br> <div class="responsive-iframe-container"> <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1B87lHJA4iqwhCobLSK46IK0DKO8"></iframe> </div>'),a.put("views/building.html","<h2>Building</h2> <br> We began worshipping in the Chapel of Westcott House on Christmas Eve of 2000. <br><br> For the last 15 years we have been seeking to have a church building of our own. Unfortunately, with the ever-increasing price of property in Cambridge and the lack of suitable properties, this has proved impossible. In the intervening years, however, our numbers have increased steadily and the Chapel has long ceased large enough to accommodate us. <br><br> Some time ago, we began discussions with the Anglican parish of St Clement in Bridge Street, Cambridge, with a view to using their church for our services. The terms of a Licence Agreement were finalised between St Clement's Parish and our Parish. After the approval of the Ely Diocese of the Church of England, the agreement was signed between our two parishes in <b>March 2018</b>. <br><br> Various restoration work is needed at St Clement's Church before we move there. The work has already begun and the intention is that St Ephraim's will start worshiping at St Clement's by <b>October 2018</b>. <br><br> At St Clement's we shall have a larger space to accommodate the increasing numbers who worship in our parish and, at the same time, will allow us to maintain and increase our liturgical life. We hope it will also allow us to revive our Church School as well as providing facilities for other activities during the week. <br><br> Fr Raphael Armour <br> April 2018 "),a.put("views/contacts.html",'<h2>Contact us</h2> <h3>Parish Priest</h3> <div class="row"> <div class="col-md-3 col-sm-4"> <img class="img-thumbnail" src="images/fr-raphael.73c0f162.jpg"> <br><br> </div> <div class="col-md-9 col-sm-8"> <p class="lead"> Fr Raphael Armour <br> <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:father.raphael@saintephraim.org.uk" target="_blank">father.raphael@saintephraim.org.uk</a> <br> <span class="glyphicon glyphicon-earphone"></span> 01223322498 </p> <br> <p> The spiritual leader of our parish is Father Raphael, who is the last priest to be ordained by the Archbishop Antony of Sourozh. Fr Raphael, who hails from Bedfordshire, and his American-born wife Carolyn are themselves converts to Orthodoxy. </p> </div> </div> <hr> <h3>Assistant Priest</h3> <div class="row"> <div class="col-md-3 col-sm-4"> <img class="img-thumbnail" src="images/fr-evgeniy.41b96952.jpg"> <br><br> </div> <div class="col-md-9 col-sm-8"> <p class="lead"> Fr Evgeny Selensky <br> <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:father.evgeny@saintephraim.org.uk" target="_blank">father.evgeny@saintephraim.org.uk</a> <br> <span class="glyphicon glyphicon-earphone"></span> 07914143283 </p> <br> <p> Father Evgeny is our second priest who is kindly visiting us once a month to serve to the needs of those parish members who would like to receive services in the Russian language. <br> Fr Evgeny is interested in the scientific and philosophical aspects of modern origin of life research (please see <a href="http://orthodoxchristian-blogger.blogspot.com">http://orthodoxchristian-blogger.blogspot.com</a> for his personal bilingual blog). </p> </div> </div> <hr> <h3>Reader</h3> <div class="row"> <div class="col-md-12"> <p class="lead"> Peter Cremer <br> <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:reader@saintephraim.org.uk" target="_blank">reader@saintephraim.org.uk</a> <br> </p> </div> </div> <hr> <h3>Treasurer</h3> <div class="row"> <div class="col-md-3 col-sm-4"> <img class="img-thumbnail" src="images/treasurer.ea7771ac.jpg"> <br><br> </div> <div class="col-md-9 col-sm-8"> <p class="lead"> Simon Connell <br> <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:treasurer@saintephraim.org.uk" target="_blank">treasurer@saintephraim.org.uk</a> <br> </p> </div> </div> <hr> <h3>Church Warden</h3> <div class="row"> <div class="col-md-3 col-sm-4"> <img class="img-thumbnail" src="images/vk.576999fa.jpg"> <br><br> </div> <div class="col-md-9 col-sm-8"> <p class="lead"> Vladimir Kiselev <br> <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:churchwarden@saintephraim.org.uk" target="_blank">churchwarden@saintephraim.org.uk</a> <br> <span class="glyphicon glyphicon-earphone"></span> 07780197031 </p> <br> <p> Vladimir is a group leader at the <a href="http://www.sanger.ac.uk/people/directory/kiselev-vladimir-yu">Sanger Institute</a>. </p> </div> </div>'),a.put("views/donations.html",'<h2>Donations</h2> <h3>Up to £20 (collection box)</h3> A new Gift Aid Small Donations Scheme for charities allows the treasurer to add an extra 25% from the government to money placed into the collection box that is passed around the congregation. This scheme applies even if the donor does not pay UK tax. <br><br> Terms and conditions of the scheme: <ul> <li>Nobody should place more than £20 into the collection box.</li> <li>We cannot get the extra 25% on money put into the candle box. So please only use the candle money box to pay for candles.</li> </ul> <h3>More than £20</h3> If you wish to donate more than £20 then please set up a Standing Order for regular monthly giving in conjunction with filling out a Gift Aid form to reclaim the extra 25% from the government (see the links below). In this case you need to be a UK tax payer to qualify for the Gift Aid scheme. <h4>Standing Orders</h4> Using the standing order form you can set up a regular (monthly) donation to St. Ephraim the Syrian\'s church funds from your bank. Please print it, complete it and post/hand it to your bank. <br> <b><a href="docs/standing-order-form.pdf">Standing Order Form</a></b> <h4>Gift Aid</h4> The Gift Aid form can be used by the treasurer of the parish to claim back income tax that you will have paid on your donation by Standing Order. It allows the treasurer to make a claim once a year to recover tax paid. There is no additional cost to you. Please ensure that you are paying sufficient tax to cover the amount to be reclaimed each year. Read all the notes at the bottom of the form and tick the appropriate boxes as you complete the form. If in doubt email the treasurer Simon Connell (<a href="mailto:treasurer@saintephraim.org.uk" target="_blank">treasurer@saintephraim.org.uk</a>). The completed form can be handed to the treasurer or posted to Simon Connell at Father Raphael\'s address (shown at the top of the form). Do not hand this form to your bank. <br> <b><a href="docs/gift-aid-declaration.pdf">Gift Aid Declaration</a></b> <h3>PayPal</h3> You can also donate using our PayPal button. We can recover Gift Aid for these donations as long as you complete the Gift Aid form. <br><br> <form action="https://www.paypal.com/cgi-bin/webscr" method="post"> <input type="hidden" name="cmd" value="_s-xclick"> <input type="hidden" name="hosted_button_id" value="4ZP4P26B8ZCEA"> <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal # 14 The safer, easier way to pay online."> <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"> </form>'),a.put("views/helpers.html",'<h2>Helpers</h2> <br> <div class="row"> <div class="col-md-12"> <p> Our Parish vitally depends on the work of our volunteered helpers. However, the number of helpers is not large and each of them has quite a lot of tasks per week. Having more helpers would help us to reduce the amount of work and to get more parishioners involved in the Parish life. If you are a regular parishioner and you would like to help, please consider the following list of jobs and contact our church warden (<a href="mailto:churchwarden@saintephraim.org.uk?Subject=A%20new%20helper" target="_blank">churchwarden@saintephraim.org.uk</a>).</p> </div> </div> <hr> <div class="row" align="center"> <div class="col-md-4 col-sm-4 col-xs-12"> <h4>Set-up</h4> <p>Since we are renting the church, we need to set up and clear up the church every week. Set-ups usually happen on Saturday afternoons before vespers.</p> </div> <div class="col-md-4 col-sm-4 col-xs-12"> <h4>Prosphora</h4> <p>Prosphoras have to be prepared for every Liturgy. There is no Liturgy without prosphora and therefore this job is one of the most important ones.</p> </div> <div class="col-md-4 col-sm-4 col-xs-12"> <h4>Altar service</h4> <p>There are quite a lot of jobs in the Altar during the services. It is not possible for Fr Raphael to serve the Liturgy or long Vespers alone.</p> </div> </div> <hr> <div class="row" align="center"> <div class="col-md-4 col-sm-4 col-xs-12"> <h4>Flowers</h4> <p>We always decorate our Parish with flowers during the Liturgy or Vespers. Usually one needs to bring the new flowers and change the old ones on Saturday afternoons before the Vespers.</p> </div> <div class="col-md-4 col-sm-4 col-xs-12"> <h4>Candle/paper burning</h4> <p>Used candles and papers have to be burnt and should not be thrown away to the bin. We always have them after every Liturgy.</p> </div> <div class="col-md-4 col-sm-4 col-xs-12"> <h4>Lunches and feasts</h4> <p>We have about 5-7 Parish lunches per year and currently there are only 2 families that can organize them.</p> </div> </div>'),a.put("views/main.html",'<h2>Welcome to our website!</h2> <br> <div class="row"> <div class="col-md-6 col-sm-6"> <p class="lead"> We are an Orthodox Parish in Cambridge, UK of the <a href="http://www.sourozh.org/">Diocese of Sourozh</a> - the diocese of the <a href="https://en.wikipedia.org/wiki/Russian_Orthodox_Church">Russian Orthodox Church</a> which covers the British Isles. Our parish was founded in <b>1973</b> by <a href="https://en.wikipedia.org/wiki/Anthony_of_Sourozh">Metropolitan Anthony of Sourozh</a>. We celebrate Great Vespers or Vigil each Saturday at 17:00 and the Divine Liturgy each Sunday at 10:00. Services are also celebrated on the great feasts of the Orthodox Church. </p> <h3>The Parish</h3> <p> We are an international Orthodox Parish. The services in the parish are, for the most part in English. Our parishioners come from Russia, Romania, Bulgaria, Serbia, Greece, Bulgaria and Cyprus with others, mainly converts, from the UK, Germany, Switzerland, Zimbabwe, Australia, Hong Kong, South Africa and the USA. Each year several University students become part of the parish during their studies in Cambridge. From the 30 people who worshipped at the Divine Liturgy in 2001, on most Sundays we now have some 120 people, about 20% being under the age of eight! </p> <h3>Join Us</h3> <p> If you are just a visitor, you are welcome to explore the website and to learn more about the Parish. If you are our parishioner and you would like to receive regular newsletters and updates from us, please like our Facebook page or subscribe to our mailing list using the form below. </p> <!-- <img class="img-thumbnail" src="images/parish-photo1.jpg"/> --> </div> <div class="hidden-xs hidden-sm col-md-1 col-sm-6"> </div> <div class="col-md-5 col-sm-6"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsaintephraim.org.uk%2F&tabs=timeline&width=340&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true"></iframe> </div> </div>'),a.put("views/services.html",'<h2>Service timetable</h2> <br> <div class="alert alert-warning"> <p> Please note that due to security reasons access to the Westcott House out of business hours is limited and the gate will only be open at the times shown below the calendar. </p> </div> <div class="row"> <div class="col-md-10"> <div class="embed-responsive embed-responsive-4by3"> <iframe src="https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=saintephraim.org.uk%40gmail.com&amp;color=%238C500B&amp;ctz=Europe%2FLondon" style="border-width:0" class="embed-responsive-item" frameborder="0" scrolling="no"></iframe> </div> </div> <!-- <div class="hidden-md hidden-sm">\n	<div class="embed-responsive embed-responsive-4by3">\n		<iframe src="https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=saintephraim.org.uk%40gmail.com&amp;color=%238C500B&amp;ctz=Europe%2FLondon" style="border-width:0" class="embed-responsive-item" frameborder="0" scrolling="no"></iframe>\n	</div>\n</div> --> </div> <br> <h2>Gate opening times</h2> <hr> <div class="row"> <div class="col-md-6"> <h3>Saturday</h3> <h4>Morning (in case of Liturgy)</h4> <p> 09:00 - gate opens once (for those who would like to confess or pray). <br> 09:20 - gate opens once (for those who would like to confess or pray). <br> 09:30 - 10:05 - gate is open and supervised. <h4>Afternoon</h4> 16:40 - 17:05 - gate is open and supervised. <br> 17:20 - gate opens once for late-comers. </p> </div> <div class="col-md-6"> <p> <h3>Sunday</h3> 09:00 - gate opens once (for those who would like to confess or pray). <br> 09:20 - gate opens once (for those who would like to confess or pray). <br> 09:30 - 10:05 - gate is open and supervised. <br> 10:20 - gate opens once. <br> 10:30 - gate opens once. </p> </div> </div> <hr> <div class="row"> <div class="col-md-12"> <p> <h3>Weekdays</h3> <h4>Mornings (in case of Liturgy)</h4> The gate is always open from 09:00 for normal business. <h4>Evenings (in case of Vespers)</h4> The gate is opened 15 minutes before the start of the service and then locked five minutes after the service begins. </p> <h4>People can let themselves out at any time but must lock the gate as they leave.</h4> </div> </div>')}]);