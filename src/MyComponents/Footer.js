import React from 'react';

function Footer() {
  

  let footerStyle ={
   	marginTop: '40px',
   	width: '100%'
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
    	<p className="text-center">
    		Copyright &copy; MyTodoList.com
    	</p>
    	
    </footer>
    
  );
}

export default Footer;
