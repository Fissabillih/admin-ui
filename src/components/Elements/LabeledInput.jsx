import React from "react";

function LabeledInput(props) {
    const { label, id, ...rest } = props;

    return (
        <>
            <label htmlFor={id} className="block text-sm font-semibold mb-2 text-defaultBlack">
                {label}
            </label>
            <input
                className="py-3 pl-4 text-sm rounded-md w-full bg-white border border-gray-03 text-gray-01 focus:border-primary focus:outline-none focus:ring-0"
                id={id}
                {...rest}
            />
        </>
    );
}

export default LabeledInput;
