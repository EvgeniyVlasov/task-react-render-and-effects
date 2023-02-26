import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);
    const callback = (message: number) => {
        setMessage(message);
    };

    useEffect(() => {
        subscribe(props.sourceId, callback);

        return () => {
            setMessage(-1);
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
