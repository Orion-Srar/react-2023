import React, {FC} from 'react';
import Cars from "../components/Cars/Cars";

interface IProps {
}

const CarPage: FC<IProps> = () => {
    return (
        <div>
            <Cars/>
        </div>
    );
};

export {
    CarPage
}