'use strict';

require('./_thumbnail-container.scss');

module.exports = {
  template: require('./thumbnail-container.html'),
  controllerAs: 'thumbnailContainerCtrl',
  bindings: {
    gallery: '=',
  },
  controller: ['$log', '$rootScope', 'galleryService', function($log, $rootScope, galleryService) {
    this.$onInit = () => {
      $log.debug('Thumbnail Container Controller');


    };
  }],
};
