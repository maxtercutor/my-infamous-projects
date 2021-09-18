<?php

/**

 * main functions and definitions

 *

 * @link https://developer.wordpress.org/themes/basics/theme-functions/

 *

 * @package main

 */




/**

 * Set the content width in pixels, based on the theme's design and stylesheet.

 *

 * Priority 0 to make it available to lower priority callbacks.

 *

 * @global int $content_width

 */

function main_content_width() {

	// This variable is intended to be overruled from themes.

	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.

	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound

	$GLOBALS['content_width'] = apply_filters( 'main_content_width', 640 );

}

add_action( 'after_setup_theme', 'main_content_width', 0 );



/**

 * Register widget area.

 *

 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar

 */







function main_scripts() {

	wp_enqueue_style( 'main-style', '/wp-content/themes/stroyway-theme/style.css' );

}

add_action( 'wp_enqueue_scripts', 'main_scripts' );
