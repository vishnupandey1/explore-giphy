import React , { Component } from 'react';
import './App.css';

export class Gallery extends Component {

  render() {
   const { giphys } = this.props;

   return (
     <div>
       {
         giphys.map((giphy, k) => {
          let url = `//media.giphy.com/media/${giphy['id']}/giphy.gif`;
           return (
             <div
               key={k}
               className="giphy"
               onClick={<a id={k}  target="_blank"></a>}
             >
               <img
                 className="giphy-img"
                 alt="giphy"
                 src={url}
               />
             </div>
           )
         }
       )}
     </div>
   )
 }
}