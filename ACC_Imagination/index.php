<?php get_header();
$home_post = get_page_by_title( 'home' );

?>

<style>

            .hero-carousel {
            }

            .hero-carousel article {
                position: relative;
            }
            .hero-carousel .carousel-info {
                background: #fff;
                opacity: .8;
                width: 100%;
                padding: 2%;
                position: absolute;
                bottom: 0;
                z-index: 1;
            }


            .hero-carousel .carousel-title {
                font-size: 1.3em;
            }

            .hero-carousel .carousel-excerpt {
                font-size: .9em;
            }


            .hero-carousel .btn {
                width: 100%;
                padding: 0;
            }
</style>

 <!-- Header -->
 <div class="row">
     <div class="large-12 columns fullWidth">
     <section id="featured">
        <div class="hero">
            <div class="hero-carousel">
                <?php //fetch featured posts from wordpress
                $feat_posts = get_field( 'featured_posts', $home_post->ID );
                foreach( $feat_posts as $post ) :

                $wp_post_img = "";


                if( get_field('alt_featured_image') ) {
                    $wp_post_img_obj = get_field('alt_featured_image');
                    $wp_post_img = $wp_post_img_obj['url'];
                    $wp_post_img_caption =  $wp_post_img_obj['caption'];
                } else {
                    $wp_post_img = getFeaturedImageURL($post->ID, 'large'); 
                    $wp_post_img_caption =  wp_get_attachment_metadata(get_post_thumbnail_id( $post->ID ))->img_meta->caption;
                }

                $wp_post_type = "";

                if( get_field('post_type_label') == 'Default' || get_field('post_type_label') == '' ) {
                    $wp_post_type = $post->post_type;               
                } else {
                    $wp_post_type = get_field('post_type_label');
                }

                ?>
                <article>
                    <a href="<?php echo get_permalink($post->ID) ?>" rel="bookmark" title="<?php echo $post->post_title; ?>"><img src="<?php echo $wp_post_img; ?>" /></a>
                    <div class="carousel-info">
                        <h3 class="carousel-title"><a href="<?php echo get_permalink($post->ID) ?>" rel="bookmark" title="<?php echo $post->post_title; ?>"><?php the_title(); ?></a></h3>
                        <p class="carousel-excerpt"><?php echo $post->post_excerpt; ?></p>
                    </div>  
                </article>                  
                <?php endforeach; ?>  
                    </div>
                </div>
            </section>
     </div>
 



     
</div>
 <!-- End Header -->

<!-- Three-up Content Blocks --> 
  <div class="row threeBlocks">
    <div class="large-4 columns">
      <span class="featuredColumn">
        <h4 class="FeaturedHeader">WE ARE</h4>
      <p>A new center launched by the <span class="FeaturedBold"><a class="su-link" href="http://www.ucsd.edu">UNIVERSITY OF CALIFORNIA, SAN DIEGO</a></span> and the<span class="FeaturedBold"><a  class="su-link" href="http://www.clarkefoundation.org/"> ARTHUR C. CLARKE FOUNDATION</a></span> to understand, enhance and enact the gift of human
imagination.</p>
          </span>
        <a href="/about" class="radius button FeaturedButton">
                Read More &nbsp; <i class="fa fa-angle-right"></i></a>
       
    </div>
    
    <div class="large-4 columns">
        <div class="featuredColumn">
      <h4 class="FeaturedHeader">OUR MISSION</h4>
      <p>Is to be a magnet for the study of creativity and imagination; and to sponsor research at the neural, cognitive, social and cutural levels to enable society to harness imagination better. </p> </div>
          <a href="/research" class="radius button FeaturedButton">
                Read More &nbsp; <i class="fa fa-angle-right"></i></a>
    </div>
    






    <div class="large-4 columns">
        <div class="featuredColumn">
        <h6 class="FeaturedHeader">UPCOMING EVENTS</h6>
        <div class="row">
            
            <div class="col-sm-6" id="event-list">

                <?php
                    $news_posts = get_posts( array(
                        'posts_per_page' => 2,
                        'meta_key' => 'news_date',
                        'orderby' => 'meta_value_num',
                        'post_type' => 'news'

                    ));

                    foreach ($news_posts as $news_post):
                        $news_date_obj = DateTime::createFromFormat('Ymd', get_field('news_date', $news_post->ID));
                        $news_date = date_timestamp_get($news_date_obj);
                ?>
                
                <!-- Events include file --> 
                 <div class="event postcard-left">
                    <div class="event-date" style="display:inline-block">
                        <span class="event-month"><?php echo date('M',$news_date); ?></span> 
                        <span class="event-day"><?php echo date('j',$news_date); ?></span>
                    </div>
                    <div class="event-text" style="display:inline-block">
                    <h3>
                        <a href="<?php echo get_permalink($news_post->ID); ?>" class="eventbox FeaturedBold su-link " ><?php echo $news_post->post_title; ?></a></h3>
                        <p class="timestamp"><?php echo get_field('news_location', $news_post); ?></p>
                    </div>
                </div>
                <hr id="eventLine">                
            <?php endforeach; ?>

               
                
            </div>
            
        </div>
        </div>
        <a href="/news" class="radius button FeaturedButton">
                    View Full List &nbsp; <i class="fa fa-angle-right"></i>
                </a>    
    </div>

    </div>


</div><!--END WRAPPER-->


	<?php get_footer() ?>

  </body>
</html>





