function palindrome(str) {

    const olnyAlphaNumberic = str
      .toLowerCase()
      .match(/[a-z0-9]/g);
    
  
    return olnyAlphaNumberic.join('')===olnyAlphaNumberic.reverse().join('');
    //return true;
  }
  
  palindrome("eye");