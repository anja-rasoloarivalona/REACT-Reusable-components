import React from 'react';
import Button from '../Button/Button';

const myBtn = () => {
    return (
        <div className="button-example">
            <Button
                onClick={() => alert('Button clicked')}
                customClass={'my-btn-class'}
            >
                Button
            </Button>

            <Button
                link={'/'}
                onClick={() => console.log('Link to home clicked')}
            >
                Home
            </Button>
            <Button
                link={'inventory'}
                onClick={() => console.log('Link to inventory clicked')}
            >
                inventory
            </Button>
        </div>
    )
}

export default myBtn