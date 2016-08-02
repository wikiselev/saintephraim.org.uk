'use strict';

/**
 * @ngdoc directive
 * @name parishWebsiteApp.directive:pimax
 * @description
 * # pimax
 */
angular.module('parishWebsiteApp')
  .directive('googleAlbums', function () {
      return {
          restrict: 'A',
          template: '<div class="pimax"></div>',
          link: function (scope, element, attrs) {
              element.pimax({
				apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
				//user:"https://plus.google.com/u/0/117915201833213417210",		
				//user:"https://plus.google.com/104505314527173869679",		
				user:"https://plus.google.com/111969728453042151069",

				album:[
					// "https://picasaweb.google.com/data/feed/base/user/111969728453042151069/albumid/6313983496889306865?alt=rss&kind=photo&hl=en_US",
					// "https://picasaweb.google.com/data/feed/base/user/111969728453042151069/albumid/6313990312365930497?alt=rss&kind=photo&hl=en_US"
				],
				exclude:[
					// "https://picasaweb.google.com/data/feed/base/user/112592709425670873637/albumid/6134954073736209025?alt=rss&kind=photo&hl=en_US"
				],
				selectedTab:"l",
				alwaysUseDropdown:false,
				skin:"grey",
				showSquareThumbnails:true,
				showViewCount:true,
				
				displayImageCaption:true,
				displayAlbumCaption:true,
				displaySinglePhotoAlbums:true,
				searchBoxScope:"user",

				maxResults:9,
				innerOffset:30,
				outerOffset:30,
				minItemWidth:200,
				maxItemWidth:300,
				maxContainerWidth:5000
			});
          }
      };
  });
