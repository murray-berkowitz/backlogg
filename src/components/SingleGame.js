import React, {Component} from 'react';
import axios from 'axios';

export default class SingleGame extends Component{
    constructor(props){
        super(props)
        this.state = {
            game : {},
            bgImage: '',
            coverImage:''
        }
    }
    componentDidMount(props){
        axios.get(`/api/game/${this.props.match.params.gameTitle}`)
        .then(res => res.data)
        .then(game => {
            console.log(game.body[0])
            this.setState({
                game: game.body[0],
                bgImage: game.body[0].screenshots[0].cloudinary_id,
                coverImage: game.body[0].cover.cloudinary_id
            })
        })
    }
    componentWillReceiveProps(nextProps){
        axios.get(`/api/game/${nextProps.match.params.gameTitle}`)
        .then(res => res.data)
        .then(game => {
            console.log(game.body[0])
            this.setState({
                game: game.body[0],
                bgImage: game.body[0].screenshots[0].cloudinary_id,
                coverImage: game.body[0].cover.cloudinary_id
            })
        })
    }
    render(){
        const {game, bgImage, coverImage} = this.state;
        console.log(game)
        return (
            <section className='singleGame' style={{backgroundImage:`url('https://images.igdb.com/igdb/image/upload/t_1080p/${bgImage}.png')`}}>
              <div className='mask'></div>
                <div className='gameInfo'>
                    <div className='wrapper'>
                        <div className='row'>
                            <div className='featuredImage'>
                              <img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${coverImage}.png`} />
                            </div>
                            <div className='info'>
                                <h4 className='title'>{game.name}</h4>
                                <p className='description'>{game.summary}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}