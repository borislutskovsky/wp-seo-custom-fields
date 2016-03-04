<?php

function wp_seo_custom_fields_admin_scripts($hook){
  if($hook == 'post.php') {
    wp_enqueue_script( 'seo_custom_fields', plugin_dir_url().'/seo_custom_fields.js', true );
  }
}
add_action('admin_enqueue_scripts', 'wp_seo_custom_fields_admin_scripts');
?>
