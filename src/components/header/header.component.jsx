import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentuser } from '../../redux/user/user.selector';

const Header  = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {!hidden && <CartDropDown/>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentuser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps) (Header)
