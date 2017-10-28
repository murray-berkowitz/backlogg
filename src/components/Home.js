import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            games : []
        }
    }
    componentDidMount(){
        axios.get('/api/games')
        .then(res => res.data)
        .then(games => {
            this.setState({
                games: games.body
            })
        })
    }
    render(){
        const {games} = this.state
        console.log(games)
        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 4,
            slidesToScroll: 1
          };
        return (
            <section className='featuredGames'>
              <div className='wrapper'>
                 <h4 className='title'>Most Popular</h4>
                 <Slider {...sliderSettings}>
                 {
                     games.map((game)=>(
                         <div className='gameSlide'><Link key={game.id} to={`/game/${game.slug}`}> <img src={`https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.cloudinary_id}.png`} /><h4>{game.name}</h4></Link></div>
                     ))
                 }
                 </Slider>
              </div>
            </section>
        )
    }
}