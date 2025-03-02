import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');
    const [lineCount, setLineCount] = useState(1);
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    const handleupClick = () => {
        saveToHistory();
        setText(text.toUpperCase());
    };

    const handlelowClick = () => {
        saveToHistory();
        setText(text.toLowerCase());
    };

    const extractEmails = () => {
        saveToHistory();
        let emails = text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g);
        setText(emails ? emails.join("\n") : "No emails found");
        setLineCount(emails ? emails.length : 0);
    };

    const removeSpecificEmails = (keyword) => {
        saveToHistory();
        let emails = text.split("\n").filter(email => !email.includes(keyword));
        setText(emails.join("\n"));
        setLineCount(emails.length);
    };

    const handleOnClick = (event) => {
        saveToHistory();
        setText(event.target.value);
        setLineCount(event.target.value.split("\n").length);
    };

    const saveToHistory = () => {
        setHistory([...history, text]);
        setRedoStack([]);
    };

    const handleUndo = () => {
        if (history.length > 0) {
            setRedoStack([text, ...redoStack]);
            setText(history[history.length - 1]);
            setHistory(history.slice(0, -1));
        }
    };

    const handleRedo = () => {
        if (redoStack.length > 0) {
            setHistory([...history, text]);
            setText(redoStack[0]);
            setRedoStack(redoStack.slice(1));
        }
    };

    const keywords = [
        "gurulady", "realestate", "insurance", "account", "product", "equipment", "team", 
        "impillar", "%", "feedback", "image", "milltary", "godaddy", "truck", "transport", 
        "agency", "lawfirm", "sentry", "font", "email", "mydomain", ".webp", ".jpg", ".png", 
        ".gov", "enquiries", "support", "news", "media", "sale", "customerservice", "customer", 
        "hello", "career", "google", "googleadservices", "dollar", "ibew", "walmart", "store", 
        "bestbuy", "homedepot", ".au", ".nz", ".tz", ".edu", ".@", ".@all", ".com.", "gif", "svg", 
        "school", "army", "agent", "avif", ".tv", "jpeg", "jpg", ".ie", ".uk", ".ea", ".pg", "@tcco.com", 
        "@patch.com", "lear", "train", "sentry", ".mil", ".gif", ".jpeg", "example", "domain", "%", "u00", 
        ".tv", ".conten", ".format", ".js", ".svg", "filler", "impallari", "your", "address", "sansoxygen", 
        "@email.com", "yourname@", "college", "lato", "@inquirer", "health", "press", ".ml", ".ru", "@domain.com", 
        "@costar.com", "realtor", "@redfin", "@exprealty.net", "homestore.net", "@tampabay.com", "@thomsonreuters.com", 
        "law", ".k12.ca.us", "licens", "@thebaltimorebanner.com", "@latimes.com", "@allgire.com", "@bestbuy.com", 
        "dollar", "walmart", "eben", "job", "question", "reply", "xxx", "help", "incentive", "permit", "chamber", 
        "finance", "billing", "licens", "educat", "legal", "www", "your@", "bank", "webmaster", "book", "capitol", 
        "letter", "medical", "site", "hotel", "market", "pdf", "fitnes", "cpmca", "link", "communicat", "postmaster", 
        "product", "equipment", "agency", "lawfirm", "googleadservices", "finance", "your@", "privacy", "bbb", 
        "nextdoor", "bluebook", "facebook",
    ];

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} onChange={handleOnClick} id='mybox' rows='8'></textarea>
            </div>
            <p><strong>Line Count:</strong> {lineCount}</p>

            {/* Undo/Redo Buttons - Right Aligned */}
            <div className='d-flex justify-content-end mt-2'>
                <button className='btn btn-warning m-2' onClick={handleUndo}>Undo</button>
                <button className='btn btn-info m-2' onClick={handleRedo}>Redo</button>
            </div>

            {/* Main Buttons - Center Aligned */}
            <div className='text-center mt-3'>
                <button className='btn btn-primary m-2' onClick={handleupClick}>Convert to Uppercase</button>
                <button className='btn btn-primary m-2' onClick={handlelowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary m-2' onClick={extractEmails}>Extract Emails</button>
            </div>

            {/* Remove Specific Emails Buttons - Right Aligned */}
            <div className='d-flex flex-wrap justify-content-start mt-3'>
                {keywords.map((keyword, index) => (
                    <button key={index} className='btn btn-danger m-1' onClick={() => removeSpecificEmails(keyword)}>
                        {keyword}
                    </button>
                ))}
            </div>
        </div>
    );
}
