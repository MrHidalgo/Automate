

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
const initWebFontLoader = () => {

	/**
   * @description
	 */
	WebFont.load({
    google: {
      families: [
        'Lora:400,700',
				'Open+Sans:300,400,500,600,700,800'
      ]
    }
  });

	/**
   * @description
	 */
  // const WebFontConfig = {
  //   custom: {
  //     families: [
  //       'Lato:n1,n3,n4,n5,n6,n7,n9'
  //     ]
  //   }
  // };

};
