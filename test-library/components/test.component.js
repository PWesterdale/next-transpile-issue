import React, { useState } from 'react';

export default () => {
    const [name, setName] = useState('Paul')
    return (
        <h1>Hello {name}</h1>
    )
}