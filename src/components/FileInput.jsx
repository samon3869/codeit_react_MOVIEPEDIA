import { useState } from "react";

function FileInput() {
    const [value, setValue] = useState();

    const handleChange = (e) => {
        console.log(e.target.value);
        const nextValue = e.target.files[0];
        setValue(nextValue);
    };

    return <input type="file" value={value} onChange={handleChange} />;
}

export default FileInput;