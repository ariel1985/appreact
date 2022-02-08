require("./index.css");
var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$react = require("react");
var $ltMAx$reactdom = require("react-dom");
require("bootstrap/dist/css/bootstrap.css");
var $ltMAx$reactflippy = require("react-flippy");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}








var $34863830f290f84b$exports = {};
$34863830f290f84b$exports = new URL("crypto-icon.49bdfc11.png", "file:" + __filename).toString();


function $5b0b594e280c2017$export$2e2bcd8739ae039(props) {
    const [limit, setLimit] = $ltMAx$react.useState(150);
    const [startIndex, setStartIndex] = $ltMAx$react.useState(0);
    const [endIndex, setEndIndex] = $ltMAx$react.useState(limit);
    console.log('at first', 'start', startIndex, 'end', endIndex, 'limit', limit);
    cryptos = [];
    props.data.slice([
        startIndex
    ], [
        endIndex
    ]).map((item, i)=>{
        cryptos.push(item);
    });
    console.log('props', props.data.length, props.userInput);
    console.log(cryptos.length, cryptos);
    function parseTimestamp(timestamp) {
        const dateTime = new Date(timestamp);
        return dateTime.getHours() + ':' + dateTime.getMinutes();
    }
    function getPrevious() {
        start = startIndex - limit < 0 ? 0 : startIndex - limit;
        end = start + limit;
        console.log('start', start, 'end', end, 'limit', limit);
        setStartIndex(start);
        setEndIndex(end);
    }
    function getNext() {
        arrlimit = props.data.length - 1;
        start = startIndex + limit > arrlimit ? arrlimit : startIndex + limit;
        end = start + limit > arrlimit ? arrlimit : start + limit;
        setStartIndex(start);
        setEndIndex(end);
    }
    return(/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        className: "container",
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                children: " Coins Data"
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                "aria-label": "Page navigation example",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                    className: "pagination justify-content-center",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                            className: "page-item",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                className: "page-link",
                                href: "#",
                                tabIndex: "-1",
                                onClick: getPrevious,
                                children: "Previous"
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                            className: "page-item",
                            style: {
                                marginLeft: '1%',
                                marginRight: '1%'
                            },
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h3", {
                                className: "title",
                                children: [
                                    startIndex,
                                    "-",
                                    endIndex,
                                    " / ",
                                    props.data.length - 1,
                                    " "
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                            className: "page-item",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                className: "page-link",
                                href: "#",
                                onClick: getNext,
                                children: "Next"
                            })
                        })
                    ]
                })
            }),
            cryptos.map((val, id)=>{
                return(/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs(($parcel$interopDefault($ltMAx$reactflippy)), {
                    flipOnHover: false,
                    flipOnClick: true,
                    flipDirection: "horizontal" // horizontal or vertical
                    ,
                    ref: (r)=>this.flippy = r
                    ,
                    className: "flipper",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactflippy.FrontSide, {
                            className: "cardBg",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "card",
                                style: {
                                    width: '13rem'
                                },
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        className: "card-header",
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                                            className: "heading",
                                            children: val.symbol
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                                        className: "card-img-top appimg",
                                        src: (/*@__PURE__*/$parcel$interopDefault($34863830f290f84b$exports)),
                                        alt: "Card image cap"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactflippy.BackSide, {
                            className: "cardBg",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        className: "card-header",
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                                            className: "heading",
                                            children: val.symbol
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        className: "card-body",
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("dl", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("dt", {
                                                    children: "Open"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("dd", {
                                                    children: [
                                                        "Time:  ",
                                                        parseTimestamp(val.openTime),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("dd", {
                                                    children: [
                                                        "Price: ",
                                                        parseInt(val.openPrice)
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("dt", {
                                                    children: "Close"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("dd", {
                                                    children: [
                                                        "Time:  ",
                                                        parseTimestamp(val.closeTime),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("dd", {
                                                    children: [
                                                        "Price: ",
                                                        parseInt(val.openPrice)
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("dt", {
                                                    children: "General:"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("dd", {
                                                    children: [
                                                        "Volum: ",
                                                        parseInt(val.volume)
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("dd", {
                                                    children: [
                                                        "Chagne: ",
                                                        parseInt(val.priceChange)
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }, id));
            })
        ]
    }));
}


function $7617588f5da179bf$export$2e2bcd8739ae039() {
    function fetchCoin(data, userInput) {
        console.log('data in isCoin', typeof data, userInput);
        for(let key in data)// console.log('keys', key, data[key])
        if (Object.hasOwnProperty.call(data, key)) {
            const e = data[key];
            if (e['symbol'].toUpperCase() == userInput.toUpperCase()) return data;
        }
        return false;
    }
    return {
        fetchCoin: fetchCoin
    };
}


function $da11a1101b2a894a$export$2e2bcd8739ae039() {
    // initial hook setup  (must be at the top of the function)
    // TODO - loginState - update it ...
    const [stateLogin, setStateLogin] = $ltMAx$react.useState(false);
    const [stateUserInput, setUserInput] = $ltMAx$react.useState('');
    const [searchState, setSearchState] = $ltMAx$react.useState('hideme');
    const [msgState, setMsgState] = $ltMAx$react.useState('hideme');
    const [msg2State, setMsg2State] = $ltMAx$react.useState('hideme');
    const [searchBtnState, setSearchBtnState] = $ltMAx$react.useState('btn btn-primary appbtn');
    const [coinsDataState, setCoinsData] = $ltMAx$react.useState({
    });
    const { fetchCoin: fetchCoin  } = $7617588f5da179bf$export$2e2bcd8739ae039();
    /**
   * Fetches data from given url
   * if input value is in json - login - go to home page
   */ function handleButtonClick(e) {
        e.preventDefault();
        setMsgState('hideme');
        if (stateUserInput && stateUserInput.length > 3) {
            //TODO - better logic for toggle !!
            setSearchState('alert alert-primary appbtn');
            setSearchBtnState('hideme');
            setMsg2State('hideme');
            setMsgState('hideme');
            let url = 'https://api2.binance.com/api/v3/ticker/24hr';
            fetch(url).then((res)=>{
                return res.json();
            }).then((data)=>{
                return fetchCoin(data, stateUserInput);
            }).then((validCoin)=>{
                if (validCoin) {
                    setCoinsData(validCoin);
                    setUserInput(stateUserInput);
                    setStateLogin(true);
                } else {
                    setSearchState('hideme');
                    setSearchBtnState('btn btn-primary appbtn');
                    setMsgState('alert alert-danger');
                }
            }).catch((err)=>{
                setSearchBtnState('btn btn-primary appbtn');
                setSearchState('hideme');
                setMsgState('hideme');
                setMsg2State('alert alert-danger appbtn');
                console.error('Error!!!', err);
            });
        } else setMsgState('alert alert-danger appbtn');
    }
    function handleInputChange(e) {
        setUserInput(e.target.value);
    }
    if (stateLogin) return(/*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($5b0b594e280c2017$export$2e2bcd8739ae039, {
        data: coinsDataState,
        userInput: stateUserInput
    }));
    return(/*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        className: "container-fluid",
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            className: "form-signin form-horizontal",
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                        className: "header",
                        children: "Welcome!"
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                htmlFor: "coin",
                                className: "form-label",
                                children: "Please Enter a Valid Coin to Login: "
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                id: "coin",
                                className: "form-control",
                                type: "text",
                                value: stateUserInput,
                                onChange: handleInputChange,
                                placeholder: "Enter Coin Code"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: searchBtnState,
                        onClick: handleButtonClick,
                        children: "Login"
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: searchState,
                        children: [
                            "Searching for coin. ",
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {
                            }),
                            " Thank you for waiting..."
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                        className: msgState,
                        children: "Error - Please type a valid coin"
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                        className: msg2State,
                        children: "Error - please check internet"
                    })
                ]
            })
        })
    }));
}




($parcel$interopDefault($ltMAx$reactdom)).render(/*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($da11a1101b2a894a$export$2e2bcd8739ae039, {
}), document.getElementById("root"));


//# sourceMappingURL=index.js.map
