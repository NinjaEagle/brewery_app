import React from 'react';


const Beerlist = props => {

  function likeHandler(name){
    fetch('/api/beer', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        brewid:name,
      })
    })
  }
  return(
    props.dataLoaded ?
      props.beerList.map((x, i) => {
        return(
          <div key={i}>
            <img src={x.labels.icon}/>
            <p>{x.name}</p>
            <p>{x.brewery}</p>
            <p>{x.country}</p>
            <p>{x.abv}</p>
            <button onClick={() => likeHandler(x.name)}> add to favorites! </button>
          </div>
        )
      })
        // .then(getFavs)
      : <p> Select a type of beer to see its list </p>
    )
}
export default Beerlist
