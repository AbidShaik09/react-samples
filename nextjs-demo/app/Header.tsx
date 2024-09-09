import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header style={{backgroundColor:'cyan','height':'13vh'}}>
        Bookinngs.com     <button>Booing</button> <button>Show</button>
    </header>
  )
}

export default Header