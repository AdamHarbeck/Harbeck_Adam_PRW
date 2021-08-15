import Header from "./components/Header";
import './App.css';
import React, {Component} from "react";
import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";
import CreatePost from "./components/CreatePost";
import PostCard from "./components/PostCard";
import Prof1 from "./images/person1.jpg";
import Prof2 from "./images/person2.jpg";
import Landscape from './images/landscape.jpg';
import Skydive from './images/skydive.jpg';
import prof from './images/profile.jpg'

/*
COLOR PALETTE:
Eerie Black: #191716
Honeydew: #EDFFEE
Nyazna: #DAFFD6
Champagne: #F6E7CB
Slate Gray: #63768D
Columbia Blue: #B9D2DF
 */

class App extends Component {
    state = {
        myTitle: '',
        myDesc: '',

        pList:[{
            pPic: Prof1,
            pName: 'Thomas Guthrie',
            pTitle: 'This was an amazing place to shoot.',
            pDesc: <img src={Landscape} alt={'Stone circles surrounded by grass and mountains.'} style={styles.imgContainer}/>
        },{
            pPic: Prof2,
            pName: 'Valencio Montoya',
            pTitle: `I can't believe that I jumped!`,
            pDesc: <img src={Skydive} alt={'A person skydiving'} styles={styles.imgContainer} />,
        }]
    }

    changeI = e =>{
        this.setState({myTitle:e.target.value});
        console.log(this.state.myTitle)
    }
    changeT = e =>{
        this.setState({myDesc:e.target.value});
    }

    addPost = e =>{
        e.preventDefault();
        console.log(e)
        this.setState({
            pList: [...this.state.pList, {
                pPic: prof,
                pName: 'Doug Mathers',
                pTitle: this.state.myTitle,
                pDesc: this.state.myDesc
            }]
        });
        e.target.reset();
    }

    removeName = key =>{
        console.log('delete')
        this.state.pList.splice(key, 1);
        this.setState({pList: this.state.pList});
    }

    render() {
        let postList = this.state.pList.map((element, i)=>{
            return <PostCard key={i} val={element} delMe={()=>this.removeName(i)}/>
        });
        return (
            <div className="App">
                <Header/>
                <div style={styles.container}>
                    <LeftNav />
                    <div style={styles.contentContain}>
                        <CreatePost
                            inputName={this.state.myTitle}
                            tArea={this.state.myDesc}
                            changedI={this.changeI}
                            changedT={this.changeT}
                            addPost={this.addPost}
                        />
                        {postList}
                    </div>
                    <RightNav />
                </div>
            </div>
        )
    }
}

export default App;

const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: '#B9D2DF'
    },
    contentContain: {
        width: 'calc(100%/5 * 3 + 10rem)',
        border: '.1rem solid',
        margin: '0 auto',
        borderTop: 'none',
    },
    imgContainer: {
        width: '64rem',
        height: '36rem',
        objectFit: 'cover'
    }
}