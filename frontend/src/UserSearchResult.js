import React from 'react';
// import Details from './Details'
import Logo_black from './images/Logo_black.jpg'
import Powered_by_Foursquare_black_300 from './images/Powered_by_Foursquare_black_300.png'
import {
    HashRouter as Router,
    Route,
    Link, NavLink, Switch
} from 'react-router-dom'

// const URL = "http://localhost:3456/restaurants";

class UserSearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = { headlines: this.props.dummydata, restaurants: this.props.dummydata }

    }

    componentDidMount() {
        //at some point we will use fetch to get data from our rest endpoints but not made yet. 
        /*     fetch(URL)
              .then(results => {
                if (!results.ok) {
                  throw Error(results.statusText);
                }
                return results.json();
              }).then(data => {
        */
        const headlines = dummydata.map((head) => {

            return (
                <tr>
                    <th ><img src={Powered_by_Foursquare_black_300} alt="p4s" width="100" ></img></th>
                </tr>
            )

            this.setState({ headlines: headlines })

        })

        const restaurants = dummydata.map((restaurant) => {

            return (

                <tr key={restaurant.id}>
                    <td> {restaurant.id}</td> <td><img src={restaurant.imgurl} alt="thumb" width="50"></img></td>
                    <td>{restaurant.name} <td> </td> <img src={Logo_black} width="20"></img></td><td>{restaurant.type}{restaurant.pricerange}</td>
                    <td>{restaurant.url}<td /> <td> </td>{restaurant.price_range}</td><td>Reviews {restaurant.number_of_reviews}</td>
                    {/* <td><Link to={`/all/${restaurant.name}`}>Details</Link> </td> */}


                </tr>
            )
        })
        this.setState({ restaurants: restaurants })

    }

    render() {


        return (

            <div>

                <img src={Powered_by_Foursquare_black_300} alt="p4s" width="200" align="right"></img>
                <table className="table">

                    <thead>

                        {this.state.headlines}
                    </thead>
                    <tbody>
                        {this.state.restaurants}

                    </tbody>
                </table>

                {/* <Route path={`/all/:id`}  render={(props) => <Details {...props} />}/> */}

            </div>

        );
    }

}

export default UserSearchResult;

const dummydata = [{
    "name": "Dominos",
    "type": "fast food",
    "price_range": "cheap",
    "number_of_reviews": "33",
    "url": "dominos.dk",
    "imgurl": "http://mediacdn.dominos.co.il/_media/images/header/logo.png"
},
{
    "name": "McDonalds",
    "type": "fast food, family",
    "price_range": "cheap",
    "number_of_reviews": "4",
    "url": "www.mcdonalds.dk",
    "imgurl": "https://www.mcdonalds.com/content/dam/prelaunch/nordic/icons/m_logo.png"
},
{
    "name": "Burger King",
    "type": "fast food, family",
    "price_range": "cheap",
    "number_of_reviews": "15",
    "url": "www.burgerking.dk",
    "imgurl": "https://media-cdn.tripadvisor.com/media/photo-s/11/0f/6d/9c/burger-king.jpg"
},
{
    "name": "Cafe Woody",
    "type": "family, local",
    "price_range": "expensive",
    "number_of_reviews": "02",
    "url": "www.cafewoody.dk",
    "imgurl": "http://cafewoody.dk/wp-content/uploads/2012/07/woody_logo21.png"
},
{
    "name": "Sticks'nSushi",
    "type": "family, local, asian",
    "price_range": "expensive",
    "number_of_reviews": "99",
    "url": "www.sushi.dk",
    "imgurl": "https://www.dominos.dk/x.gif.pagespeed.ce.wttFqPSUxL.gif"
},
{
    "name": "Big Mamma's Pizzaria",
    "type": "fast food, family, local, pizzaria",
    "price_range": "average",
    "number_of_reviews": "5",
    "url": "www.bigmamma-pizzahouse.dk",
    "imgurl": "http://www.bigmamma-pizzahouse.dk/wp-content/themes/monmarthe/images/header-bg.jpg"
},
{
    "name": "Rådvad Kro",
    "type": "luxus, family",
    "price_range": "expensive",
    "number_of_reviews": "1",
    "url": "www.raadvadkro.dk",
    "imgurl": "http://www.raadvadkro.dk/images/logo.png"
},
{
    "name": "Post-Pop Steakhouse",
    "type": "local, luxus, steakhouse",
    "price_range": "expensive",
    "number_of_reviews": "8",
    "url": "www.postpub.dk/",
    "imgurl": "http://www.postpub.dk/wp-content/uploads/2016/07/Asset-1.svg"
},
{
    "name": "Noma",
    "type": "luxus, gourmet",
    "price_range": "very expensive",
    "number_of_reviews": "7",
    "url": "www.noma.dk",
    "imgurl": "https://www.dominos.dk/x.gif.pagespeed.ce.wttFqPSUxL.gif"
},];