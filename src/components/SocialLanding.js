import React from 'react';
import Header from './Header'
import BCorp from './bCorp'

class SocialLanding extends React.Component {
  redirect(){
    window.location.href="https://bluebirdbotanicals.com";
  }
  render(){
  return (
    <div className="SocialLanding">
      <Header />
      <BCorp redirect={this.redirect}/>
    </div>
  );
}
}
export default SocialLanding;