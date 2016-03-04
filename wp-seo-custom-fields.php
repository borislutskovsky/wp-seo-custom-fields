<?php
/*
 * Plugin Name: SEO Advanced Custom Fields Analyzer
 * Description: a small plugin that adds ACF text fields into the SEO Content Analyzer
 * Version: 1.0
 * Author: Boris Lutskovsky
 * Author URI: http://www.iamboris.com
 * License: MIT
 */

function wp_seo_custom_fields_admin_scripts($hook){

  if($hook == 'post.php') {
    wp_enqueue_script( 'seo_custom_fields', plugin_dir_url(__FILE__).'/wp-seo-custom-fields.js', true );
  }
}
add_action('admin_enqueue_scripts', 'wp_seo_custom_fields_admin_scripts');
