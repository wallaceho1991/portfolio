import React from 'react';

class Header extends React.Component {

  constructor(){
    super();
    this.state = {
      activeTab: 'works'
    }
  }

    render() {
      return (
        <div class="pal">
          <div><span class="f2">Wallace Ho</span></div>
          <div><span class="f4">UI UX Developer</span></div>
          <div class="tabs-ctn">
            <button className="f4 ud btn clear">
            </button>
            <button className="f4 ud btn clear">
            </button>
          </div>
        </div>
      );
    }
  }


  export default Header;