<?php
    


    // My function to modify the main query object
    function my_modify_main_query( $query ) {

        if($query->get('post_type') != 'case' && is_post_type_archive('case')) return; //only on archive case !!!

        $query->query_vars['posts_per_page'] = -1;
        $tax_query =[];

        if(isset($_GET['cat-client']) && $_GET['cat-client']){
            $client_tax_query = [
                'taxonomy' => 'client',
                'field' => 'slug',
                'terms' => sanitize_text_field($_GET['cat-client']),
                'operator' => 'IN'
            ];
    
            $tax_query[] = $client_tax_query;
        }


        if(isset($_GET['cat-territory']) && $_GET['cat-territory']){
            $territory_tax_query = [
                'taxonomy' => 'territory',
                'field' => 'slug',
                'terms' => sanitize_text_field($_GET['cat-territory']),
                'operator' => 'IN'
            ];
    
            $tax_query[] = $territory_tax_query;
        }

        if(isset($_GET['cat-sector']) && $_GET['cat-sector']){
            $sector_tax_query = [
                'taxonomy' => 'sector',
                'field' => 'slug',
                'terms' => sanitize_text_field($_GET['cat-sector']),
                'operator' => 'IN'
            ];
    
            $tax_query[] = $sector_tax_query;
        }

        if(isset($_GET['cat-service']) && $_GET['cat-service']){
            //var_dump($_GET['service']); die();
            $service_tax_query = [
                'taxonomy' => 'category',
                'field' => 'slug',
                'terms' => sanitize_text_field($_GET['cat-service']),
                'operator' => 'IN'
            ];
    
            $tax_query[] = $service_tax_query;
        }

        if($tax_query) {
            $query->set( 'tax_query', array(
                'relation' => 'AND',
                $tax_query
            ));
        }


   

    }
    add_action( 'pre_get_posts', 'my_modify_main_query' );
