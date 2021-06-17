import React from 'react';
import logo from '../../logo.svg';
import employeeLogo from '../../users.png';

const LandingComponent = () => {
    return (
        <div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <div className="eight wide column">
                        <h3 className="ui header">Employee Performance Review</h3>
                        <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                        <h3 className="ui header">We Make Bananas That Can Dance</h3>
                        <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                    </div>
                    <div className="six wide right floated column">
                        <img
                            src={employeeLogo}
                            className="ui large bordered rounded image"
                        />
                    </div>
                </div>
                
            </div>
        </div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <div className="eight wide column">
                        <h3 className="ui header">We Help Companies and Companions</h3>
                        <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                        <h3 className="ui header">We Make Bananas That Can Dance</h3>
                        <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                    </div>
                    <div className="six wide right floated column">
                        <img
                            src={logo}
                            className="ui large bordered rounded image"
                        />
                    </div>
                </div>
                
            </div>
        </div>
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
                <div className="row">
                    <div className="eight wide column">
                        <h3 className="ui header">We Help Companies and Companions</h3>
                        <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                        <h3 className="ui header">We Make Bananas That Can Dance</h3>
                        <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                    </div>
                    <div className="six wide right floated column">
                        <img
                            src={employeeLogo}
                            className="ui large bordered rounded image"
                        />
                    </div>
                </div>
             
            </div>
        </div>
        </div>
    )
}

export default LandingComponent;