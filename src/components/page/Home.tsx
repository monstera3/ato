import { FeaturedExhibition } from './FeaturedExhibition';
import { RecentlyReview } from './RecentlyReview';
import React from 'react';

export const Home=()=> {
  return(
    <div>
      <FeaturedExhibition/>
      <RecentlyReview />
    </div>
  );
};
