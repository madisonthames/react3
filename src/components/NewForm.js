// import React, {Component} from 'react'

// export default class NewForm extends Component {
//     constructor() {
//       super();

//       this.state = {
//         newUser: {
//           id: 1,
//           name: { first: '', last: '"Lumsdon"' },
//           city: '',
//           country: '',
//           employer: '',
//           title: '',
//           favoriteMovies: [
//             '',
//             '',
//             ''
//           ]
//         },
//     }
  
  
//     render() {
//       return (
      
//       <form onSubmit={ () => this.handle(this.state.users.name.first, this.state.users.name.last)}>
//         <input type="number" userId='number' value={this.state.users.activeId.length - 1}/>
//         <input type="text" first ='First Name' value={this.state.users.name.first}/>
//         <input type="text" last='Last Name' value={this.state.users.name.last}/>
//         <input type="text" city='City' value={this.state.users.city}/>
//         <input type="text" country='Country' value={this.state.users.country}/>
//         <input type="text" employer='Employer' value={this.state.users.employer}/>
//         <input type="text" title='Title' value={this.state.users.title}/>
//         <input type="text" favoriteMovies='Favorite Movies' value={this.state.users.favoriteMovies}/>

//         <button type="submit" value="Submit">BUTTON</button>
//       </form>
//       );
//     }
//   }
// }