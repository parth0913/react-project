import Navbar from '../Navbar/Navbar';
import Categories from '../Categories/Categories';
import Bannerslider from '../Premium/BannerSlider';
import CardSection from '../Explore/Explore';
import Banner from '../luxe/Banner';
import OccasionSection from '../Occasion/Occasion';
import SurpriseSection from '../Surprise/Surprise';
import FavouriteSection from '../Favourite/Favourite';
import ShowStopperSection from '../ShowStopper/ShowStopper';
import PairSection from '../Pair/Pair';
import PriceBanner from '../Price Banner/PriceBanner';
import DeliverySection from '../Delivery/Delivery';
import PreservedBanner from '../Preserved/Preserved';
import GlobalSection from '../Global/Global';
import CustomerReviews from '../Comment/CustomerReviews';
import DropDownBar from '../DropDownBar/DropDownBar';

function App() {
  return (
    <div className='homepage'>
       <Navbar/>
       <hr/>
       <DropDownBar/>
       <hr/>
       <Categories/>
       <Bannerslider/>
       <CardSection/>
       <OccasionSection/>
       <SurpriseSection/>
       <FavouriteSection/>
       <ShowStopperSection/>
       <Banner/>
       <PairSection/>
       <PriceBanner/>
       <DeliverySection/>
       <PreservedBanner/>
       <GlobalSection/>
       <CustomerReviews/>
    </div>
  );
}

export default App;
