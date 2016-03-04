(function(){

  WP_SEO_AdvancedCustomFields_Analyzer = function(){
    YoastSEO.app.registerPlugin('WP_SEO_AdvancedCustomFields_Analyzer', {status: 'ready'});

    /**
     * @param modification    {string}    The name of the filter
     * @param callable        {function}  The callable
     * @param pluginName      {string}    The plugin that is registering the modification.
     * @param priority        {number}    (optional) Used to specify the order in which the callables
     *                                    associated with a particular filter are called. Lower numbers
     *                                    correspond with earlier execution.
     */
    YoastSEO.app.registerModification('content', function(data){
      var content = data;
      var fields = jQuery('textarea[id*="acf-field"]'); //look for acf-fields that are of type textarea
      for(var i = 0; i < fields.length; i++) {
        content += "<p>"+jQuery(fields[i]).html()+"</p>";
      };
      return content;
    }, 'WP_SEO_AdvancedCustomFields_Analyzer', 5);
  };

  //check for YoastSEO to be ready. It takes a few seconds
  function checkSEO() {
    if(typeof(YoastSEO) == 'undefined'){
      setTimeout(checkSEO, 1000);
      return;
    }
    if(typeof(YoastSEO.app) == 'undefined') {
      setTimeout(checkSEO, 1000);
      return;
    }
    var acfAnalyzer = new WP_SEO_AdvancedCustomFields_Analyzer();

  }
  checkSEO();
})();