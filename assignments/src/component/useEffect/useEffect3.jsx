import React, { useState, useEffect } from 'react';

function DocumentTitleUpdater() {
    const [pageTitle, setPageTitle] = useState('Default Title');

    useEffect(() => {
        // Update the document title when the pageTitle state changes
        document.title = pageTitle;

        // Cleanup function (optional): Reset the title on component unmount
        return () => {
            document.title = 'React App'; // Reset to a default title or your application name
        };
    }, [pageTitle]); // Run the effect whenever the pageTitle state changes

    // Function to handle input change and update pageTitle state
    const handleInputChange = (e) => {
        setPageTitle(e.target.value);
    };

    return (

        <div>
            <hr />
            <h2>Document Title Updater</h2>
            <label>
                Enter New Title:
                <input type="text" value={pageTitle} onChange={handleInputChange} />
            </label>
            <p>Current Document Title: {document.title}</p>
        </div>
    );
}

export default DocumentTitleUpdater;
