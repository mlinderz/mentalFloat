import React from 'react';
import '../App.css';
import MotivationButton from "../components/MotivationButton"

class MotivationPage extends React.Component {

  state= {list:[]}

  componentDidMount(){
    const nytAPIkey = "2GYuC8miX6UGJhKCRRCA5GG1y4ct5DMi"
    const whatToRead= "Motivational Story"
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${whatToRead}&api-key=${nytAPIkey}`)
      .then(res=>res.json())
      .then(data=>{
        this.setState({list: data.response.docs})
        console.log(data)
      }, 
        error=>console.log("something bad happened"))


  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <img src="/mentalfloat.png" className="App-logo" alt="logo" />
        </header>
        <h1>Motivation</h1>
        <h2></h2>
        {this.state.list.map(article=>{
          return(
            <MotivationButton href={article.web_url}>{article.headline.main}</MotivationButton>
          )
        })}
    </div>
  );}
}

export default MotivationPage; 