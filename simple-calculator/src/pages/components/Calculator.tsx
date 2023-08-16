export default function Calculator(){
    return(
        <div class='container'>
            <div class='display-screen'></div>
            <div class='buttons-container'>

                <div class='row-container'>
                    <button>AC</button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="plus-minus"><rect width="256" height="256" fill="none"></rect><line x1="200" x2="56" y1="56" y2="200" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="32" x2="112" y1="72" y2="72" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="72" x2="72" y1="32" y2="112" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="144" x2="224" y1="184" y2="184" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line></svg></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="percent"><g data-name="Layer 2"><path d="M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11zm0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 6zm8 8a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 14zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 19zm3.74-14.74a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z" data-name="percent"></path></g></svg></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="divide"><rect width="256" height="256" fill="none"></rect><line x1="40" x2="216" y1="128" y2="128" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><circle cx="128" cy="64" r="20"></circle><circle cx="128" cy="192" r="20"></circle></svg></button>
                </div>
                <div class='row-container'>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="close"><path d="M19.8534546,19.1465454L12.7069092,12l7.1465454-7.1465454c0.1871948-0.1937256,0.1871948-0.5009155,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681l-7.1465454,7.1465454L4.8534546,4.1465454c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0C3.960144,4.3383789,3.9546509,4.6549072,4.1464844,4.8535156L11.2929688,12l-7.1464844,7.1464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C4,19.776062,4.223877,19.999939,4.5,20c0.1326294,0.0001221,0.2598267-0.0526123,0.3534546-0.1465454l7.1464844-7.1464844l7.1465454,7.1465454C19.2401123,19.9474487,19.3673706,20.0001831,19.5,20c0.1325073-0.000061,0.2595825-0.0526733,0.3533325-0.1463623C20.048645,19.6583862,20.0487061,19.3417969,19.8534546,19.1465454z"></path></svg></button>
                </div>
                <div class='row-container'>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="minus"><path d="M38 26H10v-4h28v4z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg></button>
                </div>
                <div class='row-container'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus"><g data-name="Layer 2"><g data-name="plus"><rect width="24" height="24" opacity="0" transform="rotate(180 12 12)"></rect><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"></path></g></g></svg></button>
                </div>
                <div class='row-container'>
                    <button>0</button>
                    <button>,</button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="equal"><path fill="#212121" d="M2.75,9.25 L13.25,9.25 C13.6642136,9.25 14,9.58578644 14,10 C14,10.3796958 13.7178461,10.693491 13.3517706,10.7431534 L13.25,10.75 L2.75,10.75 C2.33578644,10.75 2,10.4142136 2,10 C2,9.62030423 2.28215388,9.30650904 2.64822944,9.25684662 L2.75,9.25 L13.25,9.25 L2.75,9.25 Z M2.75,5.25 L13.25,5.25 C13.6642136,5.25 14,5.58578644 14,6 C14,6.37969577 13.7178461,6.69349096 13.3517706,6.74315338 L13.25,6.75 L2.75,6.75 C2.33578644,6.75 2,6.41421356 2,6 C2,5.62030423 2.28215388,5.30650904 2.64822944,5.25684662 L2.75,5.25 L13.25,5.25 L2.75,5.25 Z"></path></svg></button>
                </div>

            </div>
        </div>
    )
}